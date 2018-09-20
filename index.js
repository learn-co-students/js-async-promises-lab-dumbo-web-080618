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

function askQuestionThen(time){
  question = questions[0]
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      appendQuestion(question)
    }, time)
  })
}

function removeQuestion(){
  let container = document.querySelector(".question-container")
  return new Promise((resolve, reject) => {
    container.innerHTML = ""
  })

}

function askQuestionThenRemoveQuestion(time){
  return new Promise((resolve, reject) => {
    appendQuestion(question)
    setTimeout(function(){
      resolve(removeQuestion())
    }, time)
  })
}

function trueAndFalseButtons(){
  return btns = document.querySelector(".true-false-list").querySelectorAll(".btn")
}

function toggleTrueAndFalseButtons(){
  let button = trueAndFalseButtons()
  if(button[0].classList.contains("hide")){
    button[0].classList.remove("hide")
    button[1].classList.remove("hide")
  }
  else{
    button[0].classList.add("hide")
    button[1].classList.add("hide")
  }
}

let ask_button = document.querySelector(".waves-effect")
ask_button.addEventListener('click', (e) => {
  displayQuestionOnClick()
})

function displayQuestionOnClick(){
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(5000)
  new Promise((resolve, reject) =>{
    setTimeout(function(){
      resolve(toggleTrueAndFalseButtons())
    }, 5000)
  })
}
