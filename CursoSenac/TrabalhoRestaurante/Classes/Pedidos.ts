export class Pedidos {
  nomePrato: string;
  prioridade: number;

  constructor(nomePrato: string, tipo: number) {
    this.nomePrato = nomePrato;
    this.prioridade = tipo;
  }
}
