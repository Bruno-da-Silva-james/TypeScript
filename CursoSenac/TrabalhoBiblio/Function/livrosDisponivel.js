"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livrosDisponiveis = void 0;
function livrosDisponiveis(livro, livro2, livro3, livro4) {
    var array = [];
    if (livro.status == 'disponivel') {
        array.push(livro);
    }
    console.log('Array disponiveis', array);
}
exports.livrosDisponiveis = livrosDisponiveis;
