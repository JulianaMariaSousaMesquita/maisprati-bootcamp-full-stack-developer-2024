// 7. Modificando Objetos em um Array ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

const produtos = [
    { nome: 'Caixa de som', preco: 100, desconto: 0.1 },
    { nome: 'Mouse Gamer', preco: 200, desconto: 0.1 },
    { nome: 'Smartwach', preco: 300, desconto: 0.1 }
];

produtos.forEach((produto) => {
    produto.preco -= produto.preco * produto.desconto;
});

produtos.forEach((produto) => {
    console.log(`Novo preço do ${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});