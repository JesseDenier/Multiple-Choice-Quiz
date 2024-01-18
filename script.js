// Connect all references by ID between HTML and Javascript.
function getElementById(id) {
  return document.querySelector("#" + id);
}

// States the timer isn't active so future function can turn it on.
var isTimerActive = false;

// Defines score so future functions can affect it.
var points = 0;
score.textContent = points;

// Removes question from questionContainer and displays final score.
function quizEnd() {
  questionContainer.textContent = "Game Over: Your score is " + points + ".";
  answerContainer.style.display = "none";
  startQuizContainer.style.display = "inline-block";
  startQuiz.textContent = "Try again";
}

var seconds = 60;

// Removes 1 second from seconds every second, and displays that number in the timeLeft element in HTML. If timer is active, resets the timer.
function timer() {
  if (isTimerActive === true) {
    clearInterval(timerInterval);
  }
  seconds = 60;
  timerInterval = setInterval(function () {
    seconds--;
    timeLeft.textContent = seconds;
    // When seconds hits 0 it runs a new the endQuiz function and stops the timer function.
    if (seconds <= 0) {
      clearInterval(timerInterval);
      isTimerActive = false;
      quizEnd();
    }
  }, 1000);
  isTimerActive = true;
}

var i = 0;

// Populates questionContainer with a new question and answers until out of questions.
function newQuestion() {
  if (i < questions.length) {
    questionContainer.textContent = questions[i].question;

    answerContainerA.textContent = questions[i].answers[0].text;
    answerContainerB.textContent = questions[i].answers[1].text;
    answerContainerC.textContent = questions[i].answers[2].text;
    answerContainerD.textContent = questions[i].answers[3].text;
    // Attaches the correct boolean value to each answerContainer.
    answerContainerA.dataset.correct = questions[i].answers[0].correct;
    answerContainerB.dataset.correct = questions[i].answers[1].correct;
    answerContainerC.dataset.correct = questions[i].answers[2].correct;
    answerContainerD.dataset.correct = questions[i].answers[3].correct;

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
  points = 0;
  score.textContent = points;
  startQuizContainer.style.display = "none";
  answerContainer.style.display = "flex";
  newQuestion();
}

// Checks if answer is correct, and either adds +1 to score or -5 to timer.
function checkAnswer() {
  var selectedAnswer = event.target;
  if (selectedAnswer.dataset.correct === "true") {
    points++;
    score.textContent = points;
    setTimeout(function () {
      fadeOutCorrect();
    }, 0);
  } else {
    seconds -= 5;
    timeLeft.textContent = seconds;
    setTimeout(function () {
      fadeOutWrong();
    }, 0);
  }
  newQuestion();
}

// The fadeOut functions were initially created by ChatGPT and adapted by Jesse Denier.
// They create fixed HTML elements, drop the opacity, and delete them over .5 seconds.
function fadeOutCorrect(element) {
  var opacity = 1;
  var interval = 50;
  var duration = 500;

  // Create a new h2 element
  var correctMessage = document.createElement("h2");
  correctMessage.textContent = "Correct";
  correctMessage.id = "correctMessage";
  correctMessage.classList.add("checkMessage");

  // Create a new h2 element
  var plusOne = document.createElement("h2");
  plusOne.textContent = " +1";
  plusOne.id = "plusOne";

  // Append the new h2 elements to the document
  document.body.appendChild(correctMessage);
  document.body.appendChild(plusOne);

  var fadeOutInterval = setInterval(function () {
    if (opacity > 0) {
      opacity -= interval / duration;
      correctMessage.style.opacity = opacity;
      plusOne.style.opacity = opacity;
    } else {
      // Remove the h2 element from the document when fading is complete
      document.body.removeChild(correctMessage);
      document.body.removeChild(plusOne);
      clearInterval(fadeOutInterval);
    }
  }, interval);
}

function fadeOutWrong(element) {
  var opacity = 1;
  var interval = 50;
  var duration = 500;

  // Create a new h2 element
  var wrongMessage = document.createElement("h2");
  wrongMessage.textContent = "Wrong";
  wrongMessage.id = "wrongMessage";
  wrongMessage.classList.add("checkMessage");

  // Create a new h2 element
  var minusFive = document.createElement("h2");
  minusFive.textContent = "-5";
  minusFive.id = "minusFive";

  // Append the new h2 elements to the document
  document.body.appendChild(wrongMessage);
  document.body.appendChild(minusFive);

  var fadeOutInterval = setInterval(function () {
    if (opacity > 0) {
      opacity -= interval / duration;
      wrongMessage.style.opacity = opacity;
      minusFive.style.opacity = opacity;
    } else {
      // Remove the h2 element from the document when fading is complete
      document.body.removeChild(wrongMessage);
      document.body.removeChilde(minusFive);
      clearInterval(fadeOutInterval);
    }
  }, interval);
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
