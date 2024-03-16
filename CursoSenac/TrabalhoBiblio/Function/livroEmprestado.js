"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livroEmprestado = void 0;
function livroEmprestado(livro, usuario) {
    var array = [];
    if (livro.status == 'emprestado') {
        array.push(livro, usuario);
    }
    console.log('Array emprestado', array);
}
exports.livroEmprestado = livroEmprestado;
