// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let sum = 0;
let count = 0;

const askNumber = () => {
    if (count < 5) {
        rl.question(`Digite o número ${count + 1}: `, (numInput) => {
            const num = parseFloat(numInput);
            if (!isNaN(num)) {
                numbers.push(num);
                sum += num;
                count++;
            } else {
                console.log("Por favor, digite um número válido.");
            }
            askNumber();
        });
    } else {
        console.log(`A soma total dos números é: ${sum}`);
        rl.close();
    }
};

askNumber();