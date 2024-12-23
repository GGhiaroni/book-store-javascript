const btnLivrosDisponiveis = document.getElementById("btnLivrosDisponiveis");

btnLivrosDisponiveis.addEventListener("click", filtrarLivrosDisponiveis);

function filtrarLivrosDisponiveis() {
    const livrosDisponiveis = livros.filter(livro => livro.quantidade > 0);
    inserirLivrosNoHtml(livrosDisponiveis);
    const valorTotalDosLivros = calcularValorTotalLivrosDisponiveis(livrosDisponiveis);
    informacaoValorTotalDosLivros.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">R$${valorTotalDosLivros}</span></p>
        </div>
    `;
}