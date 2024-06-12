function aplicarFuncaoEmPropriedades(objeto, funcao) {
  const novoObjeto = {};

  for (const chave in objeto) {
    if (Object.hasOwnProperty.call(objeto, chave)) {
      novoObjeto[chave] = funcao(objeto[chave]);
    }
  }

  return novoObjeto;
}

const objetoEntrada = {
  nome: "João",
  idade: 30,
  email: "joao@example.com",
};

function adicionarSobrenome(valor) {
  return valor + " Silva";
}

const objetoModificado = aplicarFuncaoEmPropriedades(
  objetoEntrada,
  adicionarSobrenome
);
console.log(objetoModificado);
