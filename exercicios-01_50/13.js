let fibonacci = [];
let anterior = 0;
let atual = 1;

for (let i = 0; i < 15; i++) {
  fibonacci.push(atual);
  let proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}

console.log("Vetor Fibonacci:", fibonacci);
