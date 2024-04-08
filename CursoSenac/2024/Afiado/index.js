"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guerreiro_1 = require("./Guerreiro");
var Mostro_1 = require("./Mostro");
var monstro = new Mostro_1.Monstro("Cherberus");
var gerreiro = new Guerreiro_1.Guerreiro(10, "Palaidno", "Artemis");
gerreiro.atack(monstro);
monstro.atack(gerreiro);
