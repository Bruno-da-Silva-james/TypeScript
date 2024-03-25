import { ArrayList } from "./Class/ArrayList";

const list = new ArrayList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.addFirst(3)

list.addAt(2, "ola")

list.remove(2)

list.removeFirst()

list.removeLast()

list.removeAt(4)

console.log(list.get(1));

console.log(list.indexOf("ola"));

console.log(list.isEmpty());

console.log(list.size());

