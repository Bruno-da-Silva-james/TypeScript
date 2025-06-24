var funçoes = ["fullstack", "frontend", "backend", "mobile"];
console.log(funçoes);
console.log(funçoes.indexOf('backend'));
function filtro(arrayFuncao, funcao) {
    arrayFuncao.splice(arrayFuncao.indexOf(funcao), 1);
}
filtro(funçoes, 'backend');
console.log(funçoes);
