const numeros: Array<number> = [5, 15, 23, 2];
let vazio: number = 0;
let soma: number = 0;
numeros.forEach((x) => {
  vazio = x;
  soma = soma + vazio;
  console.log(soma);
});
