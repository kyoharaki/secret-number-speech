const menorValor      = 1;
const maiorValor      = 1000;
const menorValorQuery = document.getElementById('menor-valor');
const maiorValorQuery = document.getElementById('maior-valor');
const numeroSecreto   = gerarNUmeroAleatorio();

menorValorQuery.innerHTML = menorValor;
maiorValorQuery.innerHTML = maiorValor;

function gerarNUmeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}