const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  let container = document.getElementsByClassName("question-container")[0]
  container.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(question)
    }, time)
  })
}

function removeQuestion(question) {
  return new Promise(function(){
    let container = document.getElementsByClassName("question-container")[0]
    container.innerHTML = ''
  })
}

function askQuestionThenRemoveQuestion() {
  appendQuestion(question)
  toggleTrueAndFalseButtons()
  // console.log("clicked")
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(question)
    }, 10000)
  })
}

function trueAndFalseButtons() {
  let btns = document.querySelector(".true-false-list")
  return btns.querySelectorAll(".btn")
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}

function displayQuestionOnClick() {
  // trueAndFalseButtons().onClick = function() {
  //   alert("woo")
  // }
  let btn = document.querySelector(".waves-effect.waves-light.btn")
  btn.addEventListener("click", askQuestionThenRemoveQuestion)
}
