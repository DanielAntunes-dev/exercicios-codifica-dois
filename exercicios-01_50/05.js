let prompt = require("prompt-sync")();

let separador = "_" * 50;
console.log("JokenPo para dois jogadores!");

while (true) {
  console.log(
    "Jogador 1, escolha Pedra, Papel ou Tesoura (ou 'sair' para encerrar o jogo):"
  );
  const escolhaJogador1 = prompt("Jogador 1 > ").toLowerCase();

  if (escolhaJogador1 === "sair") {
    console.log("Obrigado por jogar!");
    break;
  }
  console.log(`Jogador 1, escolheu: ${escolhaJogador1}`);

  console.log(
    "Jogador 2, escolha Pedra, Papel ou Tesoura (ou 'sair' para encerrar o jogo):"
  );
  const escolhaJogador2 = prompt("Jogador 2 > ").toLowerCase();

  if (escolhaJogador2 === "sair") {
    console.log("Obrigado por jogar!");
    break;
  }
  console.log(`Jogador 2, escolheu: ${escolhaJogador2}`);

  const validarEscolha = (escolha) => {
    return escolha === "pedra" || escolha === "papel" || escolha === "tesoura";
  };

  if (!validarEscolha(escolhaJogador1) || !validarEscolha(escolhaJogador2)) {
    console.log("Escolha inválida. Por favor, tente novamente.");
    continue;
  }

  if (escolhaJogador1 === escolhaJogador2) {
    console.log("Empate!");
  } else if (
    (escolhaJogador1 === "pedra" && escolhaJogador2 === "tesoura") ||
    (escolhaJogador1 === "papel" && escolhaJogador2 === "pedra") ||
    (escolhaJogador1 === "tesoura" && escolhaJogador2 === "papel")
  ) {
    console.log("Jogador 1 ganhou!");
  } else {
    console.log("Jogador 2 ganhou!");
  }
}
