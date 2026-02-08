"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("firebase/database");
var Firebase_1 = require("./Firebase");
var ListManager = /** @class */ (function () {
    function ListManager() {
    }
    ListManager.prototype.addTask = function (userId, name, state, priority) {
        (0, database_1.set)((0, database_1.ref)(Firebase_1.DATABASE, "tasks/" + userId), {
            name: name,
            state: state,
            priority: priority,
        });
    };
    ListManager.prototype.removeTask = function (taskName) {
        (0, database_1.remove)((0, database_1.ref)(Firebase_1.DATABASE, "tasks/" + taskName));
    };
    ListManager.prototype.updateTask = function (task) { };
    ListManager.prototype.getTasksName = function (userId) {
        (0, database_1.onValue)((0, database_1.ref)(Firebase_1.DATABASE, "tasks/" + userId + "/name"), function (snapshot) {
            var data = snapshot.val();
            console.log(data);
        });
    };
    return ListManager;
}());
var listManager = new ListManager();
listManager.addTask("2", "Estuda", false, 1);
listManager.getTasksName();
exports.default = listManager;
