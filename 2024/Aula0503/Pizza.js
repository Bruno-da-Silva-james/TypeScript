"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(tamanho, sabor) {
        this.sabor = sabor;
        this.tamanho = tamanho;
    }
    Pizza.prototype.listaPreco = function () {
        if (this.tamanho == 'P') {
            return this.preco = 14;
        }
        if (this.tamanho == 'M') {
            return this.preco = 25;
        }
        return this.preco = 33;
    };
    Pizza.prototype.descricao = function () {
        console.log("Pizza ".concat(this.sabor, ", tamanho ").concat(this.tamanho, ", preco ").concat(this.listaPreco()));
    };
    return Pizza;
}());
exports.Pizza = Pizza;
