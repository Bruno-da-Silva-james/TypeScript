export class Animal {
    name: string;
    wheigt: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.wheigt = weight;

    }

    eat(quantity: number): void {
        console.log(`This animal ate ${quantity} times`);
    }

}