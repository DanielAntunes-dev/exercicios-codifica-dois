let prompt = require("prompt-sync")();

let soma = 0;
let menorValor;
let contadorPares = 0;
let quantidadeNumeros = 0;

do {
  let numero = parseFloat(prompt("Digite um número: "));

  if (menorValor === undefined || numero < menorValor) {
    menorValor = numero;
  }

  if (numero % 2 === 0) {
    contadorPares++;
  }

  soma += numero;
  quantidadeNumeros++;

  let continuar = prompt(
    "Deseja continuar? (S para sim, qualquer tecla para não): "
  ).toUpperCase();

  if (continuar !== "S") {
    break;
  }
} while (true);

let media = soma / quantidadeNumeros;

console.log("a) O somatório entre todos os valores é: " + soma);
console.log("b) O menor valor digitado é: " + menorValor);
console.log("c) A média entre todos os valores é: " + media.toFixed(2));
console.log("d) Quantidade de valores pares: " + contadorPares);
