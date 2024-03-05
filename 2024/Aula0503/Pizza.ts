
export class Pizza {
    sabor: string
    tamanho: string
    preco: number
    constructor(tamanho: string, sabor: string) {
        this.sabor = sabor
        this.tamanho = tamanho
    }

    listaPreco(): number {
        if (this.tamanho == 'P') {
            return this.preco = 14
        }
        if (this.tamanho == 'M') {
            return this.preco = 25
        }
        return this.preco = 33
    }

    descricao(): void {
        console.log(`Pizza ${this.sabor}, tamanho ${this.tamanho}, preco ${this.listaPreco()}`);
    }
}