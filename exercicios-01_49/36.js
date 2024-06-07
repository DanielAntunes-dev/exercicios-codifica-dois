function verificarAcertos(gabarito, respostas) {
  let acertos = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (gabarito[i] === respostas[i]) {
      acertos++;
    }
  }
  return acertos;
}

function executarLoteria(gabarito, apostadores) {
  apostadores.forEach((apostador) => {
    const numeroCartao = apostador.numeroCartao;
    const respostas = apostador.respostas;
    const acertos = verificarAcertos(gabarito, respostas);

    console.log(`Apostador Nº ${numeroCartao}: ${acertos} acertos`);
    if (acertos === 13) {
      console.log("Parabéns, tu foi o GANHADOR");
    }
  });
}

const gabarito = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const apostadores = [
  { numeroCartao: 1, respostas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
  { numeroCartao: 2, respostas: [1, 2, 0, 4, 5, 0, 7, 0, 9, 10, 11, 12, 13] },
];

executarLoteria(gabarito, apostadores);
