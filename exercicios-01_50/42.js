const dados = {
  numero: 42,
  texto: "Olá, mundo!",
  array1: [1, 2, 3],
  array2: ["a", "b", "c"],
  array3: ["x", "y", "z"],
  booleano: true,
};

function filtrarArrays(objeto) {
  const resultado = {};
  for (const chave in objeto) {
    if (Array.isArray(objeto[chave])) {
      resultado[chave] = objeto[chave];
    }
  }
  return resultado;
}

const arraysDoObjeto = filtrarArrays(dados);
console.log("Propriedades que são arrays:", arraysDoObjeto);
