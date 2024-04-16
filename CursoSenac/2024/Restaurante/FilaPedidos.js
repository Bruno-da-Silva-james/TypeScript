"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaPedidos = void 0;
var FilaPedidos = /** @class */ (function () {
    function FilaPedidos() {
        this.fila = [];
    }
    FilaPedidos.prototype.adicionarPedido = function (item) {
        var added = false;
        for (var i = 0; i < this.fila.length; i++) {
            if (item.prioridade < this.fila[i].prioridade) {
                this.fila.splice(i, 0, item);
                added = true;
                break;
            }
        }
        if (!added) {
            this.fila.push(item);
        }
    };
    FilaPedidos.prototype.mostrarFila = function () {
        console.log(this.fila);
    };
    return FilaPedidos;
}());
exports.FilaPedidos = FilaPedidos;
