function verificarChute(chute) {
  const numero = +chute

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valeur invalide</div>'
  }
  if (numeroForMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div>Valeur invalide: parler un nombre entre ${lowerValue} et ${highestValue}</div>`
  }
  if (numero === secretNumber) {
    document.body.className = 'corpo'
    document.body.innerHTML = `
    <h2>Félicitations, vous avez réussi!</h2>
    <h3>Le numéro secret était ${secretNumber}</h3>

    <button id='play-again' class='btn-play'>Rejouer</button>`
  } else if (numero > secretNumber) {
    elementoChute.innerHTML += `
    <div>Le numéro secret est inférieur à <i class="fa-solid fa-arrow-down"></i></div>`
  } else {
    elementoChute.innerHTML += `
    <div>Le numéro secret est supérieur à <i class="fa-solid fa-arrow-up"></i></div>`
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
