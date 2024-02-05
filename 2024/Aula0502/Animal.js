"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(age, name) {
        this.age = age;
        this.name = name;
    }
    Animal.prototype.emitSound = function (animalType) {
        console.log("the animal ".concat(animalType, " emited a sound."));
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    Animal.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Animal;
}());
exports.Animal = Animal;
