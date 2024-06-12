function contarPropriedadesString(objeto) {
  let contador = 0;

  for (const chave in objeto) {
    if (typeof objeto[chave] === "string") {
      contador++;
    }
  }

  return contador;
}

const exemplo = {
  nome: "Alice",
  idade: 30,
  cidade: "São Paulo",
  email: "alice@example.com",
};

const quantidadeStrings = contarPropriedadesString(exemplo);
console.log("Quantidade de propriedades do tipo string:", quantidadeStrings);
