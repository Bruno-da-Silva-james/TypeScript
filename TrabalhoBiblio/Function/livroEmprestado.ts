import { Livro } from "../Classes/Livro";
import { Usuario } from "../Classes/Usuario";


export function livroEmprestado(livro:Livro, usuario:Usuario) {
    let array: Array<object> = []
    
    if (livro.status == 'emprestado') {
        array.push(livro, usuario)
    }
    console.log('Array emprestado', array);
}

