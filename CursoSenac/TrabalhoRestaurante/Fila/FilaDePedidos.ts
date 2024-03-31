import { Pedidos } from "../Classes/Pedidos";
import { GerPedidos } from "../Enum/GerPedidos";

export class FilaDePedidos {
  private pedidos: Array<object>;

  constructor() {
    this.pedidos = [];
  }

  adicionarPedido(pedido: Pedidos): void {
    if ((pedido.prioridade == GerPedidos.Bar)) {
      this.pedidos.unshift(pedido);
    }
    if ((pedido.prioridade == GerPedidos.Cozinha)) {
      this.pedidos.push(pedido);
    }
    if (pedido.prioridade == GerPedidos.Area_de_sobremesas){
    this.pedidos.push(pedido)
    }
  }

  olharLista(): void{
    console.log(this.pedidos);
  }

  removerPedido(): any | null {
    if (this.estaVazio()) {
      return null;
    }
    return this.pedidos.shift();
  }

  olharUltimo(): any | null {
    if (this.estaVazio()) {
      return null;
    }
    return this.pedidos[0];
  }

  estaVazio(): boolean {
    return this.pedidos.length === 0;
  }

  quantidadePedidos(): number {
    return this.pedidos.length;
  }

}
