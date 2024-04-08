"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var Guerreiro = /** @class */ (function () {
    function Guerreiro(força, tipo, nome) {
        this.saude = 100;
        this.força = força;
        this.tipo = tipo;
        this.nome = nome;
    }
    Guerreiro.prototype.takeDamage = function (força) {
        this.saude -= Math.floor(Math.random() * força);
        if (força > this.saude || this.saude == 0) {
            console.log("O guerreiro morreu");
        }
        else {
            console.log("O guerreiro esta com ".concat(this.saude, " de vida"));
        }
    };
    Guerreiro.prototype.atack = function (inimigo) {
        inimigo.takeDamage(this.força);
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
