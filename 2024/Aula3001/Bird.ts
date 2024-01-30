import { Animal } from "./Animal";

export class Bird extends Animal {
    private wingspan: number;
    constructor(name: string, age: number, wingspan: number) {
        super(age, name)
    }

    fly(): void {
        console.log('the bird is now flying.');
    }

    getWingspan(): void {
        this.wingspan
    }


    setWingspan(v: number): void {
        this.wingspan = v;
    }

}