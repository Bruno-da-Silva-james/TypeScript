import { Livro } from "../Classes/Livro";

export function livrosDisponiveis(livro:Livro,livro2:Livro,livro3:Livro,livro4:Livro):void {
    let array: Array<Livro> = []

    if (livro.status == 'disponivel') {
        array.push(livro)
    }
    if (livro2.status == 'disponivel') {
        array.push(livro2)
    }
    if (livro3.status == 'disponivel') {
        array.push(livro3)
    }
    if (livro4.status == 'disponivel') {
        array.push(livro4)
    }
    console.log('Array disponiveis', array);
}
