// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos

const vendas = [
    { produto: 'Caneta magica', quantidade: 5, valor: 10 },
    { produto: 'Pacote de papel', quantidade: 3, valor: 15 },
    { produto: 'Caderno inteligente', quantidade: 2, valor: 80 }
];

let totalSalesValue = 0;
vendas.forEach((venda) => {
    totalSalesValue += venda.quantidade * venda.valor;
});

console.log('Total de vendas:', totalSalesValue);