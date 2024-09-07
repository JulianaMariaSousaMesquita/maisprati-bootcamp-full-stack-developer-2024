// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o peso em kg: ", (pesoInput) => {
    const peso = parseFloat(pesoInput);
    rl.question("Digite a altura em metros: ", (alturaInput) => {
        const altura = parseFloat(alturaInput);

        const imc = peso / (altura * altura);

        let categoria = "";
        if (imc < 18.5) {
            categoria = "Baixo peso";
        } else if (imc < 25) {
            categoria = "Peso normal";
        } else if (imc < 30) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obesidade";
        }

        console.log(`O seu IMC é ${imc.toFixed(2)} e a categoria de peso é ${categoria}.`);
        rl.close();
    });
});