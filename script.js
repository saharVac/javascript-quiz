// Questions from https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm

// making questions and chosen answer global dependencies
var score = 0;
var randIndex;
var question;
var answer;
var container = document.querySelector(".container");
var questions;
var chosen = 0;
var timeEl = document.getElementById("timer");
var time = 150;
var timerInterval;
var start = document.getElementById("start");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");

function initializeQuestions() {
  questions = [
    {
      q: "Can you access Cookie using javascript?",
      a: ["Yes", "No", "Both of the above", "None of the above"],
    },
    {
      q:
        "Which of the following is a valid type of function javascript supports?",
      a: [
        "named function",
        "anonymous function",
        "Both of the above.",
        "None of the above",
      ],
    },
    {
      q:
        "Which built-in method removes the last element from an array and returns that element?",
      a: ["last()", "get()", "pop()", "None of the above"],
    },
    {
      q:
        "All user-defined objects and built-in objects are descendants of an object called Object?",
      a: ["true", "false", "Both", "Neither"],
    },
    {
      q:
        "Which of the following function of Number object returns a string value version of the current number?",
      a: ["toString()", "toFixed()", "toLocaleString()", "toPrecision()"],
    },
    {
      q:
        "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
      a: ["slice()", "split()", "replace()", "search()"],
    },
    {
      q:
        "Which of the following function of String object returns a string representing the specified object?",
      a: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
    },
    {
      q:
        "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
      a: ["sup()", "toUpperCase()", "toString()", "valueOf()"],
    },
    {
      q:
        "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
      a: ["push()", "join()", "pop()", "map()"],
    },
    {
      q:
        "Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?",
      a: ["reverse()", "shift()", "slice()", "some()"],
    },
  ];
}

// array representing correct answer indeces
var correct = [0, 2, 2, 0, 0, 1, 2, 2, 3, 3];

// Functionality for choices
for (let i = 1; i <= 4; i++) {
  document.getElementById("choice-" + i).addEventListener("click", function () {
    chosen = i;
  });
}

// Submitting score
submit.addEventListener("click", function (event) {
  event.preventDefault();
  // make sure field isn't empty
  name = initials.value;
  if (name) {
    localStorage.setItem(name, score);
    console.log(localStorage);
  }
});

function displayQuestion() {
  // select a random question
  // random index
  randIndex = Math.floor(Math.random() * questions.length);

  // remove question from questions list
  question = questions.splice(randIndex, 1);

  // put question on page
  document.querySelector(".question").innerHTML = question[0].q;

  // put choices on page
  for (let i = 0; i < 4; i++) {
    document.getElementById("choice-" + (i + 1)).innerHTML = question[0].a[i];
  }

  // remove actual answer from answers list
  answer = correct.splice(randIndex, 1);

  chosen = 0;
}

function compareAnswer() {
  //timerInterval highlighting correct answer in green
  //add score if correct

  if (chosen - 1 == answer) {
    score++;
  }
}

function quizEnd() {
  // clear time
  clearInterval(timerInterval);
  // hide container
  container.style.display = "none";
  // establish final score
  finalScore.innerHTML = score;
  // show score
  document.querySelector(".score").style.display = "block";
}

function startQuiz() {
  displayQuestion();
  var timeUntil = 135;
  // start timer
  timerInterval = setInterval(function () {
    // update time
    time--;
    // display time
    timeEl.textContent = "Seconds Left: " + time;

    // If a choice was made or time for question ran out
    if (chosen !== 0 || time === timeUntil) {
      compareAnswer();

      //if more questions left
      if (questions.length > 0) {
        // display new question
        displayQuestion();

        // time until which question must be answered
        timeUntil = time - 15;
      } else {
        //end quiz
        quizEnd();
      }
    }

    // when time runs out
    if (time === 0) {
      // stop timer
      clearInterval(timerInterval);
      // end quiz
      quizEnd();
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  console.dir(localStorage);

  // when clicking button
  start.addEventListener("click", function () {
    // initialize Questions
    initializeQuestions();
    // button disappears
    this.style.display = "none";
    // container shows
    container.style.display = "block";

    // start iterating though questions
    startQuiz();
  });
});
