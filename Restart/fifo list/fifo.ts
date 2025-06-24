export class fifo {
  list: string[] = [];

  addTask(task: string) {
    this.list.push(task);
  }

  finishTask() {
    this.list.shift();
  }

  showList() {
    console.log(this.list);
  }
}
