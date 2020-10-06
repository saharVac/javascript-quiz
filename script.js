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
console.log(timer);
var time = 150;
var timerInterval;
var start = document.getElementById("start");
var finalScore = document.getElementById("final-score");

function initializeQuestions() {
  questions = [
    {
      q: "Which of the following correctly describe JavaScript?",
      a: [
        "It is a lightweight, interpreted programming language",
        "It has object oriented capabilities that allows you to build interactivity into otherwise static HTML pages",
        "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers",
        "All of the above",
      ],
    },
    {
      q:
        "Which of the following is a valid type of function javascript supports?",
      a: [
        "named function",
        "anonymous function",
        "Both of the above",
        "None of the above",
      ],
    },
    {
      q: "Which built-in method returns the length of the string?",
      a: ["length()", "size()", "index()", "None of the above"],
    },
    {
      q:
        "Which built-in method returns the calling string value converted to upper case? ",
      a: [
        "toUpperCase()",
        "toUpper()",
        "changeCase(case)",
        "None of the above.",
      ],
    },
    {
      q:
        "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
      a: ["valueOf()", "toString()", "None of the above.", "toSource()"],
    },
    {
      q:
        "Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?",
      a: ["search()", "localeCompare()", "substr()", "concat()"],
    },
    {
      q:
        "Which of the following function of String object returns the primitive value of the specified object?",
      a: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "valueOf()"],
    },
    {
      q:
        "Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag?",
      a: ["link()", "small()", "sup()", "sub()"],
    },
    {
      q:
        "Which of the following function of Array object calls a function for each element in the array?",
      a: ["concat()", "every()", "forEach()", "filter()"],
    },
    {
      q:
        "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
      a: ["unshift()", "sort()", "splice()", "toString()"],
    },
  ];
}

var correct = [3, 2, 0, 0, 3, 1, 3, 1, 2];

// Functionality for choices
for (let i = 1; i <= 4; i++) {
  console.log("choice-" + i);
  document.getElementById("choice-" + i).addEventListener("click", function () {
    chosen = i + 1;
    console.log(chosen);
  });
}

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

function compareAnswer(choice, actual) {
  //timerInterval highlighting correct answer in green

  //add score if correct
  score++;
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
      console.log("chosen: " + chosen);
      console.log("after question " + (10 - questions.length));

      //compareAnswer(chosen, answer);

      console.log(questions.length);
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

  console.log("done");
}

document.addEventListener("DOMContentLoaded", function () {
  // initialize Questions
  initializeQuestions();

  // when clicking button
  start.addEventListener("click", function () {
    // button disappears
    this.style.display = "none";
    // container shows
    container.style.display = "block";

    // start iterating though questions
    startQuiz();
  });
});
