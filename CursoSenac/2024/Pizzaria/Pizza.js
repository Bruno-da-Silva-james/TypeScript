"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(sabor, tamanho) {
        this.sabor = sabor;
        this.tamanho = tamanho;
    }
    Pizza.prototype.determinePrice = function () {
        if (this.tamanho == "G") {
            return this.preco = 70;
        }
        if (this.tamanho == "M") {
            return this.preco = 50;
        }
        return this.preco = 35;
    };
    Pizza.prototype.descricao = function () {
        console.log("Pizza de ".concat(this.sabor, ", Tamanho ").concat(this.tamanho, ", pre\u00E7o ").concat(this.determinePrice()));
    };
    return Pizza;
}());
exports.Pizza = Pizza;
