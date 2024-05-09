let prompt = require("prompt-sync")();

const horasAtividade = parseFloat(
  prompt("Quantas horas de atividade física você teve neste mês: ")
);

let pontos = 0;

if (horasAtividade <= 10) {
  pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
  pontos = horasAtividade * 5;
} else {
  pontos = horasAtividade * 10;
}

const dinheiroGanho = pontos * 0.05;

console.log("Você acumulou " + pontos + " pontos.");
console.log("Você ganhou R$ " + dinheiroGanho.toFixed(2));
