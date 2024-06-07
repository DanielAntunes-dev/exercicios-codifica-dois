let M = [];
for (let i = 0; i < 15; i++) {
  let row = [];
  for (let j = 0; j < 20; j++) {
    row.push(Math.floor(Math.random() * 50) + 1);
  }
  M.push(row);
}

for (let j = 0; j < 20; j++) {
  let sum = 0;
  let columnNumbers = [];
  for (let i = 0; i < 15; i++) {
    sum += M[i][j];
    columnNumbers.push(M[i][j]);
  }
  console.log(`Na coluna ${j + 1} tem [${columnNumbers}] com a soma ${sum}`);
}
