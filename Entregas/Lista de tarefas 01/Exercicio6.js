// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor do lado A: ", (ladoAInput) => {
    const ladoA = parseFloat(ladoAInput);
    rl.question("Digite o valor do lado B: ", (ladoBInput) => {
        const ladoB = parseFloat(ladoBInput);
        rl.question("Digite o valor do lado C: ", (ladoCInput) => {
            const ladoC = parseFloat(ladoCInput);

            if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
                if (ladoA === ladoB && ladoB === ladoC) {
                    console.log("Triângulo equilátero");
                } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
                    console.log("Triângulo isósceles");
                } else {
                    console.log("Triângulo escaleno");
                }
            } else {
                console.log("Os lados fornecidos não formam um triângulo");
            }
            rl.close();
        });
    });
});