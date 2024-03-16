import { Livro } from "../Classes/Livro";

export function livroAtrasado(livro:Livro,livro2:Livro,livro3:Livro,livro4:Livro) {
    let array: Array<Livro> = []
    
    if (livro.status == 'atrasado') {
        array.push(livro)
    }
    console.log('Array atrasado',array);
}