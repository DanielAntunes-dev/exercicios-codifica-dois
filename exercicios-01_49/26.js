
let A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
  ];
  
  let B = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
  ]
  let P = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      P[i][j] = A[i][j] * B[i][j];
    }
  }
  
  console.log("Matriz Produto P:");
  for (let i = 0; i < 3; i++) {
    console.log(P[i]);
  }
  