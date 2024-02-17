import { Baratheon } from "./Classes/ChildClasses/Baratheon";
import { Greyjoy } from "./Classes/ChildClasses/Greyjoy";
import { Lannister } from "./Classes/ChildClasses/Lannister";
import { Stark } from "./Classes/ChildClasses/Stark";
import { Targaryen } from "./Classes/ChildClasses/Targaryen";

const dudeNumber1 = new Baratheon('Example Motto',"Baratheon");
const dudeNumber2 = new Greyjoy('Example Motto',"Greyjoy");
const dudeNumber3 = new Lannister('Example Motto',"Lannister");
const dudeNumber4 = new Stark('Example Motto',"Stark");
const dudeNumber5 = new Targaryen('Example Motto',"Targaryen");

function battleOFtheHouses(nobleHouse1: string,nobleHouse2: string, army1Number: number, army2Number: number) {
    if (army1Number > army2Number) {
        console.log(`The army of the noble house ${nobleHouse1} has won against noble house ${nobleHouse2}.`);
    }

    if (army2Number > army1Number) {
        console.log(`The army of the noble house ${nobleHouse2} has won against noble house ${nobleHouse1}.`);
    }

    if (army1Number == army2Number) {
        console.log(`There has ben an draw`);
    }
}



battleOFtheHouses(dudeNumber1.name,dudeNumber2.name,100,200)


