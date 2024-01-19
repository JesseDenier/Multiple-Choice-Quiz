// Connect all references by ID between HTML and Javascript.
function getElementById(id) {
  return document.querySelector("#" + id);
}

// States the timer isn't active so future function can turn it on, and sets standard time.
var isTimerActive = false;

// Defines score so future functions can affect it.
var points = 0;
score.textContent = points;

// Defines initials before quizEnd or submit functions so it's dynamic for both.
var initials = document.createElement("input");

// Takes the initials, score, and date/time from local storage and adds it to high scores list.
function addScore() {}

// Adds your initials, score, and the date/time to local storage.
// TODO: Make it take you to high scores
function submitFunc() {
  var userPoints = {
    user: initials.value,
    points: points,
    date: new Date().toLocaleString(),
  };
  localStorage.setItem("userPoints", JSON.stringify(userPoints));
  addScore();
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
      document.body.removeChild(minusFive);
      clearInterval(fadeOutInterval);
    }
  }, interval);
}

// Checks if answer is correct, and either adds +1 to score or -5 to timer. Then restarts the NextQuestionFunc function.
function checkAnswerFunc() {
  if ($(event.target).data("correct")) {
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
  nextQuestionFunc();
}

// When any answer is clicked function checkAnswerFunc begins.
$("#answerContainer").on("click", "button", function () {
  checkAnswerFunc();
});

// Hides questions and answers. Creates and appends a final score message, initials input, and submit button. Starts the sumbition function on click of created button.
function quizEndFunc() {
  $("#questionContainer").hide();
  $("#answerContainer").hide();
  var scoreMessage = $("<h3>").text("Game Over: Your score is " + points + "!");
  var initialsMessage = $("<h3>").text("Enter Initials: ");
  var initialsInput = $("<input>").attr("id", "initials");
  var submitBtn = $("<button>").text("Submit");
  $("#main").append(scoreMessage, initialsMessage, initialsInput, submitBtn);
  submitBtn.on("click", submitFunc);
}

// Brings up the next question and answers, and assigns correct/incorrect values to the answers. When out of questions triggers the quiz end function.
function nextQuestionFunc() {
  if (questionNum < questions.length) {
    $("#questionContainer").text(questions[questionNum].question);
    $("#answerContainerA")
      .text(questions[questionNum].answers[0].text)
      .attr("data-correct", questions[questionNum].answers[0].correct);
    $("#answerContainerB")
      .text(questions[questionNum].answers[1].text)
      .attr("data-correct", questions[questionNum].answers[1].correct);
    $("#answerContainerC")
      .text(questions[questionNum].answers[2].text)
      .attr("data-correct", questions[questionNum].answers[2].correct);
    $("#answerContainerD")
      .text(questions[questionNum].answers[3].text)
      .attr("data-correct", questions[questionNum].answers[3].correct);
    questionNum++;
  } else {
    quizEndFunc();
    clearInterval(timerInterval);
    isTimerActive = false;
  }
}

// If timer is on, resets timer. Counts down from 60, displaying it in timeLeft. Triggers the quiz end function if timer runs out.
function startTimerFunc() {
  if (isTimerActive) {
    clearInterval(timerInterval);
  }
  timerInterval = setInterval(function () {
    seconds--;
    $("#timeLeft").text(seconds);
    if (seconds <= 0) {
      clearInterval(timerInterval);
      isTimerActive = false;
      quizEndFunc();
    }
  }, 1000);
  isTimerActive = true;
}

// Resets the points, timer, and questions. Hides the preQuiz elements and shows the questions/answers. Finally triggers the timer and question functions.
function startQuizFunc() {
  points = 0;
  questionNum = 0;
  seconds = 60;
  $("#score").text(points);
  $("#startQuizContainer").hide();
  $("#answerContainer").show();
  nextQuestionFunc();
  startTimerFunc();
}

// When startQuizBtn is clicked function startQuizFunc begins.
$("#startQuizBtn").on("click", startQuizFunc);
