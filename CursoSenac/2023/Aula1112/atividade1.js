/*
let myName: string = 'Bruno';
let mySecondName: string = 'James';

let age: number = 18;
let study: boolean = true;

console.log(`Olá sou ${myName} ${mySecondName}, tenho ${age} anos, se sou estudante:${study}`);

let a: number = 10
let b: number = 10

console.log(b); //10
b = 5
console.log(a,b); //10, 5



let a: number = 10
let b: number = 20
let c = a //10
b = c //10
a = b //10

console.log(a,b,c); //10 10 10

*/
var a = 10;
var b = 25;
var c = b;
b = a;
a = c;
console.log(a, b);
