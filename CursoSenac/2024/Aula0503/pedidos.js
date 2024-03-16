"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza_1 = require("./Pizza");
var SaborPizza_1 = require("./SaborPizza");
function pedidos() {
    var pizza1 = new Pizza_1.Pizza('G', SaborPizza_1.SaborPizza.sabor1);
    var pizza2 = new Pizza_1.Pizza('M', SaborPizza_1.SaborPizza.sabor4);
    var pizza3 = new Pizza_1.Pizza('P', SaborPizza_1.SaborPizza.sabor3);
    pizza1.descricao();
    pizza2.descricao();
    pizza3.descricao();
}
pedidos();
