let prompt = require("prompt-sync")();

function criarMatriz() {
  let matriz = [];
  for (let i = 0; i < 4; i++) {
    // no exercicio pede 10
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
      // no exercicio pede 10
      let valor = parseFloat(
        prompt(`Insira o valor para a posição [${i + 1},${j + 1}] da matriz:`)
      );
      matriz[i][j] = valor;
    }
  }
  console.log(matriz);
  return matriz;
}

function somaDiagonalPrincipal(matriz) {
  let somaAcimaDiagonal = 0;
  let somaAbaixoDiagonal = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i < j) {
        somaAcimaDiagonal += matriz[i][j];
      } else if (i > j) {
        somaAbaixoDiagonal += matriz[i][j];
      }
    }
  }

  return {
    acimaDiagonal: somaAcimaDiagonal,
    abaixoDiagonal: somaAbaixoDiagonal,
  };
}

let matriz = criarMatriz();

let resultado = somaDiagonalPrincipal(matriz);

console.log(
  "Soma dos elementos acima da diagonal principal:",
  resultado.acimaDiagonal
);
console.log(
  "Soma dos elementos abaixo da diagonal principal:",
  resultado.abaixoDiagonal
);
