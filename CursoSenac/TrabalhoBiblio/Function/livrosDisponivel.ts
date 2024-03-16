import { Livro } from "../Classes/Livro";

export function livrosDisponiveis(livro:Livro,livro2:Livro,livro3:Livro,livro4:Livro):void {
    let array: Array<Livro> = []

    if (livro.status == 'disponivel') {
        array.push(livro)
    }
    console.log('Array disponiveis', array);
}
