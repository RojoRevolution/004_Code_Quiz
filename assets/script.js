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
var questionEl = document.querySelector(".question")
var answerBlock = document.querySelector(".answer-buttons");
var answerDiv = document.querySelector(".answers");
var statusShow = document.querySelector(".show");
var statusHide = document.querySelector(".hide");
