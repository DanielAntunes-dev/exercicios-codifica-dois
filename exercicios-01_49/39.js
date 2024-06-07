function compactarVetor(A) {
  let B = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      B.push(A[i]);
    }
  }
  return B;
}

const A = [
  3, -1, 4, 0, 5, 7, 8, -2, 3, 1, 3, 5, 7, -8, 0, -4, 5, 0, 6, 7, 3, 4, 0, -7,
  6, 3, 6, 0, 4, 5, 7, -8, 6, 5, 0,
];

const B = compactarVetor(A);

console.log("Vetor A (original):", A);
console.log("Vetor B (compactado):", B);
