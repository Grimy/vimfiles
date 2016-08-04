function! ShowError(lnum, bufnr) abort
	for qf in getqflist()
		if qf.bufnr == a:bufnr && qf.lnum == a:lnum
			echo qf.text
			return
		endif
	endfor
	echo
endfunction

function! OnOutput(channel, data) abort
	let qflist = getqflist()
	silent! cgetexpr a:data
	for qf in filter(getqflist(), 'v:val.bufnr')
		execute 'sign place 1 name=qf' 'line='.qf.lnum 'buffer='.qf.bufnr
		let qf.text = substitute(qf.text, '\n', ' ', 'g')
		call add(qflist, qf)
	endfor
	call setqflist(qflist)
	call ShowError(getpos('.')[1], bufnr('%'))
endfunction

function! AsyncMake() abort
	let argv = split(&makeprg)
	let argv[-1] = expand(argv[-1])
	call setqflist([])
	" if &makeprg ==# 'make' && !filereadable('Makefile')
		" execute 'lcd' substitute(findfile('Makefile', '.;'), 'Makefile', '', '')
	" endif
	sign unplace *
	silent! call job_start(argv, {'out_cb': 'OnOutput', 'err_cb': 'OnOutput'})
endfunction

augroup QuickFix
	autocmd!
	autocmd CursorMoved * call ShowError(getpos('.')[1], bufnr('%'))
	autocmd BufWritePost * call AsyncMake()
augroup END

sign define qf text=>< texthl=ErrorSign

nnoremap <CR> :<C-U>try<Bar>cnext<Bar>catch<Bar>cfirst<Bar>endtry<CR>zx
