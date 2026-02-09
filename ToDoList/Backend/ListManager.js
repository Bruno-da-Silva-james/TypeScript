"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksName = exports.updateTask = exports.removeTask = exports.addTask = void 0;
var database_1 = require("firebase/database");
var Firebase_1 = require("./postGreesDB");
function addTask(userId, name, //parametros para adicionar task
state, priority) {
    (0, database_1.set)((0, database_1.ref)(Firebase_1.DATABASE, "tasks/" + userId), {
        name: name,
        state: state,
        priority: priority,
    });
}
exports.addTask = addTask;
function removeTask(taskName) {
    (0, database_1.remove)((0, database_1.ref)(Firebase_1.DATABASE, "tasks/" + taskName));
}
exports.removeTask = removeTask;
function updateTask(task) { }
exports.updateTask = updateTask;
function getTasksName(userId) {
    var result = "";
    (0, database_1.onValue)((0, database_1.ref)(Firebase_1.DATABASE, "tasks/" + userId + "/name"), function (snapshot) {
        var data = snapshot.val();
        result = data;
    });
    return typeof (result);
}
exports.getTasksName = getTasksName;
addTask("2", "Estuda", false, 1);
console.log(getTasksName("2"));
