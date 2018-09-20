const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]
let question;
let qSection = document.getElementsByClassName("section question-container center-align")[0]
let trufal = [];
let ask = document.getElementsByClassName("waves-effect waves-light btn")[0]
// let questionContainer = document.getElementsByClassName("question-container");

// let qBox = document.createElement('h4');

function displayQuestionOnClick() {
  ask.addEventListener('click', function(e) {
  ask.remove()
  askQuestionThenRemoveQuestion(time)
  })
}

function appendQuestion(q) {
  qSection.innerHTML = q.questionText
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question)
  return new Promise ((resolve, reject)=> {
    setTimeout(function(){
      resolve(question) //OPTIONAL (QUESTIO)
    }, time)
  })
}

function removeQuestion () {
    qSection.innerHTML = ''
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time)
  .then(quest => removeQuestion())
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
