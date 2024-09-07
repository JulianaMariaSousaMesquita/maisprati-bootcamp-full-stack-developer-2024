// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let sum = 0;
let count = 0;
let average = 0;

const askNumber = () => {
    rl.question('Digite um número decimal: ', (answer) => {
        if (answer === '0') {
            average = sum / count;
            console.log(`A média aritmética dos números digitados é: ${average}`);
            rl.close();
        } else {
            numbers.push(parseFloat(answer));
            sum += numbers[count];
            count++;
            askNumber();
        }
    });
};

askNumber();