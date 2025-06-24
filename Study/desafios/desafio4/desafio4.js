var numeros = [6, 12, 5, 9, 14, 27];
var numerosDivisiveis = [];
numeros.forEach(function (x) {
    if ((x % 3) == 0) {
        numerosDivisiveis.push(x);
    }
});
console.log(numerosDivisiveis);
