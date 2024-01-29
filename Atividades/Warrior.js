"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var Warrior = /** @class */ (function () {
    function Warrior(name, type, force) {
        this.name = name;
        this.type = type;
        this.force = force;
        this.health = 100;
    }
    Warrior.prototype.attackMonster = function (target) {
        var attackDmg = this.force;
        target.damageTaken(attackDmg);
        console.log("".concat(this.name, " attacked ").concat(target.name, " causing ").concat(attackDmg, " damage."));
    };
    Warrior.prototype.damageTaken = function (dmgRecived) {
        this.health -= dmgRecived;
        console.log("".concat(this.name, " suffered ").concat(dmgRecived, " damage. Remaining health: ").concat(this.health));
    };
    Warrior.prototype.lifeCheck = function () {
        console.log(this.health);
    };
    Warrior.prototype.getName = function () {
        this.name;
    };
    Warrior.prototype.setName = function (newName) {
        this.name = newName;
    };
    Warrior.prototype.getType = function () {
        this.type;
    };
    Warrior.prototype.seType = function (newType) {
        this.type = newType;
    };
    Warrior.prototype.getForca = function () {
        this.force;
    };
    Warrior.prototype.setForce = function (newForce) {
        this.force = newForce;
    };
    return Warrior;
}());
exports.Warrior = Warrior;
