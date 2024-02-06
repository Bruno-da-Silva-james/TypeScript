import { Heir } from "./Heir";

export class NobleHouse {
    name : string;
    motto : string;
    heirList: Array<string>;
    constructor(name: string, motto:string) {
        this.motto = motto
        this.name = name
    }

    addHeir(nameHeir:string):void{
        this.heirList.push(nameHeir)
    }

    checkHeritage(): Array<string>{
        return this.heirList
    }
}