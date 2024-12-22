let livros = [];

const endpointApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const res = await fetch(endpointApi);
    livros = await res.json();
    const livrosComDesconto = aplicarDesconto(livros);
    inserirLivrosNoHtml(livrosComDesconto);
}