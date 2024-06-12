let prompt = require("prompt-sync")();

function main() {
  let A = parseInt(prompt("Digite um número inteiro A:"));

  let V = [];
  console.log("Digite os elementos da matriz 30x30:");
  for (let i = 0; i < 30; i++) {
    let linha = prompt(
      `Digite os 30 elementos da linha ${i + 1} separados por espaço:`
    )
      .split(" ")
      .map(Number);
    V.push(linha);
  }

  let countA = 0;
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (V[i][j] === A) {
        countA += 1;
      }
    }
  }

  let X = [];
  for (let i = 0; i < 30; i++) {
    let linhaX = [];
    for (let j = 0; j < 30; j++) {
      if (V[i][j] !== A) {
        linhaX.push(V[i][j]);
      }
    }
    if (linhaX.length > 0) {
      X.push(linhaX);
    }
  }

  console.log(`Quantidade de elementos iguais a ${A} na matriz: ${countA}`);
  console.log("Matriz X (elementos diferentes de A):");
  X.forEach((linha) => {
    console.log(linha.join(" "));
  });
}

main();
