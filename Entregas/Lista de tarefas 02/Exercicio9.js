// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos

const clients = [
    { nome: 'John', idade: 25, cidade: 'New York' },
    { nome: 'Jane', idade: 35, cidade: 'Los Angeles' },
    { nome: 'Mike', idade: 40, cidade: 'Chicago' },
    { nome: 'Sarah', idade: 28, cidade: 'San Francisco' },
    { nome: 'David', idade: 32, cidade: 'Seattle' }
];

let count = 0;

clients.forEach(client => {
    if (client.idade > 30) {
        count++;
    }
});

console.log(`Quantidade de clientes com mais de 30 anos: ${count}`);