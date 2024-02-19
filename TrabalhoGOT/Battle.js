"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Baratheon_1 = require("./Classes/ChildClasses/Baratheon");
var Greyjoy_1 = require("./Classes/ChildClasses/Greyjoy");
var Lannister_1 = require("./Classes/ChildClasses/Lannister");
var Stark_1 = require("./Classes/ChildClasses/Stark");
var Targaryen_1 = require("./Classes/ChildClasses/Targaryen");
var houseNumber1 = new Baratheon_1.Baratheon('Example Motto', "Baratheon", 100);
var houseNumber2 = new Greyjoy_1.Greyjoy('Example Motto', "Greyjoy", 400);
var houseNumber3 = new Lannister_1.Lannister('Example Motto', "Lannister", 300);
var houseNumber4 = new Stark_1.Stark('Example Motto', "Stark", 214);
var houseNumber5 = new Targaryen_1.Targaryen('Example Motto', "Targaryen", 150);
function battleOFtheHouses(nobleHouse1, nobleHouse2, nobleHouse3, nobleHouse4, nobleHouse5) {
    var phantomNumber = 0;
    var index;
    var armyNumber = [nobleHouse1, nobleHouse2, nobleHouse3, nobleHouse4, nobleHouse5];
    for (var i = 1; i < armyNumber.length; i++) {
        phantomNumber = armyNumber[i];
        index = i;
        while (index > 0 && armyNumber[index - 1] > phantomNumber) {
            armyNumber[index] = armyNumber[index - 1];
            index--;
        }
        armyNumber[index] = phantomNumber;
    }
    console.log("The winner of the battle has won with the army number of ".concat(armyNumber[5]));
}
houseNumber1.addHeir('Example');
console.log(houseNumber1.checkHeritage());
battleOFtheHouses(houseNumber1.army, houseNumber2.army, houseNumber3.army, houseNumber4.army, houseNumber5.army);
