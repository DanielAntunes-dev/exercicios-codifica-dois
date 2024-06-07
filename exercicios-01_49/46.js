function sumarizarVendasPorVendedor(vendas) {
    const totalVendasPorVendedor = {};

    vendas.forEach(venda => {
        const { vendedor, valor } = venda;

        if (totalVendasPorVendedor[vendedor]) {
            totalVendasPorVendedor[vendedor] += valor;
        } else {
            totalVendasPorVendedor[vendedor] = valor;
        }
    });

    return totalVendasPorVendedor;
}

const vendas = [
    { vendedor: 'João', valor: 100 },
    { vendedor: 'Maria', valor: 200 },
    { vendedor: 'João', valor: 150 },
    { vendedor: 'Maria', valor: 300 },
    { vendedor: 'Pedro', valor: 120 }
];

const totalVendasPorVendedor = sumarizarVendasPorVendedor(vendas);
console.log(totalVendasPorVendedor);
