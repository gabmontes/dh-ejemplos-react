var state = {
  questions: [
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
  ],
  score: 0,
  actual: 0
}

function processAnswer(isCorrect) {
  console.log(isCorrect)
}

function stateToHTML({ questions, score, actual }) {
  var question = questions[actual]
  return `
    <div class="centered grid__col--8">
      <h1>Awesome Quiz</h1>
      <h2 class="headline-secondary--grouped">${question.text}</h2>
      <div>
        ${question.options.map(function (option, i) {
            return `
              <p>${option}</p>
              <button
                class="btn--default"
                onclick="processAnswer(${i === question.correct})">
                Select Answer
              </button>
            `
          }).join('')}
      </div>
      <footer>
        <p>Question ${actual + 1} of ${questions.length}</p>
      </footer>
    </div>
  `
}

document.querySelector('#root').innerHTML = stateToHTML(state)
