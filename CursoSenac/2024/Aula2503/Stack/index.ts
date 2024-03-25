import { ArrayStack } from "./Class/ArrayStack";

const stack = new ArrayStack();

stack.push("oi");
stack.push("ola");
stack.push("tudo bien");
stack.push("priviet");

stack.pop();
stack.pop();

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());