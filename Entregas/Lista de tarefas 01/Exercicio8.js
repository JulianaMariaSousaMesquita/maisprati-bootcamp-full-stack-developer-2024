// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro valor: ", (valor1Input) => {
    const valor1 = parseFloat(valor1Input);
    rl.question("Digite o segundo valor: ", (valor2Input) => {
        const valor2 = parseFloat(valor2Input);

        if (valor1 < valor2) {
            console.log(`${valor1} - ${valor2}`);
        } else {
            console.log(`${valor2} - ${valor1}`);
        }
        rl.close();
    });
});

