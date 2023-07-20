const lowerValue = 1
const highestValue = 1000
const secretNumber = generateRandomNumber()

function generateRandomNumber() {
  return parseInt(Math.random() * highestValue + 1)
}

console.log(secretNumber)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = lowerValue
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = highestValue
