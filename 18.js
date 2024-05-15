let prompt = require("prompt-sync")();

var registroFuncionario = {
  nome: "",
  cargo: "",
  salario: 0,
};

function lerRegistro() {
  registroFuncionario.nome = prompt("Digite o nome do funcionário:");
  registroFuncionario.cargo = prompt("Digite o cargo do funcionário:");
  registroFuncionario.salario = parseFloat(
    prompt("Digite o salário do funcionário:")
  );
}

lerRegistro();

console.log("Registro do Funcionário:");
console.log("Nome: " + registroFuncionario.nome);
console.log("Cargo: " + registroFuncionario.cargo);
console.log("Salário: R$" + registroFuncionario.salario.toFixed(2));
