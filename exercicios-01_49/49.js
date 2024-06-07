function agruparPorCategoria(transacoes) {
  const resultado = {};

  transacoes.forEach((transacao) => {
    const { categoria, valor, id, data } = transacao;

    if (!resultado[categoria]) {
      resultado[categoria] = {
        transacoes: [],
        subtotal: 0,
      };
    }

    resultado[categoria].transacoes.push({ id, valor, data });

    resultado[categoria].subtotal += valor;
  });

  return resultado;
}

const transacoes = [
  { id: 1, valor: 100, data: "2024-06-01", categoria: "alimentacao" },
  { id: 2, valor: 50, data: "2024-06-02", categoria: "transporte" },
  { id: 3, valor: 200, data: "2024-06-03", categoria: "alimentacao" },
  { id: 4, valor: 80, data: "2024-06-04", categoria: "entretenimento" },
  { id: 5, valor: 150, data: "2024-06-05", categoria: "transporte" },
  { id: 6, valor: 120, data: "2024-06-06", categoria: "alimentacao" },
];

const transacoesAgrupadas = agruparPorCategoria(transacoes);
console.log(JSON.stringify(transacoesAgrupadas, null, 2));
