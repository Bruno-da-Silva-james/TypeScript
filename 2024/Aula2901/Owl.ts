class Owl {
    name: string;
    wheigt: number;
    
    constructor(name: string, wheigt: number) {
        this.name = name;
        this.wheigt = wheigt;
    }

    chirp(): void {
        console.log(`Pru, Pru`);

    }

    eat(quantity: number): void {
        console.log(`The owl ate ${quantity} food(s)`);
    }

    fly(distance: number): void{
        console.log(`The Owl has flown ${distance} meters`);
        
    }
}

const owl = new Owl('Cruja',10);

owl.chirp()
owl.eat(3)
owl.fly(10)