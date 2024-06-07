function maiorValorModulo(linha) {
  let maior = Math.abs(linha[0]);
  for (let i = 1; i < linha.length; i++) {
    if (Math.abs(linha[i]) > maior) {
      maior = Math.abs(linha[i]);
    }
  }
  return maior;
}

function modificarMatriz(matriz) {
  let matrizModificada = [];
  for (let i = 0; i < matriz.length; i++) {
    let maiorModulo = maiorValorModulo(matriz[i]);
    let linhaModificada = matriz[i].map((valor) => valor / maiorModulo);
    matrizModificada.push(linhaModificada);
  }
  return matrizModificada;
}

function executarOperacoes(M) {
  console.log("Matriz Original:");
  console.table(M);

  const matrizModificada = modificarMatriz(M);

  console.log("Matriz Modificada:");
  console.table(matrizModificada);
}

const M = [
  [12, -7, 5, 6, 9],
  [9, -4, 11, 8, -12],
  [6, 8, -7, 5, 4],
  [10, 6, 5, 8, -11],
  [8, -3, 9, 5, 2],
  [7, 10, 6, -9, 11],
  [9, 4, -7, 12, 6],
  [5, 8, 11, 6, 10],
  [6, -11, 4, 10, 5],
  [8, 5, 7, -10, 6],
  [10, -6, 8, 11, 5],
  [7, 5, -9, 10, 12],
];

executarOperacoes(M);
