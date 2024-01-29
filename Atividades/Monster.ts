import { Warrior } from "./Warrior"

export class Monster {
    private name: string
    force: number
    health: number
    constructor(name: string) {
        this.force = 50
        this.health = 10
        this.name = name
    }

    private attackWarrior(target: Warrior): void {
        let attackDmg = this.force
        target.damageTaken(attackDmg)
        console.log(`${this.name} attacked ${target.name} causing ${attackDmg} damage.`)
    }

    private damageTaken(dmgRecived: number): void {
        this.health -= dmgRecived
        console.log(`${this.name} suffered ${dmgRecived} damage. Remaining health: ${this.health}`);
    }

    private lifeCheck(): void{
        console.log(this.health);
    }

    getName(): void{
        this.name
    }

    setName(newName: string): void{
        this.name = newName
    }

    getFunc(): void{
        let func = this.damageTaken
    }
}
