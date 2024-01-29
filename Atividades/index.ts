import { Monster } from "./Monster";
import { Warrior } from "./Warrior";

const Moonstro = new Monster('Canine')
const Guerreiro = new Warrior('Perseus', 'Brute', 5)

console.log(`\nMonster Stats:\nName: ${Moonstro.name}\nHealth: ${Moonstro.health}\nForce: ${Moonstro.force}`);
console.log(`\nWarrior Stats:\nName: ${Guerreiro.name}\nType: ${Guerreiro.type}\nHealth: ${Guerreiro.health}\nForce: ${Guerreiro.force}\n`);

Guerreiro.lifeCheck()

Moonstro.lifeCheck()

Moonstro.attackWarrior(Guerreiro)


Guerreiro.attackMonster(Moonstro)

Guerreiro.lifeCheck()

Moonstro.lifeCheck()
