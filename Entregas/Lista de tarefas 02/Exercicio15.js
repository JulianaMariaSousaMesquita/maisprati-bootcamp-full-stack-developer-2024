// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

const transacoes = [
    { tipo: 'entrada', valor: 100 },
    { tipo: 'saída', valor: 50 },
    { tipo: 'entrada', valor: 200 },
    { tipo: 'saída', valor: 75 },
];

let saldo = 0;
let entradas = 0;
let saidas = 0;

transacoes.forEach((transacao) => {
    if (transacao.tipo === 'entrada') {
        entradas += transacao.valor;
    } else if (transacao.tipo === 'saída') {
        saidas += transacao.valor;
    }
});

saldo = entradas - saidas;

console.log('Saldo:', saldo);
console.log('Entradas:', entradas);
console.log('Saídas:', saidas);