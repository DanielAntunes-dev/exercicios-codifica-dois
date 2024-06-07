let anterior = 0;
let atual = 1;

for (let i = 0; i < 10; i++) {
  console.log(atual);
  let proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}
