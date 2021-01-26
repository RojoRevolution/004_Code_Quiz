//Questions, Choices, and an Answer key
var allQuestions = [{
    question: "1. Inside which HTML element do we put the JavaScript?",
    choices: ['<script>', '<scripting>', '<javascript>'],
    answer: '0',
}, {
    question: "2. What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ['<script name="xxx.js">', '<script href="xxx.js">', '<script src="xxx.js">'],
    answer: '2',
}, {
    question: "3. The external JavaScript file must contain the < script > tag.",
    choices: ['True', 'False',],
    answer: '1',
},
{
    question: "5. How do you write 'Hello World' in an alert box?",
    choices: ['alertBox("Hello World")', 'msg("Hello World:)', 'alert("Hello World)', 'msgBox("Hello World")'],
    answer: '2',
},
{
    question: "5. How do you create a function in JavaScript?",
    choices: ['function:myFunction()', 'function = myFunction()', 'function myFunction()'],
    answer: '2',
},
{
    question: "5. How do you call a function in JavaScript?",
    choices: ['myFunction()', 'call function myFunction()', 'call myFunction()'],
    answer: '0',
}
];

//Variables
const scoreAndTime = document.getElementById('scoreTime')
const introSection = document.getElementById('intro-content')
const startBtn = document.getElementById('startBtn');

// incrementing variables
let currentQuestion = 0;
let Score = 0;
let maxTime = 60;

// Render's Questions
renderQuiz = () => {

}


// Event Listeners
startBtn.addEventListener("click", () => {
    console.log("Start Button Clicked")
    scoreAndTime.removeAttribute('class', 'hide');
    introSection.setAttribute('class', 'hide');
})