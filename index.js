const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  let questionDiv = document.querySelector("div.question-container");
  let element = `${question.questionText}`;
  questionDiv.innerHTML = element;
}

function askQuestionThen(time){
  question = questions[0];
  return new Promise((resolve, reject) => {
    setTimeout(function(){ appendQuestion(question)
    }, time)
  })


}

function removeQuestion(){

  let questionDiv = document.querySelector("div.question-container");
  let element = "";
  questionDiv.innerHTML = element;

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
  let trueButton = document.getElementsByClassName("btn center-align  green lighten-2")[0]
  trueButton.innerHTML = "TRUE"
  let falseButton = document.getElementsByClassName("btn center-align red lighten-2")[0]
  falseButton.innerHTML = "FALSE"
  return [trueButton, falseButton]
}

function toggleTrueAndFalseButtons(){
  let trueButton = document.getElementsByClassName("btn center-align green lighten-2")[0]
  let falseButton = document.getElementsByClassName("btn center-align red lighten-2")[0]
  if( trueButton.classList.contains("hide")){
    trueButton.classList.remove("hide")
    falseButton.classList.remove("hide")
  }
  else{
    trueButton.classList.add("hide")
    falseButton.classList.add("hide")
  }
}

function displayQuestionOnClick(){

}
