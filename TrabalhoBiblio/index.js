"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro_1 = require("./Classes/Livro");
var Status_1 = require("./Enums/Status");
var Genero_1 = require("./Enums/Genero");
var livroEmprestado_1 = require("./Function/livroEmprestado");
var Usuario_1 = require("./Classes/Usuario");
var livro1 = new Livro_1.Livro(Status_1.Status.atrasado, 'A espera de um milagre ', 'nao sei', Genero_1.Genero.melancolico);
var livro2 = new Livro_1.Livro(Status_1.Status.disponivel, 'teste', 'teste', Genero_1.Genero.acao);
var livro3 = new Livro_1.Livro(Status_1.Status.emprestado, 'input', 'input', Genero_1.Genero.fantasia);
var livro4 = new Livro_1.Livro(Status_1.Status.reservado, 'input', 'input', Genero_1.Genero.terror);
var user = new Usuario_1.Usuario('roberto', 308, 99293810);
(0, livroEmprestado_1.livroEmprestado)(livro3, user);
