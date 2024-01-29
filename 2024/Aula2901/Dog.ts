class Dog {
    private name: string;
    wheigt: Number;

    constructor(name: string, wheigt: Number) {
        this.name = name;
        this.wheigt = wheigt;
    }

    bark(): void {
        console.log('Bark');
    }

    eat(quantity: number): void {
        console.log(`The dog ate ${quantity} food(s)`);
    }
}

const doge = new Dog('Toby', 10);

doge.name = 'catioro'
console.log(doge.name);

doge.bark();
doge.eat(3);
