// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.

const produtos = [
    { nome: 'Arroz 5kg', preco: 10, quantidade: 5, peso: 2 },
    { nome: 'Feijão 1kg', preco: 20, quantidade: 3, peso: 1 },
    { nome: 'Banana 1kg', preco: 5, quantidade: 10, peso: 0.5 },
    { nome: 'Maca 1kg', preco: 15, quantidade: 2, peso: 3 },
    { nome: 'Pistache 1kg', preco: 25, quantidade: 1, peso: 4 },
    { nome: 'Algodão', preco: 2, quantidade: 1, peso: 2 }
];

function filterProductsByPrice(products, price) {
    return products.filter(product => product.preco >= price);
}

const filteredProducts = filterProductsByPrice(produtos, 15);
console.log(filteredProducts);

const filteredProducts2 = filterProductsByPrice(produtos, 5);
console.log(filteredProducts2);

const filteredProducts3 = filterProductsByPrice(produtos, 20);
console.log(filteredProducts3);