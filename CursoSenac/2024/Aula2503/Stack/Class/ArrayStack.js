"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayStack = void 0;
var ArrayStack = /** @class */ (function () {
    function ArrayStack() {
        this.items = [];
    }
    ArrayStack.prototype.push = function (item) {
        this.items.push(item);
    };
    ArrayStack.prototype.pop = function () {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        else {
            throw new Error("Array vazio");
        }
    };
    ArrayStack.prototype.peek = function () {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
        else {
            throw new Error("Array vazio");
        }
    };
    ArrayStack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    ArrayStack.prototype.size = function () {
        return this.items.length;
    };
    return ArrayStack;
}());
exports.ArrayStack = ArrayStack;
