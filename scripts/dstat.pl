#!/usr/bin/perl

use strict;
use feature qw(state);
use List::Util qw(first sum max);

my %files = ();
my @colors = ("", "\x1b[0;33m", "\x1b[1;31m", "\x1b[0;31m"),
my $SEP = "\x1b[0m |";

$|--;
print " usr | sys |     top-cpu     | mem |     top-mem     | read | writ |  hdd  |\n";

sub lines(_) {
	my ($file) = @_;
	my $fh = \$files{$file};
	$$fh ? seek $$fh, 0, 0 : open $$fh, '<', $file or die "$file: $!";
	return readline $$fh;
}

sub percent {
	my ($part, $total) = @_;
	my $percent = $total && $part / $total * 100;
	printf "$colors[$percent / 30]%3d%%$SEP", $percent;
}

sub top {
	printf "%16.16s |", max @_;
}

sub bytes {
	printf "% 5d |", @_;
}

sub cpu {
	state @old, state @new;
	@new = split for first {/^cpu /} lines '/proc/stat';
	@new = ($new[1] + $new[2], $new[3] + $new[5] + $new[6] + $new[7], sum(@new));
	percent($new[$_] - $old[$_], $new[2] - $old[2]) for 0..1;
	@old = @new;
}

sub top_cpu {
	state @old;
	my @new;
	for (map lines, </proc/*/stat>) {
		@_ = split;
		my $cpu = $_[13] + $_[14];
		$new[$_[0]] = ($cpu - $old[$_[0]]) . " " . substr $_[1], 1, -1;
		$old[$_[0]] = $cpu;
	}
	top @new;
}

sub mem {
	my ($total, $free, $buffers, $cached) = grep s/\w+://, lines '/proc/meminfo';
	percent($total - $free - $buffers - $cached, $total)
}

sub top_mem {
	my @mem;
	for (map lines, </proc/*/stat>) {
		@_ = split;
		$mem[$_[0]] = $_[23] . " " . substr $_[1], 1, -1;
	}
	top @mem;
}

sub io {
	state @old;
	my @new = split ' ', lines '/sys/block/sda/stat';
	bytes $new[3] - $old[3];
	bytes $new[7] - $old[7];
	@old = @new;
}

sub top_io {
}

for (;;) {
	print "\r";
	cpu();
	top_cpu();
	mem();
	top_mem();
	io();
	top_io();
	sleep 1;
}
