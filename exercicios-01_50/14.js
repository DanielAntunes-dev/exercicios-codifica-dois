let prompt = require("prompt-sync")();

let nomes = [];

for (let i = 0; i < 7; i++) {
  let nome = prompt("Nome " + (i + 1) + ": ");
  nomes.push(nome);
}

nomes.reverse();

console.log("\nNomes na ordem inversa no vetor:");
console.log(nomes);
