"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobleHouse = void 0;
var NobleHouse = /** @class */ (function () {
    function NobleHouse(name, motto) {
        this.motto = motto;
        this.name = name;
    }
    NobleHouse.prototype.addHeir = function (nameHeir) {
        this.heirList.push(nameHeir);
    };
    NobleHouse.prototype.checkHeritage = function () {
        return this.heirList;
    };
    return NobleHouse;
}());
exports.NobleHouse = NobleHouse;
