let funçoes: Array <string> = ["fullstack", "frontend", "backend", "mobile"];

console.log(funçoes);

function filtro(arrayFuncao: Array <string>, funcao: string) {
     arrayFuncao.splice(arrayFuncao.indexOf(funcao), 1);
}

filtro(funçoes,'backend')

console.log(funçoes);



