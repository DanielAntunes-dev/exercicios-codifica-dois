let vetor = [];

for (let i = 0; i < 20; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 100);
  vetor.push(numeroAleatorio);
}

console.log("Números aleatórios gerados:", vetor);

vetor.sort((a, b) => a - b);

console.log("Números ordenados:", vetor);
