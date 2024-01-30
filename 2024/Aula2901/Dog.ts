import { Animal } from "./Animal";

class Dog extends Animal {
    constructor(name: string, weight: number) {
        super(name, weight);

    }

    bark(): void {
        console.log('Bark');
    }


}
const doge = new Dog('Toby', 10);

doge.name = 'catioro'
console.log(doge.name);

doge.bark();
doge.eat(3);
