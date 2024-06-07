function somaElementos(vetor) {
  return vetor.reduce((a, b) => a + b, 0);
}

function produtoElementos(vetor) {
  return vetor.reduce((a, b) => a * b, 1);
}

function mediaElementos(vetor) {
  return somaElementos(vetor) / vetor.length;
}

function ordenarElementos(vetor) {
  return vetor.slice().sort((a, b) => a - b);
}

function executarOperacao(vetor, identificador) {
  switch (identificador) {
    case 1:
      console.log("Soma dos elementos:", somaElementos(vetor));
      break;
    case 2:
      console.log("Produto dos elementos:", produtoElementos(vetor));
      break;
    case 3:
      console.log("Média dos elementos:", mediaElementos(vetor));
      break;
    case 4:
      console.log(
        "Elementos ordenados em ordem crescente:",
        ordenarElementos(vetor)
      );
      break;
    case 5:
      console.log("Vetor:", vetor);
      break;
    default:
      console.log("Identificador inválido");
      break;
  }
}

const vetor = [3, 1, 4, 1, 5, 9];
const identificador = 3; // Pode ser 1, 2, 3, 4 ou 5

executarOperacao(vetor, identificador);
