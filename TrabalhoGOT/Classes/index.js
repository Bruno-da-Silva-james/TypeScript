"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NobleHouse_1 = require("./NobleHouse");
var newHouse = new NobleHouse_1.NobleHouse('sla', 'fome');
newHouse.addHeir('tony');
console.log(newHouse.checkHeritage());
