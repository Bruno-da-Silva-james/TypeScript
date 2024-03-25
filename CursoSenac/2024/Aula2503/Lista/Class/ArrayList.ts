import { IList } from "../Interface/IList";

export class ArrayList implements IList {
  private items: Array<any>;

  constructor() {
    this.items = [];
  }

  add(item: any): void {
    this.items.push(item);
  }

  addFirst(item: any): void {
    this.items.unshift(item);
  }

  addAt(index: number, item: any): void {
    if (index >= 0 && index <= this.items.length) {
      this.items.splice(index, 0, item);
    } else {
      throw new Error("Index Out of Bounds");
    }
  }

  remove(item: any): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  removeFirst(): void {
    if (!this.isEmpty()) {
      this.items.shift();
    }
  }

  removeLast(): void {
    if (!this.isEmpty()) {
      this.items.pop();
    }
  }

  removeAt(index: number): void {
    if (index >= 0 && index <= this.items.length) {
      this.items.splice(index, 0);
    } else {
      throw new Error("Index Out of Bounds");
    }
  }

  get(index: number): any | null {
    if (index >= 0 && index <= this.items.length) {
      this.items[index];
    } else {
      return null;
    }
  }

  indexOf(item: any): number {
    return this.items.indexOf(item);
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  size(): number {
    return this.items.length;
  }
}
