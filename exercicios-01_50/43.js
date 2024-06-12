function combinarObjetos(obj1, obj2) {
  const novoObjeto = {};

  for (const chave in obj1) {
    novoObjeto[chave] = obj1[chave];
  }

  for (const chave in obj2) {
    novoObjeto[chave] = obj2[chave];
  }

  return novoObjeto;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const objetoCombinado = combinarObjetos(obj1, obj2);
console.log(objetoCombinado);
