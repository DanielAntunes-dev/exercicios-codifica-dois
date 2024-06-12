function separarValores(valores) {
  let pares = [];
  let impares = [];

  valores.forEach((valor) => {
    if (valor % 2 === 0) {
      pares.push(valor);
      if (pares.length === 5) {
        console.log("Vetor de pares cheio:", pares);
        pares = [];
      }
    } else {
      impares.push(valor);
      if (impares.length === 5) {
        console.log("Vetor de ímpares cheio:", impares);
        impares = [];
      }
    }
  });

  if (pares.length > 0) {
    console.log("Conteúdo restante do vetor de pares:", pares);
  }
  if (impares.length > 0) {
    console.log("Conteúdo restante do vetor de ímpares:", impares);
  }
}

const valores = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

separarValores(valores);
