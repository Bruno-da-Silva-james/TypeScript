import { Pizza } from "./Pizza";
import { SaborPizza } from "./SaborPizza";

function pedidos(): void {
    const pizza1 = new Pizza('G',SaborPizza.sabor1);
    const pizza2 = new Pizza('M',SaborPizza.sabor4);
    const pizza3 = new Pizza('P',SaborPizza.sabor3);

    pizza1.descricao()
    pizza2.descricao()
    pizza3.descricao()

}

pedidos()