import { Monster } from "./Monster";

export class Warrior {
    private name: string;
    private type: string;
    health: number;
    private force: number;
    constructor(name: string, type: string, force: number) {
        this.name = name;
        this.type = type;
        this.force = force;
        this.health = 100;
    }

    attackMonster(target: Monster): void {
        let attackDmg = this.force;
        target.damageTaken(attackDmg);
        console.log(`${this.name} attacked ${target.getName()} causing ${attackDmg} damage.`)
    }

    damageTaken(dmgRecived: number): void {
        this.health -= dmgRecived;
        console.log(`${this.name} suffered ${dmgRecived} damage. Remaining health: ${this.health}`);
    }

    lifeCheck(): void {
        console.log(this.health);
    }

    getName(): void {
        this.name
    }

    setName(newName: string): void {
        this.name = newName
    }

    getType(): void {
        this.type
    }

    seType(newType: string): void {
        this.type = newType
    }
    getForce(): void {
        this.force
    }

    setForce(newForce: number): void {
        this.force = newForce
    }

}
