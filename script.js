// Connect all references by ID between HTML and Javascript.
function getElementById(id) {
  return document.querySelector("#" + id);
}

// TODO: Build this function out so it displays your score.
function endQuiz() {}

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
      endQuiz();
    }
  }, 1000);
}

var questions = ["a", "b", "c", "d", "e", "f"];

var i = 0;

//TODO: Build this function out so it wipes everything in questionContainer and populates it with a new question.
function newQuestion() {
  if (i < questions.length) {
    questionContainer.textContent = questions[i];
    i++;
  } else {
    questionContainer.textContent = "Quiz Complete";
  }
}

// Begins the timer when the startQuiz button is clicked.
startQuiz.addEventListener("click", timer);

// Displays a question when the startQuiz button is clicked.
startQuiz.addEventListener("click", newQuestion);
