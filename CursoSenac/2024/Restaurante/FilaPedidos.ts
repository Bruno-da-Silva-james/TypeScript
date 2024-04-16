import { Pedido } from "./Pedido";

export class FilaPedidos {
    private fila: Array<Pedido> = []

    adicionarPedido(item: Pedido): void {
        let added = false;

        for (let i = 0; i < this.fila.length; i++) {
            if (item.prioridade < this.fila[i].prioridade) {
                this.fila.splice(i, 0, item)
                added = true;
                break;
            }
        }

        if (!added) {
            this.fila.push(item);
        }
    }

    prepararPedidos(): void{
        this.fila.pop();
    }

    mostrarFila(): void {
        console.log(this.fila);
    }
}