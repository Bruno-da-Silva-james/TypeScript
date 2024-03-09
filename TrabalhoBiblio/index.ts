import { Livro } from "./Classes/Livro";
import { Status } from "./Enums/Status";
import { Genero } from "./Enums/Genero";
import { livroAtrasado } from "./Function/LivroAtrasado";
import { livroEmprestado } from "./Function/livroEmprestado";
import { livrosDisponiveis } from "./Function/livrosDisponivel";

const livro1 = new Livro(Status.atrasado,'A espera de um milagre ','nao sei', Genero.melancolico);  
const livro2 = new Livro(Status.disponivel, 'teste','teste',Genero.acao);
const livro3 = new Livro(Status.emprestado,'input','input',Genero.fantasia);
const livro4 = new Livro(Status.reservado,'input','input',Genero.terror);

livroAtrasado(livro1,livro2,livro3,livro4)
livroEmprestado(livro1,livro2,livro3,livro4)
livrosDisponiveis(livro1,livro2,livro3,livro4)