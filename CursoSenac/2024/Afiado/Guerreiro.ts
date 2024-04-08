import { Monstro } from "./Mostro";


export class Guerreiro {
    private nome: string;
    private tipo: string;
    private força: number;
    private saude: number = 100;

    constructor(força: number, tipo: string, nome: string) {
        this.força = força;
        this.tipo = tipo;
        this.nome = nome;
    }

    takeDamage(força: number): void {
        this.saude -= Math.floor(Math.random() * força);
        if (força > this.saude || this.saude == 0) {
            console.log("O guerreiro morreu");
        } else {
            console.log(`O guerreiro esta com ${this.saude} de vida`);
        }
    }

    atack(inimigo: Monstro): void {
        inimigo.takeDamage(this.força)
    }
}