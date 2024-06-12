const prompt = require("prompt-sync")();

const numeroFuncionarios = 2; // no exercicio fala 80, coloquei 2 para fazer o teste
let funcionarios = [];

for (let i = 0; i < numeroFuncionarios; i++) {
  console.log(`\nDigite os dados do funcionário ${i + 1}:`);

  let matricula;
  while (true) {
    matricula = parseInt(prompt("Matrícula (número): "), 10);
    if (!isNaN(matricula)) {
      break;
    } else {
      console.log("Matrícula inválida. Deve ser um número.");
    }
  }

  let nome = prompt("Nome: ");

  let salarioBruto;
  while (true) {
    salarioBruto = parseFloat(prompt("Salário bruto: "));
    if (!isNaN(salarioBruto)) {
      break;
    } else {
      console.log("Salário bruto inválido. Deve ser um número.");
    }
  }

  let deducaoINSS = calcularINSS(salarioBruto);
  let salarioLiquido = calcularSalarioLiquido(salarioBruto, deducaoINSS);

  funcionarios.push({
    matricula: matricula,
    nome: nome,
    salarioBruto: salarioBruto,
    deducaoINSS: deducaoINSS,
    salarioLiquido: salarioLiquido,
  });
}

function calcularINSS(salarioBruto) {
  return salarioBruto * 0.12;
}

function calcularSalarioLiquido(salarioBruto, deducaoINSS) {
  return salarioBruto - deducaoINSS;
}

console.log("\nContracheques dos funcionários:\n");
funcionarios.forEach((funcionario) => {
  console.log(`Matrícula: ${funcionario.matricula}`);
  console.log(`Nome: ${funcionario.nome}`);
  console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
  console.log(`Dedução INSS: R$ ${funcionario.deducaoINSS.toFixed(2)}`);
  console.log(`Salário líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
  console.log("----------------------------------------");
});
