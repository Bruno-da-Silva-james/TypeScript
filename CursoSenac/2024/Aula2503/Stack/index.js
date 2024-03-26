"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayStack_1 = require("./Class/ArrayStack");
var stack = new ArrayStack_1.ArrayStack();
stack.push("oi");
stack.push("ola");
stack.push("tudo bien");
stack.push("priviet");
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());