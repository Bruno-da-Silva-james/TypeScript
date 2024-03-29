import { NobleHouse } from "../NobleHouse";

export class Greyjoy extends NobleHouse{
    heirList: Array<string> = [];
    constructor(motto:string,name:string,army: number) {
        super(name, motto, army);
    }

    addHeir(nameHeir: string): void {
        this.heirList.push(nameHeir)
    }

    checkHeritage(): Array<string> {
        return this.heirList
    }
}