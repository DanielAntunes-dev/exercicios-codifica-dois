let prompt = require("prompt-sync")();

const primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
const razao = parseFloat(prompt("Digite a razão da PA: "));

console.log("Os 10 primeiros elementos da PA são:");

let soma = 0;
let termoAtual = primeiroTermo;

for (let i = 0; i < 10; i++) {
  console.log("Termo " + (i + 1) + ": " + termoAtual);
  soma += termoAtual;
  termoAtual += razao;
}

console.log("A soma de todos os valores da sequência é: " + soma);
