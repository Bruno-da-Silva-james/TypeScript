import { IStack } from "../Interface/IStack";

export class ArrayStack implements IStack {
  items: Array<any>;

  constructor() {
    this.items = [];
  }

  push(item: any): void {
    this.items.push(item);
  }

  pop(): any | null {
    if (!this.isEmpty()) {
      return this.items.pop();
    } else {
      throw new Error("Array vazio");
    }
  }

  peek(): any | null {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    } else {
      throw new Error("Array vazio");
    }
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}
