"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livroAtrasado = void 0;
function livroAtrasado(livro, livro2, livro3, livro4) {
    var array = [];
    if (livro.status == 'atrasado') {
        array.push(livro);
    }
    console.log('Array atrasado', array);
}
exports.livroAtrasado = livroAtrasado;
