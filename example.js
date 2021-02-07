const showAssemble = require("./index.js")

const result = showAssemble(2,3)
console.log(result)
// ==>
// .intel_syntax noprefix
// .global plus, main

// plus:
//     add rsi, rdi
//     mov rax, rsi
//     ret


// main:
//     mov rdi, 2
//     mov rsi, 3
//     call plus
//     ret