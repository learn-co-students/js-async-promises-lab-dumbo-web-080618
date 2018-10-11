const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

appendQuestion = () => {
  let container = document.querySelector('.question-container')
  // let li = document.createElement("li")
  // container.append(li)
  // debugger
  let questionContainer = container.innerHTML = questions[0].questionText
}

askQuestionThen = (time) => {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(question), time )
  })
}

removeQuestion = () => {
  let container = document.querySelector('.question-container').innerHTML = ''
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(container))
  })
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

trueAndFalseButtons = () => {
  return  buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

toggleTrueAndFalseButtons = () =>  trueAndFalseButtons().forEach((btn) =>  btn.classList.toggle("hide"))

function checkQuestion(question, answer){
  question.questionAnswer == answer
}

let displayQuestionOnClick = () => {
  let btn = document.querySelector('a');
  return btn.addEventListener('click', () => {
    askQuestionThenRemoveQuestion(1000);
    toggleTrueAndFalseButtons;
  })}
