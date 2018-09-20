const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  let container = document.querySelector(".question-container")
  container.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  return new Promise((resolve,reject) => {
    setTimeout(function(){
    }, time)
  })
}

function removeQuestion(){
  return new Promise((resolve,reject) => {
    let container = document.querySelector('.question-container')
    container.innerHTML = ''
  })
}

function askQuestionThenRemoveQuestion(time) {
  appendQuestion(question)
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  return x = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  let x = document.querySelector('.true-false-list').querySelectorAll('.btn')
  x.forEach(function(func) {
    func.classList.toggle("hide")
  })
}

function displayQuestionOnClick(){
  let btn = document.querySelector('a')
  console.log(btn)
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}


//
