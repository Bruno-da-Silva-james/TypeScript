import { NobleHouse } from "./NobleHouse";

const newHouse = new NobleHouse('sla','fome');


newHouse.addHeir('tony')
console.log(newHouse.checkHeritage());
