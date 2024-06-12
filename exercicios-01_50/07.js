let prompt = require("prompt-sync")();

while (true) {
  let tipoCarro = prompt(
    "Tipo de carro alugado (popular, luxo ou sair): "
  ).toLowerCase();

  if (tipoCarro === "sair") {
    console.log("Obrigado por usar aluguel de carros!");
    break;
  }

  if (tipoCarro !== "popular" && tipoCarro !== "luxo") {
    console.log(
      "Tipo de carro inválido. Por favor, escolha entre 'popular', 'luxo' ou 'sair'."
    );
    continue;
  }

  const diasAluguel = parseInt(prompt("Quantos dias de aluguel: "));
  const kmPercorridos = parseFloat(
    prompt("Quantos quilômetros foram percorridos: ")
  );

  let precoTotal = 0;

  if (tipoCarro === "popular") {
    precoTotal += diasAluguel * 90;
  } else if (tipoCarro === "luxo") {
    precoTotal += diasAluguel * 150;
  }

  if (tipoCarro === "popular") {
    if (kmPercorridos <= 100) {
      precoTotal += kmPercorridos * 0.2;
    } else {
      precoTotal += 100 * 0.2 + (kmPercorridos - 100) * 0.1;
    }
  } else if (tipoCarro === "luxo") {
    if (kmPercorridos <= 200) {
      precoTotal += kmPercorridos * 0.3;
    } else {
      precoTotal += 200 * 0.3 + (kmPercorridos - 200) * 0.25;
    }
  }

  console.log("O preço total a ser pago é: R$ " + precoTotal.toFixed(2));
  break;
}
