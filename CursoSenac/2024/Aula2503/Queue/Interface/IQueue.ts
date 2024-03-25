export interface IQueue{
    enqueue(item: any): void;

    dequeue(): any | null;

    peek(): any | null;

    isEmpty(): boolean;

    size(): number;

}