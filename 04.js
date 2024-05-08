let prompt = require("prompt-sync")();

function formarTriangulo(lado1, lado2, lado3) {
    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
        return "É possível formar um triângulo com essas retas.";
    } else {
        return "Não é possível formar um triângulo com essas retas.";
    }
}

let lado1 = parseInt(prompt('Digite o valor do primeiro lado: '))
let lado2 = parseInt(prompt('Digite o valor do segundo lado: '))
let lado3 = parseInt(prompt('Digite o valor do terceiro lado: '))

console.log(formarTriangulo(lado1, lado2, lado3));