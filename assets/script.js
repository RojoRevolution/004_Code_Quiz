//store all the questions in an array
var allQuestions = [{
    question: "How many legs does a spider have?",
    choices: [6, 4, 8],
    correctAnswer: 8
}, {
    question: "how many legs does a cat have?",
    choices: [2, 4, 6],
    correctAnswer: 4
}, {
    question: "how many legs do you have?",
    choices: [2, 4, 6],
    correctAnswer: 2
}];

var timeEl = document.querySelector(".timer");
var startArea = document.querySelector(".startArea")
var goBtn = document.querySelector(".goBtn")
var nextBtn = document.querySelector(".next")
var answerDiv = document.querySelector(".answers")

var currentQuestion = 0;
var score = 0;
var timeLimit = 100;
var choiceBtn;


function setTime() {
    var timerInterval = setInterval(function () {
        timeLimit--;
        timeEl.textContent = `Time Left: ${timeLimit}`;

        if (timeLimit === 0) {
            clearInterval(timerInterval);
            console.log("Times Up")
        }

    }, 1000);
}

function askQuestion() {
    var askQuestions = allQuestions[currentQuestion].question;
    document.querySelector(".question").innerHTML = askQuestions;
}

function currentChoices() {
    var showChoices = allQuestions[currentQuestion].choices;
    for (var i = 0; i < allQuestions[currentQuestion].choices.length; i++) {
        choiceBtn = document.createElement("button");
        choiceBtn.textContent = showChoices[i];
        // choiceBtn.classList.add("class", "choiceBtn");
        choiceBtn.setAttribute("id", "choiceBtn");
        choiceBtn.setAttribute("class", "btn btn-primary my-2");
        choiceBtn.setAttribute("value", [i]);
        answerDiv.appendChild(choiceBtn);
    }

}

function showNextQuestion() {
    askQuestion()
    showChoices()
}


askQuestion()
currentChoices()
setTime()

choiceBtn.addEventListener('click', function () {
    console.log('click');
});