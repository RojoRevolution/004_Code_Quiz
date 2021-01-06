//quiz from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS

var questions = [
    ["Inside which HTML element do we put the JavaScript?"],
    ["What is the correct syntax for referring to an external script called 'xxx.js'?"],
    ["The external JavaScript file must contain the <script> tag."]
];

var answers = [
    ['<script>', '<javascript>', '<scripting>', '<js>'],
    ['<script src="xxx.js">', '<script name="xxx.js">', '<script href="xxx.js"'],
    ['True', 'False']
]



//Variables
var timeEl = document.querySelector(".timer");
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answers");
var getStartedDiv = document.querySelector(".get-started");
var questionsDiv = document.querySelector(".question1")
var getStartedBtn = document.querySelector("getStartedBtn")


var maxTime = 75;

function quizStart() {
    getStartedDiv.setAttribute("class", "hide");
    startTime();
    quizGo();
}

//Function to Start Timer
// function startTime() {
//     var timerInterval = setInterval(function () {
//         maxTime--;
//         timeEl.textContent = maxTime;
//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             sendMessage();
//         }
//     }, 1000);
// }

//Function to insert Questions
function quizGo() {
    questionsDiv.setAttribute("class", ".show")
    var questionNum = 0;
    questionEl.textContent = questions[questionNum];

    for (var i = 0; i < answers[0].length; i++) {
        var creatLI = document.createElement("li");
        var creatBtn = document.createElement("button");
        creatBtn.setAttribute("class", "button")
        creatBtn.setAttribute("style", "margin:20px auto;")
        creatBtn.textContent = answers[questionNum][i];
        answerEl.appendChild(creatLI);
        creatLI.appendChild(creatBtn);
    }
}
quizGo();

// getStartedBtn.addEventListener("click", function () {
//     console.log("click")
//     quizStart()
// });

// quizGo()