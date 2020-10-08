// DOM Elements
var initialsList = document.getElementById("initials-list");
var scoresList = document.getElementById("scores-list");
var datesList = document.getElementById("dates-list");

// iterating over scores in local storage
for (let i = 0; i < localStorage.length; i++) {
  // get object format of stored info
  var item = JSON.parse(localStorage[i]);

  // create li elements for initials, score, and date
  var initials = document.createElement("li");
  var score = document.createElement("li");
  var date = document.createElement("li");
  // give list elements info from item
  initials.textContent = item.init;
  score.textContent = item.points;
  date.textContent = item.date;

  // place list items on the page
  initialsList.appendChild(initials);
  scoresList.appendChild(score);
  datesList.appendChild(date);
}
