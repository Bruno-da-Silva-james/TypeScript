"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayList = void 0;
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.items = [];
    }
    ArrayList.prototype.add = function (item) {
        this.items.push(item);
    };
    ArrayList.prototype.addFirst = function (item) {
        this.items.unshift(item);
    };
    ArrayList.prototype.addAt = function (index, item) {
        if (index >= 0 && index <= this.items.length) {
            this.items.splice(index, 0, item);
        }
        else {
            throw new Error("Index Out of Bounds");
        }
    };
    ArrayList.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    ArrayList.prototype.removeFirst = function () {
        if (!this.isEmpty()) {
            this.items.shift();
        }
    };
    ArrayList.prototype.removeLast = function () {
        if (!this.isEmpty()) {
            this.items.pop();
        }
    };
    ArrayList.prototype.removeAt = function (index) {
        if (index >= 0 && index <= this.items.length) {
            this.items.splice(index, 0);
        }
        else {
            throw new Error("Index Out of Bounds");
        }
    };
    ArrayList.prototype.get = function (index) {
        if (index >= 0 && index <= this.items.length) {
            this.items[index];
        }
        else {
            return null;
        }
    };
    ArrayList.prototype.indexOf = function (item) {
        return this.items.indexOf(item);
    };
    ArrayList.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    ArrayList.prototype.size = function () {
        return this.items.length;
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
