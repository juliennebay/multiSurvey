function loadScript() {
  //quiz and result containers
  const quizContainer = document.querySelector("#quiz");
  const resultContainer = document.querySelector("#results");
  quizContainer.hidden = true;
  resultContainer.hidden = true;
  //buttons
  const startButton = document.querySelector("#start");
  const backButton = document.querySelector("#back");
  const nextButton = document.querySelector("#next");
  const submitButton = document.querySelector("#submit");
  backButton.hidden = true;
  nextButton.hidden = true;
  submitButton.hidden = true;

  const myQuestions = [
    {
      question: "The first question",
      answers: {
        a: 0,
        b: 1,
        c: 2,
        d: 3
      }
    },
    {
      question: "The second question",
      answers: {
        a: 0,
        b: 1,
        c: 2,
        d: 3
      }
    },
    {
      question: "The third question",
      answers: {
        a: 0,
        b: 1,
        c: 2,
        d: 3
      }
    }
  ];
  function startQuiz() {
    quizContainer.hidden = false;
    startButton.hidden = true;
    nextButton.hidden = false;
  }
  startButton.addEventListener("click", startQuiz);
}
document.addEventListener("DOMContentLoaded", loadScript);
