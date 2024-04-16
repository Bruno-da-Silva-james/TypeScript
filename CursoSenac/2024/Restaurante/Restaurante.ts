import { FilaPedidos } from "./FilaPedidos";
import { Pedido } from "./Pedido";
import { TipoComida } from "./TipoComida";


const comida1 = new Pedido("arroz", TipoComida.areaSobremesa);
const comida2 = new Pedido("bebida", TipoComida.bar);
const comida3 = new Pedido("strogo", TipoComida.cozinha);
const comida4 = new Pedido("comida", TipoComida.cozinha);
const comida5 = new Pedido("doce", TipoComida.areaSobremesa);
const comida6 = new Pedido("leite", TipoComida.bar);

const fila1 = new FilaPedidos();

fila1.adicionarPedido(comida1)
fila1.mostrarFila()

fila1.adicionarPedido(comida2)
fila1.mostrarFila()

fila1.adicionarPedido(comida3)
fila1.mostrarFila()

fila1.adicionarPedido(comida4)
fila1.mostrarFila()

fila1.adicionarPedido(comida5)
fila1.mostrarFila()

fila1.adicionarPedido(comida6)
fila1.mostrarFila()


