function verificarChute(chute) {
  const numero = +chute

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += '<div>Invalid value</div>'
  }
  if (numeroForMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div>Invalid value: speak a number between ${lowerValue} and ${highestValue}</div>`
  }
  if (numero === secretNumber) {
    document.body.className = 'corpo'
    document.body.innerHTML = `
    <h2>Congratulations, you nailet it!</h2>
    <h3>The secret number was ${secretNumber}</h3>

    <button id='play-again' class='btn-play'>Play again</button>`
  } else if (numero > secretNumber) {
    elementoChute.innerHTML += `
    <div>The secret number is smaller <i class="fa-solid fa-arrow-down"></i></div>`
  } else {
    elementoChute.innerHTML += `
    <div>The secret number is bigger <i class="fa-solid fa-arrow-up"></i></div>`
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
