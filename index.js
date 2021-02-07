module.exports = function showAssemble(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new TypeError("not number");
    }
    return `
    .intel_syntax noprefix
    .global plus, main

    plus:
        add rsi, rdi
        mov rax, rsi
        ret


    main:
        mov rdi, ${num1}
        mov rsi, ${num2}
        call plus
        ret
    `
};



