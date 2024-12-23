const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    const livrosFiltrados = livros.filter(livro => livro.categoria === categoria);
    inserirLivrosNoHtml(livrosFiltrados);
}