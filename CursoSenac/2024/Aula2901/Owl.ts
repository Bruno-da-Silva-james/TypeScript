import { Animal } from "./Animal";

class Owl extends Animal {
    constructor(name: string, weight: number) {
        super(name, weight);

    }

    chirp(): void {
        console.log(`Pru, Pru`);

    }

    fly(distance: number): void {
        console.log(`The Owl has flown ${distance} meters`);

    }
}

const owl = new Owl('Cruja', 10);

owl.chirp()
owl.eat(3)
owl.fly(10)