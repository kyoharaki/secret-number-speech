let tentativas = 3;

chuteQuery.innerHTML +=
        `<div>Tentativa: ${tentativas}</div>`;

function verificarChute(chute){
    chuteQuery.innerHTML +=
        `<div>Tentativa: ${tentativas}</div>`;
    const numero = +chute //converte o string chute para número

    if(tentativas === 0){
        document.body.classList.toggle("game-over");
        document.body.innerHTML = `
            <h2>Você usou todas as suas tentativas!</h2>
            <h3>O número secreto era ${numeroSecreto}!</h3>

            <button id="jogar-novamente" class="botao-jogar">Jogar Novamente</button>
        `
        return;
    }
    if(chuteIsNumber(numero)){
        chuteQuery.innerHTML += '<div>Valor inválido.</div>';
        return;
    }
    if(chuteIsInRange(numero)){
        chuteQuery.innerHTML +=
        `<div>Valor precisa estar entre ${menorValor} e ${maiorValor}.</div>`;
        return;
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}!</h3>

            <button id="jogar-novamente" class="botao-jogar">Jogar Novamente</button>
        `
    } else if (numero < numeroSecreto){
        tentativas -= 1;
        chuteQuery.innerHTML +=
        `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
    } else {
        tentativas -= 1;
        chuteQuery.innerHTML +=
        `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
    }
}

function chuteIsNumber(numero) {
    return Number.isNaN(numero);
}

function chuteIsInRange(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', evento => {
    if(evento.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});