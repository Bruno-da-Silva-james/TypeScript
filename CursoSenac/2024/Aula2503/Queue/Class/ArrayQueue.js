"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayQueue = void 0;
var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        this.items = [];
    }
    ArrayQueue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    ArrayQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    };
    ArrayQueue.prototype.peek = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    };
    ArrayQueue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    ArrayQueue.prototype.size = function () {
        return this.items.length;
    };
    return ArrayQueue;
}());
exports.ArrayQueue = ArrayQueue;
