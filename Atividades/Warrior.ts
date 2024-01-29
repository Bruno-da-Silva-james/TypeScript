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

    private attackMonster(target: Monster): void {
        let attackDmg = this.force;
        target.getFunc(attackDmg);
        console.log(`${this.name} attacked ${target.name} causing ${attackDmg} damage.`)
    }

    private damageTaken(dmgRecived: number): void {
        this.health -= dmgRecived;
        console.log(`${this.name} suffered ${dmgRecived} damage. Remaining health: ${this.health}`);
    }

    private lifeCheck(): void {
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
    getForca(): void {
        this.force
    }

    setForce(newForce: number): void {
        this.force = newForce
    }

}
