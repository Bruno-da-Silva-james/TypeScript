"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greyjoy = void 0;
var NobleHouse_1 = require("../NobleHouse");
var Greyjoy = /** @class */ (function (_super) {
    __extends(Greyjoy, _super);
    function Greyjoy(motto, name) {
        return _super.call(this, name, motto) || this;
    }
    Greyjoy.prototype.addHeir = function (nameHeir) {
        this.heirList.push(nameHeir);
    };
    Greyjoy.prototype.checkHeritage = function () {
        return this.heirList;
    };
    return Greyjoy;
}(NobleHouse_1.NobleHouse));
exports.Greyjoy = Greyjoy;
