let prompt = require("prompt-sync")();

function verificarMulta(velocidade) {
  const velocidadeLimite = 80;
  const valorPorKmAcima = 5;

  if (velocidade > velocidadeLimite) {
    const kmAcima = velocidade - velocidadeLimite;
    const valorMulta = kmAcima * valorPorKmAcima;
    console.log("Você foi multado!");
    console.log(`Valor da multa: R$ ${valorMulta.toFixed(2)}`);
  } else {
    console.log("Velocidade dentro do limite permitido.");
  }
}

const velocidade = parseFloat(prompt("Qual é a velocidade do carro em Km/h: "));

verificarMulta(velocidade);
