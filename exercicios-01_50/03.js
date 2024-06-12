let prompt = require("prompt-sync")();

function precoPassagem(distancia) {
  let viagemAte200km = distancia * 0.5;
  let viagemSuperior200km = distancia * 0.45;

  let valorPassagem =
    distancia < 200
      ? `O valor da passagem para a distancia de ${distancia}km é: R$ ${viagemAte200km.toFixed(
          2
        )}`
      : `O valor da passagem para a distancia de ${distancia}km é: R$ ${viagemSuperior200km.toFixed(
          2
        )}`;
  return valorPassagem;
}

let distanciaDesejada = parseInt(
  prompt("Qual a distancia da viagem desejada: ")
);

console.log(precoPassagem(distanciaDesejada));
