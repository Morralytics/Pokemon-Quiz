var startQuizButton = document.querySelector(".start-quiz");
var introductionBox = document.querySelector(".introduction-page");
var scoreTrack = document.querySelector(".header-score");
var timerTrack = document.querySelector(".header-time");

// var option1Check = document.getElementById("option1").innerHTML;
// var option2Check = document.getElementById("option2").innerHTML;
// var option3Check = document.getElementById("option3").innerHTML;
// var option4Check = document.getElementById("option4").innerHTML;
// var option5Check = document.getElementById("option4").innerHTML;
// var timeRemaining = document.getElementById("interval").innerHTML;




var createQ1 = function() {
    //need to doc.create element and append child for each question
    //ugh.
    //Luckily it is already coded in the html for structure
    //Do this in the morning
}













// var information = function() {
//     var numOptions = [];

//     if (option1Check) {
//         numOptions.push(option1Check);
//     } 
//     console.log(numOptions);
// }

// information();







// var documentEl = function() {

//     var optionArr = [];
//     var index = 0;

//     var divs = document.querySelectorAll(".question-container div");

//     if (index < divs.length) {
//         index++;
//         optionArr.push(divs)
//     }
//     console.log(optionArr);
// }

startQuizButton.addEventListener("click", function() {

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

documentEl();
