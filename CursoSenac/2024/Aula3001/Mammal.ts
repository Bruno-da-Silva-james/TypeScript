import { Animal } from "./Animal";

export class Mammal extends Animal {
    private coat: string
    constructor(name: string, age: number, coat: string) {
        super(age, name)
        this.coat = coat
    }

    breastfeed(): void {
        console.log('This animal is now breastfeeding');
    }

    public setCoat(v: string): void {
        this.coat = v;
    }


    public getCoat(): string {
        return this.coat
    }

}


