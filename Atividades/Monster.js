"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var Monster = /** @class */ (function () {
    function Monster(name) {
        this.force = 50;
        this.health = 10;
        this.name = name;
    }
    Monster.prototype.attackWarrior = function (target) {
        var attackDmg = this.force;
        target.damageTaken(attackDmg);
        console.log("".concat(this.name, " attacked ").concat(target.name, " causing ").concat(attackDmg, " damage."));
    };
    Monster.prototype.damageTaken = function (dmgRecived) {
        this.health -= dmgRecived;
        console.log("".concat(this.name, " suffered ").concat(dmgRecived, " damage. Remaining health: ").concat(this.health));
    };
    Monster.prototype.lifeCheck = function () {
        console.log(this.health);
    };
    Monster.prototype.getName = function () {
        this.name;
    };
    Monster.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Monster;
}());
exports.Monster = Monster;
