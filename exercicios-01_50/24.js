let M = [
  [1, -2, 3, -4],
  [-5, 6, -7, 8],
  [9, -10, 11, -12],
];

let C = [];

for (let i = 0; i < M.length; i++) {
  let negativeNumbers = [];
  for (let j = 0; j < M[i].length; j++) {
    if (M[i][j] < 0) {
      negativeNumbers.push(M[i][j]);
      C.push(M[i][j]);
    }
  }

  console.log(
    `Na linha ${i + 1} tem ${
      negativeNumbers.length
    } números negativos [${negativeNumbers.join(", ")}]`
  );
}

console.log("Vetor C:", C);
