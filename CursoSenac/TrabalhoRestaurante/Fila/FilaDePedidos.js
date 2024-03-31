"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaDePedidos = void 0;
var GerPedidos_1 = require("../Enum/GerPedidos");
var FilaDePedidos = /** @class */ (function () {
    function FilaDePedidos() {
        this.pedidos = [];
    }
    FilaDePedidos.prototype.adicionarPedido = function (pedido) {
        if ((pedido.prioridade == GerPedidos_1.GerPedidos.Bar)) {
            this.pedidos.unshift(pedido);
        }
        if ((pedido.prioridade == GerPedidos_1.GerPedidos.Cozinha)) {
            this.pedidos.push(pedido);
        }
        if (pedido.prioridade == GerPedidos_1.GerPedidos.Area_de_sobremesas) {
            this.pedidos.push(pedido);
        }
    };
    FilaDePedidos.prototype.olharLista = function () {
        console.log(this.pedidos);
    };
    FilaDePedidos.prototype.removerPedido = function () {
        if (this.estaVazio()) {
            return null;
        }
        return this.pedidos.shift();
    };
    FilaDePedidos.prototype.olharUltimo = function () {
        if (this.estaVazio()) {
            return null;
        }
        return this.pedidos[0];
    };
    FilaDePedidos.prototype.estaVazio = function () {
        return this.pedidos.length === 0;
    };
    FilaDePedidos.prototype.quantidadePedidos = function () {
        return this.pedidos.length;
    };
    return FilaDePedidos;
}());
exports.FilaDePedidos = FilaDePedidos;
