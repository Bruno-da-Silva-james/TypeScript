export class Pedido {
    nomePrato: string;
    tipoBebida?: string;
    prioridade: number;

    constructor(nomePrato: string, prioridade: number, tipoBebida?: string) {
        this.nomePrato = nomePrato;
        this.tipoBebida = tipoBebida;
        this.prioridade = prioridade;
    }
}