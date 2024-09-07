// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
    titulo: "Mulheres que Correm com os Lobos",
    autor: "Clarissa Pinkola Estés",
    anoPublicacao: 1992,
    genero: "Autoajuda"
};

if (!livro.hasOwnProperty("editora")) {
    livro.editora = "Rocco";
}

for (let propriedade in livro) {
    console.log(`${propriedade}: ${livro[propriedade]}`);
}