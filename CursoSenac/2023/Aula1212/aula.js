/*
//criar array
let arrayString: string[] = ['Meu nome é','Bruno James']
let arrayNum: number[] = [12,3]

//adicionar elementos ao final do array
arrayNum.push(14)

//mostrar o array
console.log(arrayNum);

//loopar as iteracoes e mostrar separadamente
for (let i = 0; i < arrayNum.length; i++) {
    console.log(arrayNum[i]);
}
*/
//metodo Map
var numeros = [1, 6, 4];
var stringNumero = ['4', '6', '10'];
var dobrados = numeros.map(function (numero) { return numero * 2; });
var numeroString = stringNumero.map(function (num) { return parseFloat(num); });
console.log(stringNumero);
console.log(numeroString);
