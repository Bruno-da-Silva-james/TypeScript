import { Baratheon } from "./Classes/ChildClasses/Baratheon";
import { Greyjoy } from "./Classes/ChildClasses/Greyjoy";
import { Lannister } from "./Classes/ChildClasses/Lannister";
import { Stark } from "./Classes/ChildClasses/Stark";
import { Targaryen } from "./Classes/ChildClasses/Targaryen";

const houseNumber1 = new Baratheon('Example Motto',"Baratheon");
const houseNumber2 = new Greyjoy('Example Motto',"Greyjoy");
const houseNumber3 = new Lannister('Example Motto',"Lannister");
const houseNumber4 = new Stark('Example Motto',"Stark");
const houseNumber5 = new Targaryen('Example Motto',"Targaryen");

function battleOFtheHouses(nobleHouse1: string, army1:number, nobleHouse2: string,army2:number ,nobleHouse3: string,army3:number, nobleHouse4: string,army4:number,nobleHouse5: string, army5:number,) {
    let armyNumber: Array <number> = []
    
    for (let i = 0; i < armyNumber.length; i++) {
        if (i++ > i) {
            i = i++
        }
    }
}



battleOFtheHouses(houseNumber1.name,100,houseNumber2.name,200,houseNumber3.name,150,houseNumber4.name,201,houseNumber5.name,135)


