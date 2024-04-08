import { Guerreiro } from "./Guerreiro";

export class Monstro {
    private nome: string;
    private força: number = 50;
    private saude: number = 10;

    constructor(nome: string) {
        this.nome = nome;
    }

    takeDamage(força: number): void {
        this.saude -= Math.floor(Math.random() * força); 
        if (força > this.saude || this.saude == 0) {
            console.log("O monstro morreu");
        } else {
            console.log(`O monstro esta com ${this.saude} de vida`);
        }
    }

    atack(inimigo: Guerreiro): void {
        inimigo.takeDamage(this.força)
    }
}