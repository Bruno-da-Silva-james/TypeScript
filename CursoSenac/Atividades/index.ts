import { Monster } from "./Monster";
import { Warrior } from "./Warrior";

const Moonstro = new Monster('Canine')
const Guerreiro = new Warrior('Perseus', 'Brute', 5)

console.log(`\nMonster Stats:\nName: ${Moonstro.getName()}\nHealth: ${Moonstro.health}\nForce: ${Moonstro.force}`);
console.log(`\nWarrior Stats:\nName: ${Guerreiro.getName()}\nType: ${Guerreiro.getType()}\nHealth: ${Guerreiro.health}\nForce: ${Guerreiro.getForce()}\n`);

Guerreiro.attackMonster(Moonstro)

Moonstro.lifeCheck()

Moonstro.getName()
Moonstro.setName('Catioro')
Moonstro.getName()
