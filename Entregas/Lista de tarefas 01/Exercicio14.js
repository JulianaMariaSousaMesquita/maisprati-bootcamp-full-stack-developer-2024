// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (numInput) => {
    const num = parseInt(numInput);
    let fatorial = 1;

    if (num < 0) {
        console.log("O número deve ser positivo.");
    } else if (num === 0) {
        console.log("O fatorial de 0 é 1.");
    } else {
        for (let i = 1; i <= num; i++) {
            fatorial *= i;
        }
        console.log(`O fatorial de ${num} é ${fatorial}.`);
    }
    rl.close();
});