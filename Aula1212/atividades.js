/*
//1)
let filmes: string[] = ['Dunkirk', 'Skinamarink', 'A espera de um milagre']

function contemFilme(filmes:string[], filme: string):boolean {
    return filmes.includes(filme)
}

console.log(contemFilme(filmes,'Dunkirk'));

2)
let arrayJogos: string[] = ['Lethal Company', 'Dayz', 'Diablo 4']

function adicionarJogo(listaJogos:string[], novoJogo:string): string[]{
    listaJogos.push(novoJogo);
    return listaJogos
}
console.log(adicionarJogo(arrayJogos,'Alan Wake'));

3)
function removerJogo(arrayJogos: any): string {
    return arrayJogos.pop();
}
removerJogo(arrayJogos);
console.log(arrayJogos);

4)*/
var arrayNumeros = [1, 12, 3, 5, 2, 6, 10];
function coletaPar(arrayNum) {
    var arrayPar = arrayNum.filter(function (array) { return (array % 2) == 0; });
    return arrayPar;
}
console.log(coletaPar(arrayNumeros));
function dobrarParesMenoresQueCinco(arrayNumeros) {
    var arrayMult = arrayNumeros.filter(function (array) { return (array % 2) == 0 && array < 5; });
    return arrayMult;
}
console.log(dobrarParesMenoresQueCinco(arrayNumeros));
