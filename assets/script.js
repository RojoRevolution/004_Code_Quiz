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

var timeEl = document.querySelector(".timer");
var startArea = document.querySelector(".startArea");
var goBtn = document.querySelector(".goBtn");
var nextBtn = document.querySelector(".next");
var questionDiv = document.querySelector(".question-block");
var answerDiv = document.querySelector(".answers");
var statusShow = document.querySelector(".show");
var statusHide = document.querySelector(".hide");

var allChoiceBtns = document.querySelectorAll(".choices")

var currentQuestion = 0;
var score = 0;
var timeLimit = 100;
// const answerOptions = document.querySelectorAll('.choices');


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
    startArea.classList.add("hide");
    questionDiv.classList.remove("hide");
    setTime();
    renderQuiz();
}

function renderQuiz() {
    var askQuestions = allQuestions[currentQuestion].question;
    document.querySelector(".question").innerHTML = askQuestions;
    //Answers
    var showChoices = allQuestions[currentQuestion].choices;
    for (var i = 0; i < allQuestions[currentQuestion].choices.length; i++) {
        choiceBtn = document.createElement("button");
        choiceBtn.textContent = showChoices[i];
        choiceBtn.setAttribute("class", "btn btn-primary m-2 choices");
        choiceBtn.setAttribute("value", [i]);
        answerDiv.appendChild(choiceBtn);
    }
    currentQuestion++;
}


// function showNextQuestion() {
//     askQuestion()
//     showChoices()
// }


goBtn.addEventListener("click", function () {
    console.log("click");
    start();
})




