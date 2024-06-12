let prompt = require("prompt-sync")();

function criarMatriz() {
  let matriz = [];
  for (let i = 0; i < 6; i++) {
    matriz[i] = [];
    for (let j = 0; j < 6; j++) {
      let valor = parseFloat(
        prompt(`Insira o valor para a posição [${i + 1},${j + 1}] da matriz:`)
      );
      matriz[i][j] = valor;
    }
  }
  return matriz;
}

function multiplicarMatrizPorValor(matriz, valor) {
  let vetor = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      vetor.push(matriz[i][j] * valor);
    }
  }
  return vetor;
}

let M = criarMatriz();

let A = parseFloat(prompt("Insira o valor A:"));

let V = multiplicarMatrizPorValor(M, A);

console.log("Vetor V:");
console.log(V);
