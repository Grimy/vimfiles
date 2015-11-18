Comments //
Flow if|for|switch|try|while|with else|case|catch

syn keyword Flow throw continue break
syn keyword Keyword abstract arguments boolean byte char class const debugger
syn keyword Keyword default delete do double enum eval export extends false final
syn keyword Keyword finally float function goto implements import in instanceof
syn keyword Keyword int interface let long native new null package private
syn keyword Keyword protected public return short static super synchronized this
syn keyword Keyword throws transient true typeof var void volatile yield

syn region String matchgroup=Normal start=/\v\z(['"])/ end=/\z1/ contains=SpecialChar
syn region Comment start='\V/*' end='\V*/'
syn match SpecialChar /\v\\(v|x\x{1,2}|u\x{4})/ contained
