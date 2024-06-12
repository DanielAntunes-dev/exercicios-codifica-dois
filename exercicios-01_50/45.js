function contarOcorrencias(array) {
  const contador = {};

  array.forEach((elemento) => {
    if (contador[elemento]) {
      contador[elemento]++;
    } else {
      contador[elemento] = 1;
    }
  });

  return contador;
}

const arrayDeStrings = [
  "maçã",
  "banana",
  "maçã",
  "laranja",
  "maçã",
  "banana",
  "uva",
];

const ocorrencias = contarOcorrencias(arrayDeStrings);
console.log(ocorrencias);
