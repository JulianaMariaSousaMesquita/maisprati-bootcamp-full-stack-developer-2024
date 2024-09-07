// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o número de maças compradas: ", (maasInput) => {
    const maas = parseInt(maasInput);
    let valorTotal = 0;

    if (maas < 12) {
        valorTotal = maas * 0.30;
    } else {
        valorTotal = maas * 0.25;
    }

    console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}.`);
    rl.close();
});
