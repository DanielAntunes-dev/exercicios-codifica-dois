let prompt = require("prompt-sync")();

console.log("Jogo de adivinhação!");

while (true) {
    const numeroSorteado = Math.floor(Math.random() * 5) + 1; 

    console.log("O computador sorteou um número entre 1 e 5. Tente adivinhar qual foi!");

    let tentativa = parseInt(prompt("Digite sua tentativa: "));

    if (tentativa < 1 || tentativa > 5 ) {
        console.log("Por favor, digite um número entre 1 e 5.");
        continue;
    }

    if (tentativa === numeroSorteado) {
        console.log("Parabéns! Você acertou o número sorteado: " + numeroSorteado);
    } else {
        console.log("Que pena! O número sorteado foi: " + numeroSorteado);
    }

    const jogarNovamente = prompt("Deseja jogar novamente? (s/n): ").toLowerCase();
    if (jogarNovamente !== "s") {
        console.log("Obrigado por jogar!");
        break;
    }
}
