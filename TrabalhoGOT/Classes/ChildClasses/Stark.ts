import { NobleHouse } from "../NobleHouse";

export class Stark extends NobleHouse{
    heirList: Array<string> = [];
    constructor(motto:string,name:string) {
        super(name, motto);
    }

    addHeir(nameHeir: string): void {
        this.heirList.push(nameHeir)
    }

    checkHeritage(): Array<string> {
        return this.heirList
    }
}