const btnOrdenar = document.getElementById("btnOrdenarPorPreco");

btnOrdenar.addEventListener("click", ordernarLivrosPorPreco);

function ordernarLivrosPorPreco() {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    inserirLivrosNoHtml(livrosOrdenados);
}