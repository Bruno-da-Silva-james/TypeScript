"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livroEmprestado = void 0;
function livroEmprestado(livro, livro2, livro3, livro4) {
    var array = [];
    if (livro.status == 'emprestado') {
        array.push(livro);
    }
    if (livro2.status == 'emprestado') {
        array.push(livro2);
    }
    if (livro3.status == 'emprestado') {
        array.push(livro3);
    }
    if (livro4.status == 'emprestado') {
        array.push(livro4);
    }
    console.log('Array emprestado', array);
}
exports.livroEmprestado = livroEmprestado;
