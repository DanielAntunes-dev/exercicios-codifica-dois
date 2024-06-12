let prompt = require("prompt-sync")();

function criarMatriz() {
  let matriz = [];
  for (let i = 0; i < 5; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
      let valor = parseFloat(
        prompt(`Insira o valor para a posição [${i + 1},${j + 1}] da matriz:`)
      );
      matriz[i][j] = valor;
    }
  }
  return matriz;
}

function somaLinha4(matriz) {
  let soma = 0;
  for (let j = 0; j < 5; j++) {
    soma += matriz[3][j];
  }
  return soma;
}

function somaColuna2(matriz) {
  let soma = 0;
  for (let i = 0; i < 5; i++) {
    soma += matriz[i][1];
  }
  return soma;
}

function somaDiagonalPrincipal(matriz) {
  let soma = 0;
  for (let i = 0; i < 5; i++) {
    soma += matriz[i][i];
  }
  return soma;
}

function somaTodosElementos(matriz) {
  let soma = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

let matriz = criarMatriz();

let somaLinha4Result = somaLinha4(matriz);
let somaColuna2Result = somaColuna2(matriz);
let somaDiagonalPrincipalResult = somaDiagonalPrincipal(matriz);
let somaTodosElementosResult = somaTodosElementos(matriz);

console.log("Matriz M:");
for (let i = 0; i < 5; i++) {
  console.log(matriz[i].join("\t"));
}
console.log("Soma da linha 4:", somaLinha4Result);
console.log("Soma da coluna 2:", somaColuna2Result);
console.log("Soma da diagonal principal:", somaDiagonalPrincipalResult);
console.log("Soma de todos os elementos da matriz:", somaTodosElementosResult);
