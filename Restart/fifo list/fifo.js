"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fifo = void 0;
var fifo = /** @class */ (function () {
    function fifo() {
        this.list = [];
    }
    fifo.prototype.addTask = function (task) {
        this.list.push(task);
    };
    fifo.prototype.finishTask = function () {
        this.list.shift();
    };
    fifo.prototype.showList = function () {
        console.log(this.list);
    };
    return fifo;
}());
exports.fifo = fifo;
