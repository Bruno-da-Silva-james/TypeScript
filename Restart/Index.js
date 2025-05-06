/*
import { protein } from "./protein";
import { connectDb } from "./sqlPromisse";


let calory: number = 0


console.log(protein.egg);
console.log(protein.chicken);

connectDb.call()
let kidAge: number = 2;
let gommage: number = 33;

let test: boolean = false;

while (test == false) {
  let n1: number = kidAge;
  let n2: number = gommage;

  if (n1 == n2) {
    test = true;
  } else {
    n1 = n1 + 1;
    n2 = n2 - 1;
    console.log(n1);
    console.log(n2);
  }
  
}
*/
var kidAge = 2;
var gommage = 33;
while (kidAge < gommage) {
    kidAge += 1;
    gommage -= 1;
    console.log("kidAge:", kidAge);
    console.log("gommage:", gommage);
}
console.log("Valores se encontraram ou cruzaram:");
console.log("kidAge:", kidAge);
console.log("gommage:", gommage);
