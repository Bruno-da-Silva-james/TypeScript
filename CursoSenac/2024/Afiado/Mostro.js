"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
var Monstro = /** @class */ (function () {
    function Monstro(nome) {
        this.força = 50;
        this.saude = 10;
        this.nome = nome;
    }
    Monstro.prototype.takeDamage = function (força) {
        this.saude -= Math.floor(Math.random() * força);
        if (força > this.saude || this.saude == 0) {
            console.log("O monstro morreu");
        }
        else {
            console.log("O monstro esta com ".concat(this.saude, " de vida"));
        }
    };
    Monstro.prototype.atack = function (inimigo) {
        inimigo.takeDamage(this.força);
    };
    return Monstro;
}());
exports.Monstro = Monstro;
