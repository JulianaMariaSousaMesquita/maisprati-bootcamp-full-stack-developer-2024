// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

const carrinho = {
    itens: [
        { nome: 'Smartphone Samsung Galaxy A05', quantidade: 2, precoUnitario: 800 },
        { nome: 'Apple iPhone 11', quantidade: 1, precoUnitario: 2000 },
        { nome: 'Notebook Inspiron 15', quantidade: 3, precoUnitario: 2500 }
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log(`O valor total do carrinho é: R$ ${valorTotal.toFixed(2)}`);