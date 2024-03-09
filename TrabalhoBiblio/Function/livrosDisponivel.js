"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livrosDisponiveis = void 0;
function livrosDisponiveis(livro, livro2, livro3, livro4) {
    var array = [];
    if (livro.status == 'disponivel') {
        array.push(livro);
    }
    if (livro2.status == 'disponivel') {
        array.push(livro2);
    }
    if (livro3.status == 'disponivel') {
        array.push(livro3);
    }
    if (livro4.status == 'disponivel') {
        array.push(livro4);
    }
    console.log('Array disponiveis', array);
}
exports.livrosDisponiveis = livrosDisponiveis;
