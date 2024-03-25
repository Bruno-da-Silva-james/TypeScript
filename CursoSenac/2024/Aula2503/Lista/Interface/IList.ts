export interface IList{
    add(item: any): void;
    addFirst(item:any): void;
    addAt(index: number, item: any): void;

    remove(item: any): void;
    removeFirst(): void;
    removeLast(): void;
    removeAt(index: number): void;

    get(index: number):any | null;

    indexOf(item: any): number;

    isEmpty(): boolean;

    size(): number;

}