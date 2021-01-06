//quiz from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
//Object
// var quiz = {
//     questions: {
//         q1: "Inside which HTML element do we put the JavaScript?",
//         q2: "What is the correct syntax for referring to an external script called 'xxx.js'?",
//         q3: "The external JavaScript file must contain the <script> tag.",
//     },
//     q1Answer: {
//         option1: "<script>",
//         option2: "<javascript>",
//         option3: "<scripting>",
//         option4: "<js>",
//     },
//     q2Answer: {
//         option1: "<script src='xxx.js'",
//         option2: "<script name='xxx.js'",
//         option3: "<script href='xxx.js'",
//     },
//     q3Answer: {
//         option1: 'True',
//         option2: 'False'
//     }
// }




//Variables
var timeEl = document.querySelector(".timer");
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answers");

var creatBtn = document.createElement("button");

var maxTime = 75;

//Function to Start Timer
function startTime() {
    var timerInterval = setInterval(function () {
        maxTime--;
        timeEl.textContent = maxTime;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

//Function to insert Questions
function quesInsert() {
    questionEl.textContent = quiz.questions.q1;
    answerEl.appendChild(creatBtn);
    creatBtn.setAttribute("class", "button")
    creatBtn.textContent = quiz.q1Answer.option1;
}
quesInsert()
// startTime();