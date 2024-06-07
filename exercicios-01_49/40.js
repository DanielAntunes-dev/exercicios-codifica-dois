function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function saoIguais(vetor1, vetor2) {
  if (vetor1.length !== vetor2.length) {
    return false;
  }
  for (let i = 0; i < vetor1.length; i++) {
    if (vetor1[i] !== vetor2[i]) {
      return false;
    }
  }
  return true;
}

function verificarApostas(resultadoOficial, numeroApostas) {
  const numeroMaximo = 50;
  for (let i = 0; i < numeroApostas; i++) {
    const aposta = [];
    for (let j = 0; j < resultadoOficial.length; j++) {
      aposta.push(gerarNumeroAleatorio(1, 50));
    }
    if (saoIguais(resultadoOficial, aposta)) {
      console.log(`Aposta ${i + 1}: Ganhador`);
    } else {
      console.log(`Aposta ${i + 1}: Não é ganhadora`);
    }
  }
}

const resultadoOficial = [3, 7, 12, 25, 33];
const numeroApostas = 100;

verificarApostas(resultadoOficial, numeroApostas);
