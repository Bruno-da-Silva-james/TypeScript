import { Livro } from "../Classes/Livro";

export function livroEmprestado(livro:Livro,livro2:Livro,livro3:Livro,livro4:Livro) {
    let array: Array<Livro> = []
    
    if (livro.status == 'emprestado') {
        array.push(livro)
    }
    if (livro2.status == 'emprestado') {
        array.push(livro2)
    }
    if (livro3.status == 'emprestado') {
        array.push(livro3)
    }
    if (livro4.status == 'emprestado') {
        array.push(livro4)
    }
    console.log('Array emprestado', array);
}

