const booksByCategory = [
    { category: "Riqueza",
    books: [
    { title: "Os segredos da mente milionária",
    author: "T. Harv Eker", },
    { title: "O homem mais rico da Babilônia",
    author: "George S. Clason", },
    { title: "Pai rico, pai pobre",
    author: "Robert T. Kiyosaki e Sharon L. Lechter", }, ], },
    { category: "Inteligência Emocional",
    books: [
    { title: "Você é Insubstituível",
    author: "Augusto Cury", },
    { title: "Ansiedade – Como enfrentar o mal do século",
    author: "Augusto Cury", },
    { title: "Os 7 hábitos das pessoas altamente eficazes",
    author: "Stephen R. Covey" } ] } ];

let numCat = booksByCategory.length
console.log('Quantidade de categorias: ', numCat)

booksByCategory.forEach(cat => {
    let catAtual = cat.category;
    let livros = cat.books;
    let qtdLivros = livros.length;
    console.log('Quantidade de livros na categoria ' + catAtual + ': ', + qtdLivros)
})

let listaAutor = []

booksByCategory.forEach(cat => {
    let catAtual = cat.category;
    let livros = cat.books;
    livros.forEach(autor => {
        let autorAtual = autor.author
        if (!listaAutor.includes(autorAtual))
        { listaAutor.push(autorAtual) }
    })
})

console.log('Quantidade de autores: ', listaAutor.length) 

booksByCategory.forEach(cat => {
    let livros = cat.books;
    livros.forEach(livro => {
        if (livro.author === "Augusto Cury") {
            let nomeLivro = livro.title; 
            console.log('Livro de Augusto Cury: ',nomeLivro);
        }
    });
});