"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livroAtrasado = void 0;
function livroAtrasado(livro, livro2, livro3, livro4) {
    var array = [];
    if (livro.status == 'atrasado') {
        array.push(livro);
    }
    if (livro2.status == 'atrasado') {
        array.push(livro2);
    }
    if (livro3.status == 'atrasado') {
        array.push(livro3);
    }
    if (livro4.status == 'atrasado') {
        array.push(livro4);
    }
    console.log('Array atrasado', array);
}
exports.livroAtrasado = livroAtrasado;
