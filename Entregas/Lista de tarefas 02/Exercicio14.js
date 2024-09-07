// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence

const empresa = {
    departamentos: [
        {
            nome: 'Tecnologia da informação',
            funcionarios: [
                {
                    nome: 'João Silva',
                    cpf: '123.456.789-00',
                    telefone: '(11) 98765-4321',
                    endereco: 'Rua A, 123, São Paulo, SP'
                },
                {
                    nome: 'Maria Oliveira',
                    cpf: '987.654.321-00',
                    telefone: '(11) 91234-5678',
                    endereco: 'Rua B, 456, São Paulo, SP'
                },
                {
                    nome: 'Carlos Souza',
                    cpf: '456.789.123-00',
                    telefone: '(11) 99876-5432',
                    endereco: 'Rua C, 789, São Paulo, SP'
                }
            ]
        },
        {
            nome: 'Recursos humanos',
            funcionarios: [
                {
                    nome: 'Ana Pereira',
                    cpf: '321.654.987-00',
                    telefone: '(21) 98765-4321',
                    endereco: 'Rua D, 321, Rio de Janeiro, RJ'
                },
                {
                    nome: 'Pedro Santos',
                    cpf: '654.321.987-00',
                    telefone: '(21) 91234-5678',
                    endereco: 'Rua E, 654, Rio de Janeiro, RJ'
                },
                {
                    nome: 'Lucia Fernandes',
                    cpf: '789.123.456-00',
                    telefone: '(21) 99876-5432',
                    endereco: 'Rua F, 987, Rio de Janeiro, RJ'
                }
            ]
        },
        {
            nome: 'Financeiro',
            funcionarios: [
                {
                    nome: 'Marcos Lima',
                    cpf: '147.258.369-00',
                    telefone: '(31) 98765-4321',
                    endereco: 'Rua G, 147, Belo Horizonte, MG'
                },
                {
                    nome: 'Juliana Costa',
                    cpf: '258.369.147-00',
                    telefone: '(31) 91234-5678',
                    endereco: 'Rua H, 258, Belo Horizonte, MG'
                },
                {
                    nome: 'Roberto Almeida',
                    cpf: '369.147.258-00',
                    telefone: '(31) 99876-5432',
                    endereco: 'Rua I, 369, Belo Horizonte, MG'
                }
            ]
        }
    ]
};

for (const departamento in empresa.departamentos) {
    console.log(`Departamento ${empresa.departamentos[departamento].nome}: `);

    for (const funcionario of empresa.departamentos[departamento].funcionarios) {
        console.log(`${funcionario.nome}`);
    }
}