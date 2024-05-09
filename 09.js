let prompt = require("prompt-sync")();

let salarioTotalHomens = 0;
let salarioTotalMulheres = 0;

while (true) {
  let salario = parseFloat(prompt("Informe o salário do funcionário: "));
  let sexo = prompt(
    "Informe o sexo do funcionário (M para masculino, F para feminino): "
  ).toUpperCase();

  if (sexo !== "M" && sexo !== "F") {
    console.log(
      "Sexo inválido. Por favor, informe M para masculino ou F para feminino."
    );
    continue;
  }

  if (sexo === "M") {
    salarioTotalHomens += salario;
  } else {
    salarioTotalMulheres += salario;
  }

  let continuar = prompt(
    "Deseja continuar? (S para continuar, qualquer tecla para encerrar o programa): "
  ).toUpperCase();

  if (continuar !== "S") {
    console.log("Encerrando o programa...");

    break;
  }
}

console.log(
  "Total de salário pago aos homens: R$ " + salarioTotalHomens.toFixed(2)
);
console.log(
  "Total de salário pago às mulheres: R$ " + salarioTotalMulheres.toFixed(2)
);
