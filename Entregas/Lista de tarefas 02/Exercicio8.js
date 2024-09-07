// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

const filmes = [
    { titulo: 'The Matrix', diretor: 'The Wachowskis', anoLancamento: 1999 },
    { titulo: 'Tron', diretor: 'Steven Lisberger', anoLancamento: 1982 },
    { titulo: 'Hackers', diretor: 'Iain Softley', anoLancamento: 1995 },
    { titulo: 'WarGames', diretor: 'John Badham', anoLancamento: 1983 },
    { titulo: 'The Social Network', diretor: 'David Fincher', anoLancamento: 2010 },
    { titulo: 'Jobs', diretor: 'Joshua Michael Stern', anoLancamento: 2013 },
    { titulo: 'Pirates of Silicon Valley', diretor: 'Martyn Burke', anoLancamento: 1999 },
    { titulo: 'The Imitation Game', diretor: 'Morten Tyldum', anoLancamento: 2014 },
];

const titulosFilmes = [];

filmes.forEach((filme) => {
    titulosFilmes.push(filme.titulo);
});

console.log(titulosFilmes);

// console.log(filmes);