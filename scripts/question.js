const question = localStorage.getItem("selectedQuestion");
const nextBtn = document.querySelector(".next");
const submitBtn = document.querySelector(".submit");
console.log(submitBtn);

let currentQuestion = 0;
let questions;
let totalQuestions;
let wrongAnswerCount = 0;
let score = 0;
function getQuestion() {
  fetch(`../questions/${question}.json`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      questions = result;
      totalQuestions = result.length;
      generateTemplate(questions[currentQuestion]);
    });
}

// function generateQuestion() {
//   let question = questions[currentQuestion];
//   console.log(question);
// }
function checkCorrectAnswer(currentQuestion) {
  let selectedOption = document.querySelector('input[name="option"]:checked')
    .value;
  if (currentQuestion.answer === selectedOption) {
    score++;
  } else if (currentQuestion.answer !== selectedOption) {
    wrongAnswerCount++;
  }
}

nextBtn.addEventListener("click", () => {
  //   if (currentQuestion == totalQuestions - 1);
  //   currentQuestion += 1;
  //   //   generateQuestion();
  //   generateTemplate(questions[currentQuestion]);
  //   nextBtn.classList.add("hidden");
  //   submitBtn.classList.remove("hidden");
  // });
  checkCorrectAnswer(questions[currentQuestion]);
  currentQuestion += 1;
  if (currentQuestion === totalQuestions - 1) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  }
  generateTemplate(questions[currentQuestion]);
});

submitBtn.addEventListener("click", () => {
  checkCorrectAnswer(questions[currentQuestion]);
  localStorage.setItem(
    "results",
    JSON.stringify({ score: score, wrongAnswerCount: wrongAnswerCount })
  );

  // location.href = "./result.html";
  location.replace("./result.html");
});

function generateTemplate(question) {
  const template = `
        <p class="question">${question.question}</p>

        ${question.options
          .map((option) => {
            return `
                <label for="">
                <input type="radio" name="option" id="" value=
                ${option}
                class="option">${option}
                </label>
            `;
          })
          .join("")}`;
  document.querySelector(".questionContainer").innerHTML = template;
}

getQuestion();
// generateQuestion();
