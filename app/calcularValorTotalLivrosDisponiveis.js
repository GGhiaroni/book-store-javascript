function calcularValorTotalLivrosDisponiveis(livrosDisponiveis) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2); 
}