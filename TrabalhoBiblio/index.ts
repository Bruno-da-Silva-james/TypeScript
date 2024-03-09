import { Livro } from "./Classes/Livro";
import { Status } from "./Enums/Status";
import { Genero } from "./Enums/Genero";
import { livroAtrasado } from "./Function/LivroAtrasado";
import { livroEmprestado } from "./Function/livroEmprestado";
import { livrosDisponiveis } from "./Function/livrosDisponivel";
import { Usuario } from "./Classes/Usuario";

const livro1 = new Livro(Status.atrasado,'A espera de um milagre ','nao sei', Genero.melancolico);  
const livro2 = new Livro(Status.disponivel, 'teste','teste',Genero.acao);
const livro3 = new Livro(Status.emprestado,'input','input',Genero.fantasia);
const livro4 = new Livro(Status.reservado,'input','input',Genero.terror);

const user = new Usuario('roberto',308,99293810);


livroEmprestado(livro3,user)

