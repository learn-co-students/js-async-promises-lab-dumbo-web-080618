const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let questionContainer = document.querySelector('.question-container');

let appendQuestion = (question) => {
  questionContainer.innerText = question.questionText;
}

let askQuestionThen = (time) => {
  question = questions[0];
  appendQuestion(question);
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(question);
    }, time)
  })
}

let removeQuestion = () => {
  return new Promise(() => {
    questionContainer.innerHTML = '';
  })
  toggleTrueAndFalseButtons();
}

let askQuestionThenRemoveQuestion = (time) => {
  return askQuestionThen(time).then(removeQuestion);
}

let trueAndFalseButtons = () => {
  let btns = document.querySelector('.true-false-list').querySelectorAll('.btn');
  btns[0].innerText = 'TRUE';
  btns[1].innerText = 'FALSE';
  return btns;
}

let toggleTrueAndFalseButtons = () => {
  trueAndFalseButtons().forEach((btn) => {
    return btn.classList.toggle('hide');
  })
}

let displayQuestionOnClick = () => {
  let btn = document.querySelector('a');
  return btn.addEventListener('click', () => {
    askQuestionThenRemoveQuestion(1000);
    toggleTrueAndFalseButtons;
  })
}
