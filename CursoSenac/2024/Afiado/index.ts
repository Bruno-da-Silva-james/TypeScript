import { Guerreiro } from "./Guerreiro";
import { Monstro } from "./Mostro";


const monstro = new Monstro("Cherberus");
const gerreiro = new Guerreiro(10, "Palaidno", "Artemis");


gerreiro.atack(monstro)
monstro.atack(gerreiro)