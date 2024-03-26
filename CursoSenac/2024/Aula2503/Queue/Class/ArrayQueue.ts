import { IQueue } from "../Interface/IQueue";

export class ArrayQueue implements IQueue {
  private items: Array<any>;

  constructor() {
    this.items = [];
  }

  enqueue(item: any): void {
    this.items.push(item);
  }

  dequeue(): any | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek(): any | null {
    if (this.isEmpty()) {
        return null;
    }
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}
