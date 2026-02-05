export class Task {
  private taskName: string;
  private state: boolean;
  private priority: string;

  constructor(taskName: string, state: boolean, priority: string) {
    this.taskName = taskName;
    this.state = state;
    this.priority = priority;
  }

  public getTaskName(): string {
    return this.taskName;
  }

  public setTaskName(taskName: string): void {
    this.taskName = taskName;
  }

  public getState(): boolean {
    return this.state;
  }

  public setState(state: boolean): void {
    this.state = state;
  }

  public getPriority(): string {
    return this.priority;
  }

  public setPriority(priority: string): void {
    this.priority = priority;
  }
}
