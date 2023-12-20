import { Warrior } from "./Warrior"

export class Monster {
    name: string
    force: number
    health: number
    constructor(name: string) {
        this.force = 50
        this.health = 10
        this.name = name
    }

    attackWarrior(target: Warrior): void {
        let attackDmg = this.force
        target.damageTaken(attackDmg)
        console.log(`${this.name} attacked ${target.name} causing ${attackDmg} damage.`)
    }

    damageTaken(dmgRecived: number): void {
        this.health -= dmgRecived
        console.log(`${this.name} suffered ${dmgRecived} damage. Remaining health: ${this.health}`);
    }
}
