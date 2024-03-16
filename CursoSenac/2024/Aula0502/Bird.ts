import { Animal } from "./Animal";

export class Bird extends Animal {
    protected wingspan: number;
    constructor(name: string, age: number) {
        super(age, name)
        
    }

    fly(): void {
        console.log('the bird is now flying.');
    }

    getWingspan(): number {
        return this.wingspan
    }


    setWingspan(v: number): void {
        this.wingspan = v;
    }

}