const chuteQuery = document.getElementById('chute');


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => recognition.start());

function onSpeak(evento){
    let chute = evento.results[0][0].transcript;
    exibirChute(chute);
    verificarChute(chute);
}

function exibirChute(chute){
    chuteQuery.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
    `
}