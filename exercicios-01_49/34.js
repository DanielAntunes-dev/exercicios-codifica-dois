function multiplicarPelaDiagonal(matriz) {
  let matrizModificada = [];
  for (let i = 0; i < matriz.length; i++) {
    let fator = matriz[i][i];
    let linhaModificada = matriz[i].map((valor) => valor * fator);
    matrizModificada.push(linhaModificada);
  }
  return matrizModificada;
}

function executarOperacoes(M) {
  console.log("Matriz Original:");
  console.table(M);

  const matrizModificada = multiplicarPelaDiagonal(M);

  console.log("Matriz Modificada:");
  console.table(matrizModificada);
}

function lerMatriz50x50() {
  let matriz = [];
  for (let i = 0; i < 10; i++) {
    let linha = [];
    for (let j = 0; j < 10; j++) {
      linha.push(parseFloat((Math.random() * 10).toFixed(0)));
    }
    matriz.push(linha);
  }
  return matriz;
}

const M = lerMatriz50x50();

executarOperacoes(M);
