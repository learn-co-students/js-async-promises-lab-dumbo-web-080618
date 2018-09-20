const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

var appendQuestion = function (question) {
  document.querySelector('.question-container').innerText = question.questionText;
}

var askQuestionThen = function (time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(question);
    }, time);
  });
}

var removeQuestion = function () {
  return new Promise((resolve, reject) => {
    document.querySelector('.question-container').innerHTML = '';
  });
};

// var askQuestionThenRemoveQuestion = function (time) {
//
//   return new Promise((resolve, reject) => {
//     appendQuestion(question);
//     setTimeout(function () {
//       resolve(removeQuestion());
//     }, time);
//   });
//
// };

var trueAndFalseButtons = function () {
  return document.querySelectorAll('.true-false-list .btn')
};

// var toggleTrueAndFalseButtons = function () {
//   trueAndFalseButtons().forEach(function (btn) {
//     btn.classList.toggle('hide');
//   });
// }
//
// function displayQuestionOnClick(){
//   let btn = document.querySelector('a')
//   return btn.addEventListener('click', () => {
//     toggleTrueAndFalseButtons()
//     askQuestionThenRemoveQuestion(5000)
//   })
// }
