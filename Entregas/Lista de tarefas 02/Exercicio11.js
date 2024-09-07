// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

const orders = [
    { cliente: 'John', produto: 'Blusa', quantidade: 2 },
    { cliente: 'John', produto: 'Sapatos', quantidade: 1 },
    { cliente: 'Alice', produto: 'Bolsa', quantidade: 3 },
    { cliente: 'Alice', produto: 'Meias', quantidade: 2 },
    { cliente: 'Bob', produto: 'Cinto', quantidade: 4 },
];

const quantityByClient = {};

orders.forEach(order => {
    const { cliente, quantidade } = order;
    if (quantityByClient[cliente]) {
        quantityByClient[cliente] += quantidade;
    } else {
        quantityByClient[cliente] = quantidade;
    }
});

console.log(quantityByClient);