// Connect all references by ID between HTML and Javascript.
function getElementById(id) {
  return document.querySelector("#" + id);
}

// Removes question from questionContainer and displays final score.
// TODO: Replace X with score.
function quizEnd() {
  questionContainer.textContent = "Game Over: Your score is X.";
  answerContainer.style.display = "none";
  startQuiz.style.display = "inline-block";
}

var timerInterval;
var isTimerActive = false;

// Removes 1 second from seconds every second, and displays that number in the timeLeft element in HTML. If timer is active, resets the timer.
function timer() {
  if (isTimerActive === true) {
    clearInterval(timerInterval);
  }
  var seconds = 60;
  timerInterval = setInterval(function () {
    seconds--;
    timeLeft.textContent = seconds;
    // When seconds hits 0 it runs a new the endQuiz function and stops the timer function.
    if (seconds === 0) {
      clearInterval(timerInterval);
      isTimerActive = false;
      quizEnd();
    }
  }, 1000);
  isTimerActive = true;
}

// Builds an array of questions which can be dynamically drawn from.
var questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hyperlink and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheet", correct: true },
      { text: "Computer Style Sheet", correct: false },
      { text: "Colorful Style Sheet", correct: false },
      { text: "Creative Style Sheet", correct: false },
    ],
  },
  {
    question: "What does HTML do?",
    answers: [
      { text: "Defines the structure of a web page", correct: true },
      { text: "Styles the content of a web page", correct: false },
      { text: "Handles user interactions on a web page", correct: false },
      { text: "Manages server-side operations", correct: false },
    ],
  },
  {
    question: "What does CSS do?",
    answers: [
      { text: "Styles the presentation of a web page", correct: true },
      { text: "Defines the behavior of a web page", correct: false },
      { text: "Manages server-side scripting", correct: false },
      { text: "Handles database operations", correct: false },
    ],
  },
  {
    question: "What does JavaScript do?",
    answers: [
      { text: "Adds interactivity to a web page", correct: true },
      { text: "Defines the layout of a web page", correct: false },
      { text: "Manages server-side logic", correct: false },
      { text: "Handles document structure", correct: false },
    ],
  },
];

var i = 0;

// Populates questionContainer with a new question until out of questions.
// TODO: Need to add the correct boolean element to each answer.
function newQuestion() {
  if (i < questions.length) {
    questionContainer.textContent = questions[i].question;
    answerContainerA.textContent = questions[i].answers[0].text;
    answerContainerB.textContent = questions[i].answers[1].text;
    answerContainerC.textContent = questions[i].answers[2].text;
    answerContainerD.textContent = questions[i].answers[3].text;

    i++;
  } else {
    quizEnd();
    clearInterval(timerInterval);
    isTimerActive = false;
  }
}

// Resets and begins the quiz.
function firstQuestion() {
  i = 0;
  console.log(i);
  startQuiz.style.display = "none";
  answerContainer.style.display = "flex";
  newQuestion();
}

// Checks if answer is correct, and either adds +1 to score or -5 to timer.
function checkAnswer() {
  // TODO: Add a function that checks if an answer is correct.
  newQuestion();
}

// checks the answer and displays a new question when an answer is clicked.
answerContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    checkAnswer();
  }
});

// Begins the timer when the startQuiz button is clicked.
startQuiz.addEventListener("click", timer);

// Displays a new question when the startQuiz button is clicked.
startQuiz.addEventListener("click", firstQuestion);
