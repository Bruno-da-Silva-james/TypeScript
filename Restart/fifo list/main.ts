import { fifo } from "./fifo";

const lista = new fifo();

lista.addTask('Test')
lista.showList()
lista.addTask('Test 2')
lista.showList()
lista.finishTask()
lista.showList()