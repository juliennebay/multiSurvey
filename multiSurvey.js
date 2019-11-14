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
    { text: "question 2", answers: ["answer 21", "answer 22", "answer 23"] },
    { text: "question 3", answers: ["answer 31", "answer 32", "answer 33"] }
  ];
  //the index of questions (determines which questions/buttons will be shown)
  let index = 0;
  let quizAnswers = {}; // {0: 2, 1: 0, ...} the key is the index of the question.
  //the value is the index of the answer in the answer array
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
      radioElement.classList.add("radioElement");
      const label = document.createElement("label");
      //the e.target below is the input that just got clicked
      radioElement.addEventListener("click", e => {
        //the next element sibling is label (which shares the same parent as the input)
        const selectedAnswerText = e.target.nextElementSibling.textContent;
        const selectedAnswerScore = questions[index].answers.indexOf(
          selectedAnswerText
        );
        quizAnswers[index] = selectedAnswerScore;
      });
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
    const radioElements = document.querySelectorAll(".radioElement");
    if (Array.from(radioElements).some(e => e.checked)) {
      index++;
      if (index > 0 && index < questions.length - 1) {
        backButton.hidden = false;
      }

      if (index === questions.length - 1) {
        nextButton.hidden = true;
        submitButton.hidden = false;
      }
      drawQuestion();
    } else {
      alert("Just pick one");
    }
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

  submitButton.addEventListener("click", () => {
    const radioElements = document.querySelectorAll(".radioElement");
    if (Array.from(radioElements).some(e => e.checked)) {
      const entireQuiz = document.querySelector("#entireQuiz");
      entireQuiz.hidden = true;
      resultContainer.hidden = false;
      const score = Object.values(quizAnswers).reduce((a, b) => a + b, 0);
      document.querySelector(
        ".addedScore"
      ).textContent = `Your score is ${score}`;
    } else {
      alert("Just pick one");
    }
  });
}
document.addEventListener("DOMContentLoaded", loadScript);
