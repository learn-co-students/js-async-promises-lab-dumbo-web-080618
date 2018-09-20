const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let container = document.querySelector(".question-container")
let p = document.querySelector(".question-container p")


function appendQuestion() {
  container.innerHTML =  `${questions[0].questionText}`

}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  return new Promise(function(resolve) {
    container.innerHTML =  ""
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
let button =  document.querySelector(".true-false-list").querySelectorAll(".btn")
button[0].innerHTML = "TRUE"
button[1].innerHTML = "FALSE"
return button
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(button) {
    button.classList.toggle("hide")
  })
}

function displayQuestionOnClick() {
  
}
