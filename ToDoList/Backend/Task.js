"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(taskName, state, priority) {
        this.taskName = taskName;
        this.state = state;
        this.priority = priority;
    }
    Task.prototype.getTaskName = function () {
        return this.taskName;
    };
    Task.prototype.setTaskName = function (taskName) {
        this.taskName = taskName;
    };
    Task.prototype.getState = function () {
        return this.state;
    };
    Task.prototype.setState = function (state) {
        this.state = state;
    };
    Task.prototype.getPriority = function () {
        return this.priority;
    };
    Task.prototype.setPriority = function (priority) {
        this.priority = priority;
    };
    return Task;
}());
exports.Task = Task;
