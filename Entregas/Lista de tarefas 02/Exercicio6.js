// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

const funcionarios = [
    { nome: 'João', cargo: 'Gerente', salario: 5000 },
    { nome: 'Maria', cargo: 'Analista', salario: 4000 },
    { nome: 'Pedro', cargo: 'Desenvolvedor', salario: 3000 },
    { nome: 'Ana', cargo: 'Estagiário', salario: 2000 },
];

for (const funcionario of funcionarios) {
    if (funcionario.salario > 4000) {
        console.log(funcionario);
    }
}