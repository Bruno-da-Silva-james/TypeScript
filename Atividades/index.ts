import { Monster } from "./Monster";
import { Warrior } from "./Warrior";

const Moonstro = new Monster('Cachorro mau')
const Guerreiro = new Warrior('Perseus', 'Brute', 5)

console.log(`\nMonster Stats:\nName: ${Moonstro.name}\nHealth: ${Moonstro.health}\nForce: ${Moonstro.force}`);
console.log(`\nWarrior Stats:\nName: ${Guerreiro.name}\nType: ${Guerreiro.type}\nHealth: ${Guerreiro.health}\nForce: ${Guerreiro.force}\n`);

Moonstro.attackWarrior(Guerreiro)


Guerreiro.attackMonster(Moonstro)
