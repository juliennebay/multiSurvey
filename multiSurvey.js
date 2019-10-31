function loadScript() {
  //quiz and result containers

  const resultContainer = document.querySelector("#results");
  resultContainer.hidden = true;
  //buttons
  const startButton = document.querySelector("#start");
  const backButton = document.querySelector("#back");
  const nextButton = document.querySelector("#next");
  const submitButton = document.querySelector("#submit");
  backButton.hidden = true;
  nextButton.hidden = true;
  submitButton.hidden = true;

  const questions = [
    { text: "question 1", answers: ["answer 11", "answer 12", "answer 13"] },
    { text: "question 2", answers: ["answer 21", "answer 22"] },
    { text: "question 3", answers: ["answer 31"] }
  ];

  let index = 0;

  function startQuiz() {
    startButton.hidden = true;
    nextButton.hidden = false;
    const question = questions[index];
    const questionContainer = document.querySelector(".question");
    questionContainer.textContent = question.text;
    const answerContainer = document.querySelector(".answers");
    const answers = question.answers;
    //this (below) draws the answers
    answers.forEach(a => {
      const container = document.createElement("div");
      const radioElement = document.createElement("input");
      radioElement.setAttribute("type", "radio");
      radioElement.setAttribute("name", "answer");
      const label = document.createElement("label");
      label.textContent = a;
      container.appendChild(radioElement);
      container.appendChild(label);
      answerContainer.appendChild(container);
    });
  }
  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", () => {
    index++;
    startQuiz();
  });
}
document.addEventListener("DOMContentLoaded", loadScript);
