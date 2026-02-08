import { set, ref, remove, onValue } from "firebase/database";
import { DATABASE } from "./Firebase";
import { Task } from "./Task";

function addTask(
  userId: string,
  name: string, //parametros para adicionar task
  state: boolean,
  priority: number,
) {
  set(ref(DATABASE, "tasks/" + userId), {
    name: name,
    state: state,
    priority: priority,
  });
}

function removeTask(taskName: string) {
  remove(ref(DATABASE, "tasks/" + taskName));
}

function updateTask(task: Task) {}

function getTasksName(userId: string): string {
  let result: string = "";
  onValue(ref(DATABASE, "tasks/" + userId + "/name"), (snapshot) => {
    const data: string = snapshot.val();
    result = data;
  });
  return result;
}
addTask("2", "Estuda", false, 1);

getTasksName("2");


export { addTask, removeTask, updateTask, getTasksName };