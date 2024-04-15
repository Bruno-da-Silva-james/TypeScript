import { Pizza } from "./Pizza";
import { SaborPizza } from "./SaborPizza";

const pizza1 = new Pizza(SaborPizza.calabresa,"G");
const pizza2 = new Pizza(SaborPizza.coracao,"P");
const pizza3 = new Pizza(SaborPizza.chester,"M");


pizza1.descricao();
pizza2.descricao();
pizza3.descricao();