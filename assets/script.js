var startQuizButton = document.querySelector(".start-quiz");
var introductionPage = document.querySelector(".introduction-page");
var introductionBox = document.querySelector(".intruduction-box");
var disableQuizScreen = document.querySelector(".main-display");
var scoreTrack = document.querySelector(".header-score");
var timerTrack = document.querySelector(".header-time");
var optionList = document.querySelector(".options");

var nextButton = document.querySelector(".next-button");

var timeRemaining = document.getElementById("interval").innerHTML;

var questionCount = 0;

var scoreCount = 0;
var finalScoreCount = 0;

// Instead creating list with all values to pull from
var questions = [
    {
        points: 10,
        num: 1,
        question: "Which is one of the starter Pokemon you can chose as your partner from Generation 1?",
        answer: "Charmander",
        options: ["Butterfree",
            "Pikachu",
            "Charmander",
            "Eevee"
        ]
    }, {
        points: 10,
        num: 2,
        question: "Which Pokemon type is most effective against a Flying Pokemon?",
        answer: "Electric",
        options: ["Water",
            "Dragon",
            "Rock",
            "Electric"
        ]
    }, {
        points: 15,
        num: 3,
        question: "Who is the lead protagonist in the Pokemon Anime?",
        answer: "Ash Ketchum",
        options: ["Brock",
            "Ash Ketchum",
            "Misty",
            "Pikachu"
        ]
    }, {
        points: 20,
        num: 4,
        question: "What is the name of the first ever Pokemon Game released in 1996?",
        answer: "Pokemon Red & Blue",
        options: ["Pokemon Red & Blue",
            "Pokemon Yellow",
            "Pokemon Emerald",
            "Pokemon FireRed & LeafGreen"
        ]
    }, {
        points: 25,
        num: 5,
        question: "Finish the lyrics: 'I wanna be the very best, like no one ever was. To catch them is my real test...'?",
        answer: "To train them is my cause!",
        options: ["The power that's inside!",
            "Gotta catch 'em all!",
            "To train them is my cause!",
            "I will battle every day!"
        ]
    }
]

// Displays each question as it cycles through
var displayQuestions = function (index) {
    // Pulls the information from the HTML
    var qText = document.querySelector(".question");
    var qNum = document.querySelector(".q-num");
    var nextBox = document.querySelector(".next-button");
    

    // Setting the attribute to match the styling I am looking for as it appears
    qNum.setAttribute("style", "font-weight:bold; font-size:32px");
    qText.setAttribute("style", "font-weight:bold; font-size:32px");
    
    // Creating the values I want added into easy to repeat variables
    var nextBoxInit = "<button class='next'> Next Question </button>";
    var qInit = questions[index].question;
    var numInit = "Question " + questions[index].num;
    var optionInit = "<div class='optionItm'>" + questions[index].options[0] + "</div>" +
    "<div class='optionItm'>" + questions[index].options[1] + "</div>" +
    "<div class='optionItm'>" + questions[index].options[2] + "</div>" +
    "<div class='optionItm'>" + questions[index].options[3] + "</div>";
    
    
    // Setting the text content and inner HTML values to what was previously set
    // Text content is used for the use of strict HTML written code
    // Inner HTML is used for more complex structures like inclusion of divs
    qText.textContent = qInit;
    qNum.textContent = numInit;
    optionList.innerHTML = optionInit;
    nextBox.innerHTML = nextBoxInit;

    // Cycles through the option list while setting onclick effects for grabbing user clicked information
    // When an option is clicked, it will run a function setting the users answer
    // Onclick is used for this particular for loop
    var option = optionList.querySelectorAll(".optionItm");
    for (i = 0; i < option.length; i++) {
       option[i].setAttribute("onclick", "userOption(this)"); 
    }
}

// This checks the user answer and compares it to the correct answer
// We use classList to directly inject a class id used in the CSS styling
var userOption = function(answer) {
    var userAnswer = answer.textContent;
    var correctAnswer = questions[questionCount].answer;

    if (userAnswer == correctAnswer) {
        scoreCount += questions[questionCount].points;
        scoreTrack.textContent = "Score: " + scoreCount;
        finalScoreCount = scoreCount;
        answer.classList.add("correct");
    } else {
        answer.classList.add("incorrect");
        timeRemaining-= 10;
    }

    // All options need to be disabled once a user picks one
    for (i = 0; i < optionList.children.length; i++) {
        optionList.children[i].classList.add("disabled");
    }
}

// Event triggered when start quiz button is clicked
startQuizButton.addEventListener("click", function () {
    var timerInterval = setInterval(function () {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerTrack.innerHTML = "Time: " + timeRemaining;
        } else {
            clearInterval(timerInterval);
            timerTrack.innerHTML = "Times Up!";
            finalScreen();
        }
    }, 1000);
    
    // Removes the introduction box and begins to display the quiz prompts
    startQuizButton.setAttribute("style", "display:none;");
    displayQuestions(questionCount);
    
    // Next button being clicked
    nextButton.addEventListener("click", function() {
        if (questionCount < questions.length -1) {
            questionCount++;
            displayQuestions(questionCount);
        } else {
            finalScreen();
            
        }
    });
    
    // Displays the final screen
    // This includes removing the quiz screen and allowing the final page to show
    var finalScreen = function() {
        var finalScreenHeader = document.querySelector(".introduction-box li");
        var finalScreenBody = document.querySelector(".firstBullet");
        var disableBullet2 = document.querySelector(".secondBullet");
        var disableBullet3 = document.querySelector(".thirdBullet");
        var endForm = document.querySelector(".endForm");

        var newForm = document.createElement("form");
        newForm.setAttribute("method", "post")
        newForm.setAttribute("action", "submit.php")
        
        var inputEl = document.createElement("input");
        inputEl.setAttribute("type", "text");
        inputEl.setAttribute("name", "initials");

        var submitEl = document.createElement("input");
        submitEl.setAttribute("type", "submit");
        submitEl.setAttribute("value", "Submit")


        disableQuizScreen.setAttribute("style", "display:none;");
        disableBullet2.setAttribute("style", "display:none;");
        disableBullet3.setAttribute("style", "display:none;");
        endForm.setAttribute("style", "display:contents;")


        finalScreenHeader.textContent = "Quiz Over!";
        finalScreenBody.textContent = "Your final score is: " + finalScoreCount;

        clearInterval(timerInterval);

        // document.getElementById("introduction-box").appendChild(newForm);   
        submitEl.appendChild(newForm);
        inputEl.appendChild(newForm);
        introductionPage.appendChild(newForm);
    }

});