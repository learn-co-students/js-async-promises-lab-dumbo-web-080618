const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let trufal = [];
let ask = document.getElementsByClassName("waves-effect waves-light btn")[0]

function appendQuestion(question) {
  let questionDiv = document.querySelector("div.question-container");
  let inquiry = `${question.questionText}`;
  questionDiv.innerHTML = inquiry;
}

function askQuestionThen(time){
  question = questions[0];
  return new Promise((resolve, reject) => {
    setTimeout(function(){ appendQuestion(question)
    }, time)
  })
}

function removeQuestion(question) {
  let questionDiv = document.querySelector('div.question-container')
  let inquiry = ''
  questionDiv.innerText = inquiry
}

function askQuestionThenRemoveQuestion () {
  return new Promise ((resolve, reject) => {
    appendQuestion(question)
    setTimeout(function(){
      resolve(removeQuestion)}
      , 10000)
    })
  }

  function trueAndFalseButtons () {


      let green = document.getElementsByClassName("green")[0];
      green.innerHTML = "TRUE"

      let red = document.getElementsByClassName("red")[0];
      red.innerHTML = "FALSE"
      trufal.push(green, red)

      return trufal
  }

  function toggleTrueAndFalseButtons() {
        trufal[0].classList.toggle('hide')
        trufal[1].classList.toggle('hide')

  }

  function displayQuestionOnClick() {
  ask.addEventListener('click', function(e) {
  ask.remove()
  askQuestionThenRemoveQuestion(time)
  })
}
