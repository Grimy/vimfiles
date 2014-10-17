setlocal nonumber

nnoremap <buffer> <silent> q     :<C-u>quit<CR>
nnoremap <buffer> <silent> <Esc> :<C-u>quit<CR>
nnoremap <buffer> <silent> <Tab> :<C-u>quit<CR>
nnoremap <buffer> <silent> <CR>  i<CR>
inoremap <buffer> <expr> <Tab>   pumvisible() ? "\<C-N>" : ""
inoremap <buffer> <expr> <S-Tab> pumvisible() ? "\<C-P>" : ""
inoremap <buffer> <CR> <CR>

startinsert!
