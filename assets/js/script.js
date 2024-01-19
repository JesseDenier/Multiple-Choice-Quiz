// Instantly hides the quiz, quizEnd, and scores containers so they can be shown later.
$("#quiz").hide();
$("#quizEnd").hide();
$("#highScores").hide();

// States the timer isn't active so future function can turn it on, and sets standard time.
var isTimerActive = false;

// Chat GPT created function which will shuffle the selected array when called upon.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//Reloads the page.
function returnFunc() {
  location.reload();
}

// When returnBtn is clicked function reloadFunc begins.
$("#returnBtn").on("click", returnFunc);

// Hides all other HTML elements and displays scores. Also builds out list from local storage.
function displayScoresFunc() {
  $("#quizEnd").hide();
  $("#quiz").hide();
  $("#quizStart").hide();
  $("header").hide();
  $("footer").hide();
  $("#highScores").show();

  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  $("#highScoresList").empty();
  for (var i = 0; i < highScores.length; i++) {
    var userData = $("<li>").text(
      highScores[i].points +
        " by " +
        highScores[i].user +
        " on " +
        highScores[i].date
    );
    $("#highScoresList").append(userData);
  }
}

// When View High Scores is clicked function displayScoresFunc begins.
$("#displayScores").on("click", displayScoresFunc);

// Adds your score, name, and date to local storage. Then calls the display Scores Function.
function submitFunc(event) {
  event.preventDefault();
  var userName = $("input[id='userName']").val();
  var date = new Date().toLocaleString();
  if (!userName) {
    return;
  }
  var userData = {
    user: userName,
    points: points,
    date: date,
  };
  // Get existing high scores from local storage or initialize an empty array
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  // Add the current user's points to the high scores array
  highScores.push(userData);
  // Sort the high scores based on points in descending order
  highScores.sort(function (a, b) {
    return b.points - a.points;
  });
  // Save the updated high scores array back to local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));
  // Clear the input field
  $("input[id='userName']").val("");

  displayScoresFunc();
}

// Hides questions and answers. Reveals the quizEnd container. Starts the submition function on click of created button.
function quizEndFunc() {
  $("#quiz").hide();
  $("#quizEnd").show();
  $("#submitBtn").on("click", submitFunc);
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

// Resets the points, timer, and questions. Hides the preQuiz elements and shows the questions/answers. Finally triggers the timer, shuffle, and question functions.
function startQuizFunc() {
  points = 0;
  questionNum = 0;
  seconds = 60;
  $(".scoreNum").text(points);
  $("#quizStart").hide();
  $("#quiz").show();
  shuffleArray(questions);
  nextQuestionFunc();
  startTimerFunc();
}

// When startQuizBtn is clicked function startQuizFunc begins.
$("#startQuizBtn").on("click", startQuizFunc);

// The fadeOut functions were initially created by ChatGPT and adapted by Jesse Denier.
// They create fixed HTML elements, drop the opacity, and delete them over .5 seconds to give animated feedback.
function fadeOutCorrect() {
  var correctMessageEl = $("<h2>", {
    text: "Correct",
    id: "correctMessage",
    class: "checkMessage",
  });
  var plusOneEl = $("<h2>", {
    text: " +1",
    id: "plusOne",
  });
  $("body").append(correctMessageEl, plusOneEl);
  $("#correctMessage, #plusOne").fadeOut(500, function () {
    $("#correctMessage, #plusOne").remove();
  });
}

function fadeOutWrong() {
  var wrongMessageEl = $("<h2>", {
    text: "Wrong",
    id: "wrongMessage",
    class: "checkMessage",
  });
  var minusFiveEl = $("<h2>", {
    text: "-5",
    id: "minusFive",
  });
  $("body").append(wrongMessageEl, minusFiveEl);
  $("#wrongMessage, #minusFive").fadeOut(500, function () {
    $("#wrongMessage, #minusFive").remove();
  });
}

// Checks if answer is correct, adding +1 to score or -5 to timer, and triggering fadeOut functions. Then begins the Next Question Function.
function checkAnswerFunc(event) {
  if ($(event.target).data("correct")) {
    points++;
    $(".scoreNum").text(points);
    fadeOutCorrect();
  } else {
    seconds -= 5;
    $("#timeLeft").text(seconds);
    fadeOutWrong();
  }
  nextQuestionFunc();
}

// When any answer is clicked function checkAnswerFunc begins.
$("#answerContainer").on("click", "button", function (event) {
  checkAnswerFunc(event);
});
