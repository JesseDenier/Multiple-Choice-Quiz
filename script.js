// Connect all references by ID between HTML and Javascript.
function getElementById(id) {
  return document.querySelector("#" + id);
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
      endQuiz();
    }
  }, 1000);
}

// Begins the timer when the startQuiz button is clicked.
startQuiz.addEventListener("click", timer);
