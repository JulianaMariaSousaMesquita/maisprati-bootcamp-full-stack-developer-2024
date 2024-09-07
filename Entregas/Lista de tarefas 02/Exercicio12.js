// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    { produto: 'Tela 49', quantidade: 5, minimo: 10 },
    { produto: 'Smarphone Galaxy Plus', quantidade: 8, minimo: 15 },
    { produto: 'Smarphone Galaxy S', quantidade: 12, minimo: 20 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);