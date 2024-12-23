const btnLivrosDisponiveis = document.getElementById("btnLivrosDisponiveis");

btnLivrosDisponiveis.addEventListener("click", filtrarLivrosDisponiveis);

function filtrarLivrosDisponiveis() {
    const livrosDisponiveis = livros.filter(livro => livro.quantidade > 0);
    inserirLivrosNoHtml(livrosDisponiveis);
}