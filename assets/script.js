//store all the questions in an array
var allQuestions = [{
    question: "1. Inside which HTML element do we put the JavaScript?",
    choices: ['<script>', '<javascript>', '<scripting>'],
    correctAnswer: '<script>'
}, {
    question: "2. What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ['<script src="xxx.js">', '<script name="xxx.js">', '<script href="xxx.js">'],
    correctAnswer: '<script src="xxx.js"'
}, {
    question: "3. The external JavaScript file must contain the <script> tag.",
    choices: ['True', 'False', 'Who Knows'],
    correctAnswer: 'True'
}];

var timeEl = document.getElementById("timer");
var startArea = document.getElementById("start-section");
var goBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
// var questionContainer = $("#question-container"); /// jQuery
var questionDiv = document.getElementById("question");
var answerDiv = document.getElementById("answer-div");
// var allChoiceBtns = document.querySelectorAll(".choices")

var nextBtn = document.querySelector(".next");

var statusShow = document.querySelector(".show");
var statusHide = document.querySelector(".hide");


var currentQuestion = 0;
var score = 0;
var timeLimit = 100;
// const answerOptions = document.querySelectorAll('.choices');

//===============================================================
//Attempt at JS event delegation
questionContainer.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.matches("button")) {
        renderQuiz();
    }
});

function setTime() {
    var timerInterval = setInterval(function () {
        timeLimit--;
        timeEl.textContent = `Time Left: ${timeLimit}`;

        if (timeLimit === 0) {
            clearInterval(timerInterval);
            console.log("Times Up")
        }

    }, 1000);
};

function start() {
    setTime();
    startArea.classList.add("hide");
    // questionContainer.removeClass("hide"); // jQuery
    questionContainer.classList.remove("hide");
    renderQuiz();
}

function renderQuiz() {
    console.log(currentQuestion);
    resetState()
    var askQuestions = allQuestions[currentQuestion].question;
    var questionHeader = document.createElement("h2");
    questionHeader.setAttribute('value', [i])
    questionHeader.innerHTML = askQuestions;
    questionDiv.appendChild(questionHeader)

    //Answers
    var showChoices = allQuestions[currentQuestion].choices;
    for (var i = 0; i < allQuestions[currentQuestion].choices.length; i++) {
        // var choiceBtn = $("#buttons") // jquery
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = showChoices[i];
        choiceBtn.setAttribute("class", "btn btn-primary m-2 choices");
        choiceBtn.setAttribute("value", [i]);
        answerDiv.appendChild(choiceBtn);
    }
    currentQuestion++;
}



//Clears the dynamic elements before rendering the next set of items
function resetState() {
    while (questionDiv.firstChild) {
        questionDiv.removeChild(questionDiv.firstChild);
    }
    while (answerDiv.firstChild) {
        answerDiv.removeChild(answerDiv.firstChild);
    }
}

// function showNextQuestion() {
//     askQuestion()
//     showChoices()
// }



goBtn.addEventListener("click", function () {
    console.log("click");
    start();
})
