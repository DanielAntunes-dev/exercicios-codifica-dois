const prompt = require("prompt-sync")();

function calcularPesoIdeal(alt, sexo) {
  if (sexo.toLowerCase() === "masculino") {
    return 72.7 * alt - 58;
  } else if (sexo.toLowerCase() === "feminino") {
    return 62.1 * alt - 44.7;
  } else {
    return null;
  }
}

while (true) {
  let altura = parseFloat(prompt("Digite sua altura em metros: "));
  let sexo = prompt("Digite seu sexo (masculino/feminino): ").toLowerCase();

  let pesoIdeal = calcularPesoIdeal(altura, sexo);

  if (pesoIdeal !== null) {
    console.log(
      `O peso ideal para uma pessoa de sexo ${sexo} de altura ${altura}m é ${pesoIdeal.toFixed(
        2
      )}kg.`
    );
  } else {
    console.log("Sexo inválido. Use 'masculino' ou 'feminino'.");
  }

  let continuar = prompt(
    "Deseja calcular o peso ideal ainda? (s/n): "
  ).toLowerCase();
  if (continuar !== "s") {
    console.log("Encerrando o programa.");
    break;
  }
}
