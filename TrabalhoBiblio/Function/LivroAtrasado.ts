import { Livro } from "../Classes/Livro";

export function livroAtrasado(livro:Livro,livro2:Livro,livro3:Livro,livro4:Livro) {
    let array: Array<Livro> = []
    
    if (livro.status == 'atrasado') {
        array.push(livro)
    }
    if (livro2.status == 'atrasado') {
        array.push(livro2)
    }
    if (livro3.status == 'atrasado') {
        array.push(livro3)
    }
    if (livro4.status == 'atrasado') {
        array.push(livro4)
    }
    console.log('Array atrasado',array);
}