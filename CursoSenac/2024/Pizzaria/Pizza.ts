export class Pizza {
    sabor: string;
    tamanho: string;
    preco: number;
    constructor(sabor: string, tamanho: string) {
        this.sabor = sabor;
        this.tamanho = tamanho;
    }

    private determinePrice(): number{
        if (this.tamanho == "G") {return this.preco = 70}
        if (this.tamanho == "M") {return this.preco = 50}
        return this.preco = 35
    }

    descricao(): void{
        console.log(`Pizza de ${this.sabor}, Tamanho ${this.tamanho}, preço ${this.determinePrice()}`);
    }

}