// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número de 1 a 10: ", (numInput) => {
    const num = parseInt(numInput);
    if (num >= 1 && num <= 10) {
        console.log(`Tabuada de ${num}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    } else {
        console.log("Número inválido.");
    }
    rl.close();
});

