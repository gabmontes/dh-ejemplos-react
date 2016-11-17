var questions = [
  {
    text: '¿Cuál es la dirección de DH?',
    options: ['Monroe 860', 'Libertador 1124'],
    correct: 0
  },
  {
    text: '¿Cuándo trae Brian las pizzas?',
    options: ['mañana', 'pasado', 'nunca'],
    correct: 1
  }
]
var score = 0
var actual = 0

function mostrarOpciones(opciones, correct) {
  var elemDiv = document.querySelector('#options')
  elemDiv.innerHTML = ''

  opciones.forEach(function (opcion, i) {
    var elemP = document.createElement('p')
    elemP.textContent = opcion

    var elemButton = document.createElement('button')
    elemButton.textContent = 'Select Answer'
    elemButton.className = 'btn--default'
    elemButton.addEventListener('click', function () {
      if (i === correct) {
        score += 1
      }
      actual += 1
      jugar()
    })

    var elemDiv = document.querySelector('#options')
    elemDiv.appendChild(elemP)
    elemDiv.appendChild(elemButton)
  })
}

function mostrarPregunta(pos) {
  var question = questions[pos]
  document.querySelector("#question").innerHTML = question.text

  document.querySelector("#progress").innerHTML = 'Question '
    + (pos + 1) + ' of ' + questions.length

  mostrarOpciones(question.options, question.correct)
}

function mostrarGameOver() {
  document.querySelector("#quiz").style.display = 'none'
  document.querySelector("#final-score").textContent = score
  document.querySelector("#over").style.display = 'block'
}

function jugar() {
  if (actual === questions.length) {
    mostrarGameOver()
  } else {
    mostrarPregunta(actual)
  }
}

jugar()
