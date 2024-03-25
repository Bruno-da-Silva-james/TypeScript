import { ArrayQueue } from "./Class/ArrayQueue";


const queue = new ArrayQueue();

queue.enqueue(13);
queue.enqueue(55);
queue.enqueue(32);
queue.enqueue(77);
queue.enqueue(54);

console.log(queue.dequeue());

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());
