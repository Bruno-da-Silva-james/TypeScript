import { FilaDePedidos } from "./Fila/FilaDePedidos";
import { Pedidos } from "./Classes/Pedidos";
import { GerPedidos } from "./Enum/GerPedidos";

const carneLoca = new Pedidos("carneLoca",GerPedidos.Cozinha);
const strogonoff = new Pedidos("strogonoff",GerPedidos.Cozinha);
const coca = new Pedidos("coca cola", GerPedidos.Bar);
const fanta = new Pedidos("fanta", GerPedidos.Bar);
const pudim = new Pedidos("pudim",GerPedidos.Area_de_sobremesas);
const tortaDeBolacha = new Pedidos("torta de bolacha", GerPedidos.Area_de_sobremesas);

const Fila = new FilaDePedidos();

Fila.adicionarPedido(carneLoca);
Fila.olharLista();

Fila.adicionarPedido(coca);
Fila.olharLista();

Fila.adicionarPedido(fanta);
Fila.olharLista();

Fila.adicionarPedido(pudim);
Fila.olharLista();

Fila.adicionarPedido(strogonoff);
Fila.olharLista();

Fila.adicionarPedido(tortaDeBolacha);
Fila.olharLista();




Fila.quantidadePedidos()
