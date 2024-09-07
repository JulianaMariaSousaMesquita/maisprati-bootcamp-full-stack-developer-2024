// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let anterior = 0;
let atual = 1;

console.log("Sequencia de Fibonacci:");

for (let i = 0; i < 10; i++) {
    let temp = atual;
    atual = anterior + atual;
    anterior = temp;

    console.log(atual);
}