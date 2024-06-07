const prompt = require("prompt-sync")();

function coletarDados() {
  let totalSalarios = 0;
  let totalFilhos = 0;
  let maiorSalario = 0;
  let salariosAte350 = 0;
  let totalPessoas = 0;
  let pessoa = 1;

  while (true) {
    console.log(`\nPessoa ${pessoa}:`);

    let salario = prompt(
      "Digite o salário (ou digite sair para encerrar o programa): "
    );
    if (salario === "sair") break;

    salario = parseFloat(salario);
    while (isNaN(salario)) {
      console.log("Por favor, insira um valor numérico válido para o salário.");
      salario = parseFloat(
        prompt("Digite o salário (ou um valor negativo para sair): ")
      );
    }

    let numFilhos = prompt("Digite o número de filhos: ");
    numFilhos = parseInt(numFilhos, 10);
    while (isNaN(numFilhos)) {
      console.log(
        "Por favor, insira um valor numérico válido para o número de filhos."
      );
      numFilhos = parseInt(prompt("Digite o número de filhos: "), 10);
    }

    totalSalarios += salario;
    totalFilhos += numFilhos;
    totalPessoas += 1;
    pessoa += 1;

    if (salario > maiorSalario) {
      maiorSalario = salario;
    }

    if (salario <= 350) {
      salariosAte350 += 1;
    }
  }

  if (totalPessoas > 0) {
    let mediaSalarios = totalSalarios / totalPessoas;
    let mediaFilhos = totalFilhos / totalPessoas;
    let percentualSalariosAte350 = (salariosAte350 / totalPessoas) * 100;

    console.log("\nResultados:");
    console.log("Média de salário da população:", mediaSalarios.toFixed(2));
    console.log("Média do número de filhos:", mediaFilhos.toFixed(2));
    console.log("Maior salário:", maiorSalario.toFixed(2));
    console.log(
      "Percentual de pessoas com salário até R$ 350,00:",
      percentualSalariosAte350.toFixed(2) + "%"
    );
  } else {
    console.log("Nenhum dado foi inserido e o programa foi encerrado.");
  }
}

coletarDados();
