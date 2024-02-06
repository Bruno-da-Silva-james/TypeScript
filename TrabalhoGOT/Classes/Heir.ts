import { HouseHeir } from "../Interface/HouseHeir";

export class Heir implements HouseHeir{
    age: number;
    heirPos: number;
    name: string;
    
    constructor(age:number,heirPos:number,name:string) {
        this.age = age
        this.heirPos = heirPos
        this.name = name
    }
}