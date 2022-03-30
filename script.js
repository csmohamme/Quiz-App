const quizData = [
  {
    question: "Who created JavaScript ?",
    a: "Mitchell Baker",
    b: "Chris Beard",
    c: "Brendan Eich",
    d: "Yan Zhu",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "Python",
    c: "C",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "what does html stand for ?",
    a: "Structured Query Language",
    b: "Hypertext Markup Language",
    c: "standard markup language",
    d: "Cascading Style Sheets",
    correct: "b",
  },
  {
    question: "what year was javaScript launched ?",
    a: "1999",
    b: "2000",
    c: "1995",
    d: "1997",
    correct: "c",
  },
];
const quizEl = document.getElementById("qiz");
const answersEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_textEl = document.getElementById("a_text");
const b_textEl = document.getElementById("b_text");
const c_textEl = document.getElementById("c_text");
const d_textEl = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

// let answerEl = undefined;
loadQuiz();

function loadQuiz() {
  deSelectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_textEl.innerHTML = currentQuizData.a;
  b_textEl.innerHTML = currentQuizData.b;
  c_textEl.innerHTML = currentQuizData.c;
  d_textEl.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelectAnswers() {
  answersEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // to show results
      quizEl.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2> <button onClick="location.reload()">Refresh</button>`;
    }
  }
});
