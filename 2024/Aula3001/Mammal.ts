import { Animal } from "./Animal";

export class Mammal extends Animal {
    private coat: string
    constructor(name: string, age: number,) {
        super(age, name)
    }

    private breastfeed(): void {
        console.log('This animal is now breastfeeding');
    }

    public setCoat(v: string): void {
        this.coat = v;
    }


    public getCoat(): void {
        this.coat
    }

}