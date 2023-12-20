import { Monster } from "./Monster";

export class Warrior {
    name: string;
    type: string;
    health: number;
    force: number;
    constructor(name: string, type: string, force: number) {
        this.name = name;
        this.type = type;
        this.force = force;
        this.health = 100;
    }
    
    attackMonster(target: Monster): void {
        let attackDmg = this.force;
        target.damageTaken(attackDmg);
        console.log(`${this.name} attacked ${target.name} causing ${attackDmg} damage.`)
    }

    damageTaken(dmgRecived: number): void {
        this.health -= dmgRecived;
        console.log(`${this.name} suffered ${dmgRecived} damage. Remaining health: ${this.health}`);
    }
}
