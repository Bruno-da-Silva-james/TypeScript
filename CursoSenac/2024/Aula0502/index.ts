import { Mammal } from "./Mammal";
import { Bird } from "./Bird";

const Sheep = new Mammal('Sheep',20,'Wool');
const Owl = new Bird('Owl',4);

Sheep.emitSound('Sheep');
Sheep.setCoat('Wool');
console.log(Sheep.getCoat());
Sheep.setName('Oveia');
console.log(Sheep.getName());
Sheep.setAge(10);
console.log(Sheep.getAge());
Sheep.breastfeed();

Owl.emitSound('Chirp');
Owl.fly();
Owl.setWingspan(20);
console.log(Owl.getWingspan());
Owl.setName("Cruja")
console.log(Owl.getName());

