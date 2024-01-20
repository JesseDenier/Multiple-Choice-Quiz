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
function reload() {
  location.reload();
}

// When Return button is clicked trigger the function reload.
$("#returnBtn").on("click", reload);

// Parces out highScores in local storage and adds each entry as a list item to highScoresList.
function localStorageToList() {
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

// Hides all other HTML elements and displays scores container. Triggers the function localStoragetoList.
function displayScores() {
  $("#quizEnd").hide();
  $("#quiz").hide();
  $("#quizStart").hide();
  $("header").hide();
  $("footer").hide();
  $("#highScores").show();
  localStorageToList();
}

// When View High Scores button is clicked trigger the function displayScores.
$("#displayScores").on("click", displayScores);

// Adds your score, name, and date to local storage. Triggers the function displayScores.
function submit(event) {
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
  // Gets existing high scores from local storage or initialize an empty array.
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  // Adds the current user's name, points, and date to the high scores array.
  highScores.push(userData);
  // Sorts the high scores based on points in descending order.
  highScores.sort(function (a, b) {
    return b.points - a.points;
  });
  // Saves the updated high scores array back to local storage.
  localStorage.setItem("highScores", JSON.stringify(highScores));
  // Clears the input field.
  $("input[id='userName']").val("");
  displayScores();
}

// When Submit button is clicked trigger the function submit.
$("#submitBtn").on("click", submit);

// Hides questions and answers. Reveals the quizEnd container.
function quizEnd() {
  $("#quiz").hide();
  $("#quizEnd").show();
}

// Brings up a new question with answer choices. When out of questions triggers the function quizEnd.
function nextQuestion() {
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
    quizEnd();
    clearInterval(timerInterval);
    isTimerActive = false;
  }
}

// If timer is active, resets timer. If timer isn't active counts down from 60. When timer reaches 0 triggers the function quizEnd.
function startTimer() {
  if (isTimerActive) {
    clearInterval(timerInterval);
  }
  timerInterval = setInterval(function () {
    seconds--;
    $("#timeLeft").text(seconds);
    if (seconds <= 0) {
      seconds = 0;
      $("#timeLeft").text(seconds);
      clearInterval(timerInterval);
      isTimerActive = false;
      quizEnd();
    }
  }, 1000);
  isTimerActive = true;
}

// Resets the points, timer, and questions. Sets the scoreNum equal to points.
function reset() {
  points = 0;
  $(".scoreNum").text(points);
  questionNum = 0;
  seconds = 60;
}

// Hides the preQuiz elements and shows the questions/answers. Triggers the functions reset, startTimer, shuffleArray, and nextQuestion.
function startQuiz() {
  $("#quizStart").hide();
  $("#quiz").show();
  reset();
  shuffleArray(questions);
  nextQuestion();
  startTimer();
}

// When Start Quiz button is clicked trigger the function startQuiz.
$("#startQuizBtn").on("click", startQuiz);

// Creates HTML elements, fades them out, and deletes them. Adapted from ChatGPT.
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

// Creates HTML elements, fades them out, and deletes them. Adapted from ChatGPT.
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

// If correct adds 1 to score, and triggers function fadeOutCorrect. If incorrect removes 5 from timer, and triggers function fadeOutWrong. Triggers the function nextQuestion.
function checkAnswer(event) {
  if ($(event.target).data("correct")) {
    points++;
    $(".scoreNum").text(points);
    fadeOutCorrect();
  } else {
    seconds -= 5;
    $("#timeLeft").text(seconds);
    fadeOutWrong();
  }
  nextQuestion();
}

// When any button within the answer container is clicked trigger the function checkAnswer.
$("#answerContainer").on("click", "button", function (event) {
  checkAnswer(event);
});
