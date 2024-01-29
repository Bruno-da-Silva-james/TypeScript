class Dog {
    constructor(name: string, wheigt: Number) {
        this.name = name;
        this.wheigt = wheigt;
    }
    name: string;
    wheigt: Number;

    bark(): void {
        console.log('Bark');
    }

    eat(quantity: number): void {
        console.log(`The dog ate ${quantity} food(s)`);
    }
}

const doge = new Dog('Toby', 10);

doge.bark();
doge.eat(3);
