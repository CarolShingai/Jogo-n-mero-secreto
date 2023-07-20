function verificarChute(chute) {
  const numero = +chute

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>'
  }
  if (numeroForMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${lowerValue} e ${highestValue}</div>`
  }
  if (numero === secretNumber) {
    document.body.innerHTML = `
    <h2>Parabéns você acertou!</h2>
    <h3>O número secreto era ${secretNumber}</h3>

    <button id='play-again' class='btn-play'>Jogar novamente</button>`
  } else if (numero > secretNumber) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero) {
  return numero > highestValue || numero < lowerValue
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'play-again') {
    window.location.reload()
  }
})
