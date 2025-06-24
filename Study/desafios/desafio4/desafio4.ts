const numeros: Array<number> = [6, 12, 5, 9, 14, 27];
const numerosDivisiveis: Array<number> = [];

numeros.forEach((x) => {
  if ((x % 3) == 0) {
    numerosDivisiveis.push(x)
  }
});
console.log(numerosDivisiveis);
