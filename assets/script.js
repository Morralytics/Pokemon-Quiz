var startQuizButton = document.querySelector(".start-quiz");
var introductionBox = document.querySelector(".introduction-page");
var scoreTrack = document.querySelector(".header-score");
var timerTrack = document.querySelector(".header-time");

var nextButton = document.querySelector(".next-button");

var timeRemaining = document.getElementById("interval").innerHTML;

var questionCount = 0;

// Instead creating list with all values to pull from
var questions = [
    {
        num: 1,
        question: "Which is one of the starter Pokemon you can chose as your partner from Generation 1?",
        answer: "Charmander",
        options: ["Butterfree",
            "Pikachu",
            "Charmander",
            "Eevee"
        ]
    }, {
        num: 2,
        question: "Which Pokemon type is most effective against a Flying Pokemon?",
        answer: "Electric",
        options: ["Water",
            "Dragon",
            "Rock",
            "Electric"
        ]
    }, {
        num: 3,
        question: "Who is the lead protagonist in the Pokemon Anime?",
        answer: "Ash Ketchum",
        options: ["Brock",
            "Ash Ketchum",
            "Misty",
            "Pikachu"
        ]
    }, {
        num: 4,
        question: "What is the name of the first ever Pokemon Game released in 1996?",
        answer: "Pokemon Red & Blue",
        options: ["Pokemon Red & Blue",
            "Pokemon Yellow",
            "Pokemon Emerald",
            "Pokemon FireRed & LeafGreen"
        ]
    }, {
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
    var optionList = document.querySelector(".options");

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

var userOption = function(answer) {
    var userAnswer = answer.textContent;
    var correctAnswer = questions[questionCount].answer;
    
    if (userAnswer == correctAnswer) {
        console.log("correct");
    } else {
        console.log("incorrect");
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
        }
    }, 1000);
    
    introductionBox.setAttribute("style", "display:none");
    displayQuestions(questionCount);
});

// Next button being clicked
nextButton.addEventListener("click", function() {
    if (questionCount < questions.length -1) {
        questionCount++;
        displayQuestions(questionCount);
    } else {
        console.log("Finshed quiz");
    }
});

