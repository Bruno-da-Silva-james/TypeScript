"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Baratheon_1 = require("./Classes/ChildClasses/Baratheon");
var Greyjoy_1 = require("./Classes/ChildClasses/Greyjoy");
var Lannister_1 = require("./Classes/ChildClasses/Lannister");
var Stark_1 = require("./Classes/ChildClasses/Stark");
var Targaryen_1 = require("./Classes/ChildClasses/Targaryen");
var dudeNumber1 = new Baratheon_1.Baratheon('Example Motto', "Baratheon");
var dudeNumber2 = new Greyjoy_1.Greyjoy('Example Motto', "Greyjoy");
var dudeNumber3 = new Lannister_1.Lannister('Example Motto', "Lannister");
var dudeNumber4 = new Stark_1.Stark('Example Motto', "Stark");
var dudeNumber5 = new Targaryen_1.Targaryen('Example Motto', "Targaryen");
function battleOFtheHouses(nobleHouse1, nobleHouse2, army1Number, army2Number) {
    if (army1Number > army2Number) {
        console.log("The army of the noble house ".concat(nobleHouse1, " has won against noble house ").concat(nobleHouse2, "."));
    }
    if (army2Number > army1Number) {
        console.log("The army of the noble house ".concat(nobleHouse2, " has won against noble house ").concat(nobleHouse1, "."));
    }
    if (army1Number == army2Number) {
        console.log("There has ben an draw");
    }
}
battleOFtheHouses(dudeNumber1.name, dudeNumber2.name, 100, 200);
dudeNumber2.addHeir('sla');
dudeNumber2.checkHeritage();
