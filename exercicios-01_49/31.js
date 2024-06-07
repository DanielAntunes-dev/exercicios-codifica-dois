function contarValoresIguais(matriz, A) {
  let contagem = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === A) {
        contagem++;
      }
    }
  }
  return contagem;
}

function criarMatrizX(matriz, A) {
  let novaMatriz = [];
  for (let i = 0; i < matriz.length; i++) {
    let linha = [];
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] !== A) {
        linha.push(matriz[i][j]);
      }
    }
    if (linha.length > 0) {
      novaMatriz.push(linha);
    }
  }
  return novaMatriz;
}

function executarOperacoes(A, V) {
  const contagem = contarValoresIguais(V, A);
  console.log("Número de valores iguais a " + A + ": " + contagem);

  const matrizX = criarMatrizX(V, A);
  console.log("Matriz X com valores diferentes de " + A + ":");
  console.log(matrizX);
}

const A = 5;
const V = [
  [1, 2, 3, 5, 5],
  [5, 6, 7, 8, 5],
  [9, 10, 5, 12, 13],
  [14, 5, 16, 17, 18],
  [5, 20, 21, 22, 23],
];

executarOperacoes(A, V);
