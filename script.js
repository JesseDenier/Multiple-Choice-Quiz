// Connect all references by ID between HTML and Javascript.
function getElementById(id) {
  return document.querySelector("#" + id);
}

// Removes question from questionContainer and displays final score.
// TODO: Replace X with score.
function quizEnd() {
  questionContainer.textContent = "Game Over: Your score is X.";
}

// Sets seconds to 60.
var seconds = 60;

// Removes 1 second from seconds every second, and displays that number in the timeLeft element in HTML.
function timer() {
  var timerInterval = setInterval(function () {
    seconds--;
    timeLeft.textContent = "Time: " + seconds;
    // When seconds hits 0 it runs a new the endQuiz function and stops the timer function.
    if (seconds === 0) {
      clearInterval(timerInterval);
      quizEnd();
    }
  }, 1000);
}

// Builds an array of questions which can be dynamically drawn from.
var questions = [
  "What does HTML stand for?",
  "What does CSS stand for?",
  "What does HTML do?",
  "What does CSS do?",
  "What does javascript do?",
];

var i = 0;

// Populates questionContainer with a new question until out of questions.
function newQuestion() {
  if (i < questions.length) {
    questionContainer.textContent = questions[i];
    i++;
  } else {
    quizEnd();
  }
}

// Begins the timer when the startQuiz button is clicked.
startQuiz.addEventListener("click", timer);

// Displays a new question when the startQuiz button is clicked.
startQuiz.addEventListener("click", newQuestion);
