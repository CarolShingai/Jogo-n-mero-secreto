const elementoChute = document.getElementById('chute')

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'fr-Fr'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  const chute = e.results[0][0].transcript
  exibeChuteNATela(chute)
  verificarChute(chute)
}

function exibeChuteNATela(chute) {
  elementoChute.innerHTML = `
  <div>Vous avez dit:</div>
  <span id='box'>${chute}</span>
   `
}

recognition.addEventListener('end', () => recognition.start())
