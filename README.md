# @benhu/showAssemble

Console log one Assemble code

## Install

```
$ npm install @benhu/showAssemble
```

## Usage

```js
const showAssemble = require("@re4388/showAssemble");

showAssemble(2, 3);
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


## Reference
1. [How to make a beautiful, tiny npm package and publish it](https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/)
2. [譯者序 - C編譯器入門～想懂低階系統從自幹編譯器開始～](https://koshizuow.gitbook.io/compilerbook/)
