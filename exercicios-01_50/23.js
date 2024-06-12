function criarMatrizIdentidade(tamanho) {
  let matriz = [];

  for (let i = 0; i < tamanho; i++) {
    let linha = [];
    for (let j = 0; j < tamanho; j++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  for (let i = 0; i < tamanho; i++) {
    matriz[i][i] = 1;
  }

  return matriz;
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
}

const tamanhoMatriz = 7;
const matrizIdentidade = criarMatrizIdentidade(tamanhoMatriz);
imprimirMatriz(matrizIdentidade);
