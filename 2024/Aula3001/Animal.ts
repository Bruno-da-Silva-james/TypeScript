export class Animal {
    private name: string;
    private age: number;
    constructor(age: number, name: string) {
        this.age = age
        this.name = name
    }

    emitSound(animalType: string): void {
        console.log(`the animal ${animalType} emited a sound.`);
    }

    getAge(): void {
        this.age
    }

    setAge(newAge: number): void {
        this.age = newAge
    }

    getName(): void {
        this.name
    }

    setName(newName: string): void {
        this.name = newName
    }
}