var starQuizButton = document.querySelector(".start-quiz");
var introductionBox = document.querySelector(".introduction-page");
var scoreTrack = document.querySelector(".header-score");
var timerTrack = document.querySelector(".header-time");

var timeRemaining = document.getElementById("interval").innerHTML;

console.log(typeof(timeRemaining));
starQuizButton.addEventListener("click", function() {

    var timerInterval = setInterval(function() {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerTrack.innerHTML = "Time: " + timeRemaining;
        } else {
            clearInterval(timerInterval);
            timerTrack.innerHTML = "Times Up!";
        }
    }, 1000);

    introductionBox.setAttribute("style", "display:none");
});

