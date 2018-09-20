const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

document.addEventListener('DOMContentLoaded', displayQuestionOnClick);

function displayQuestionOnClick(){
  let askButton = document.querySelector('a.waves-light')
  return askButton.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000);
  });
};

function trueAndFalseButtons(){
  let buttons = document.querySelectorAll('div.btn');
  return buttons;
};

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(element){
    element.classList.toggle('hide');
  });
};

function askQuestionThen(time){
  question = questions[0];
  appendQuestion(question);
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question);
    }, time);
  });
};

function appendQuestion(question){
    let container = document.querySelector('.question-container');
    container.innerText = questions[0]['questionText'];
};

function removeQuestion(){
 return new Promise(function(){
   let container = document.querySelector('.question-container');
    container.innerText = '';
    //toggleTrueAndFalseButtons();
  });
};

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion);
};
