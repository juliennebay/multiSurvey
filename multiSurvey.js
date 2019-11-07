function loadScript() {
  //result container
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

  //questions and answers stored in an array of objects
  const questions = [
    { text: "question 1", answers: ["answer 11", "answer 12", "answer 13"] },
    { text: "question 2", answers: ["answer 21", "answer 22"] },
    { text: "question 3", answers: ["answer 31", "answer 32"] }
  ];
  //this will tally up the score
  let index = 0;
  function drawQuestion() {
    const question = questions[index];
    const questionContainer = document.querySelector(".question");
    //clear old questions
    Array.from(questionContainer.children).forEach(child => child.remove());
    //setting text Content in div without adding paragraphs
    questionContainer.textContent = question.text;
    const answerContainer = document.querySelector(".answers");
    //clear old answers
    Array.from(answerContainer.children).forEach(child => child.remove());
    const answers = question.answers;
    drawAnswers(answers);
  }
  function drawAnswers(answers) {
    const answerContainer = document.querySelector(".answers");
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

  startButton.addEventListener("click", () => {
    startButton.hidden = true;
    nextButton.hidden = false;
    drawQuestion();
  });

  nextButton.addEventListener("click", () => {
    index++;
    if (index > 0 && index < questions.length - 1) {
      backButton.hidden = false;
    }

    if (index === questions.length - 1) {
      nextButton.hidden = true;
      submitButton.hidden = false;
    }
    drawQuestion();
  });

  backButton.addEventListener("click", () => {
    index--;
    if (index === 0) {
      backButton.hidden = true;
      submitButton.hidden = true;
      nextButton.hidden = false;
    }
    if (index > 0 && index < questions.length - 1) {
      backButton.hidden = false;
      submitButton.hidden = true;
      nextButton.hidden = false;
    }

    if (index === questions.length - 1) {
      nextButton.hidden = true;
      backButton.hidden = false;
      submitButton.hidden = false;
    }
    drawQuestion();
  });
}
document.addEventListener("DOMContentLoaded", loadScript);
