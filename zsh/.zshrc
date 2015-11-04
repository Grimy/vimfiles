setopt autopushd pushdsilent pushdtohome
setopt hist_ignore_dups
setopt prompt_subst prompt_percent

POPD() {
	popd
	zle reset-prompt
}
zle -N POPD

bindkey -e
bindkey '^[[A' history-search-backward
bindkey '^[[B' history-search-forward
bindkey '^[[H' beginning-of-line
bindkey '^[[F' end-of-line
bindkey '^[[1;5A' insert-last-word
bindkey '^[[1;5B' POPD
bindkey '^[[1;5C' forward-word
bindkey '^[[1;5D' backward-word
bindkey '^[[3~'   delete-char
bindkey '^[[3;5~' delete-word

export TERM=xterm-256color
export LANG=en_US.UTF-8
export EDITOR=nvim
export XDG_CONFIG_HOME=~/.config
export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'
export NVIM_TUI_ENABLE_CURSOR_SHAPE=1
export RUST_BACKTRACE=1
export FZF_DEFAULT_COMMAND='ag -l -g ""'
export PATH="$HOME/bin:$XDG_CONFIG_HOME/bin:/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin"
export PENTADACTYL_RUNTIME="$XDG_CONFIG_HOME/pentadactyl"
export PENTADACTYL_INIT=":source $PENTADACTYL_RUNTIME/init"

HISTSIZE=65535
SAVEHIST=$HISTSIZE
HISTFILE="$XDG_CONFIG_HOME/zsh/history"
MAIL='$(mail -e 2>/dev/null && printf "\e[33mYou’ve got mail! ")'
PROMPT="%(???%F{red}(%?%) )$MAIL%f%T %(##%F{red}%m:#%F{green})%~%f%% "

source "$XDG_CONFIG_HOME/zsh/highlighting/zsh-syntax-highlighting.zsh"
source "$XDG_CONFIG_HOME/zsh/autosuggestions/autosuggestions.zsh"
AUTOSUGGESTION_ACCEPT_RIGHT_ARROW=1
zle-line-init() { zle autosuggest-start }
zle -N zle-line-init

alias :q='exit'
alias add='git add'
alias amend='git commit -v --amend --no-edit'
alias bisect='git bisect'
alias branch='git branch -f'
alias cherry='git cherry-pick'
alias clone='git clone'
alias clop='feh ~/p0'
alias commit='git commit -v'
alias cp='/bin/cp -i'
alias cpan='sudo perl -MCPAN -e'
alias diff='git diff --patience'
alias dnf='sudo dnf'
alias dnfy='sudo dnf install -y'
alias f='find . -name'
alias fzf='/usr/bin/ruby ~/.nvim/bundle/fzf/fzf'
alias gpg='rlwrap gpg2 --expert'
alias gs='rlwrap gs'
alias gsql='ssh gerrit gerrit gsql'
alias l='ls -GAhl'
alias ll='ls -GAhl'
alias mv='/bin/mv -i'
alias push='git push'
alias reflog='git reflog'
alias remote='git remote -v'
alias s='git status -sb'
alias show='git show'
alias stash='git stash'
alias stats='git show --oneline --stat'
alias tab='gvim --remote-tab-silent'
alias tag='git tag -f'
alias v="nvim -O"
alias vim="nvim -O"
alias yay='ponysay -f Fluttershy yay'
