let prompt = require("prompt-sync")();

var nomes = [];
var idades = [];

for (var i = 1; i <= 9; i++) {
    var nome = prompt("Digite o nome da pessoa " + i + ":");
    var idade = parseInt(prompt("Digite a idade de " + nome + ":"));

    nomes.push(nome);
    idades.push(idade);
}

console.log("Pessoas menores de idade:");
for (var i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        console.log("Nome: " + nomes[i] + ", Idade: " + idades[i]);
    }
}
