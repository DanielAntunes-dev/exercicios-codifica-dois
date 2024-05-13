let prompt = require("prompt-sync")();

console.log("Informe 10 números inteiros:");

let numeros = []; 

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Número " + (i + 1) + ": "));
    numeros.push(numero);
}

console.log("\nNúmeros pares e suas posições:");

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log("Número par:", numeros[i], "| Posição:", i);
    }
}
