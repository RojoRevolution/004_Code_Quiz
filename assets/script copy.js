//quiz from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS


// Data Variables
// =============================

// var questionList = [
//     ["1. Inside which HTML element do we put the JavaScript?"],
//     ["2. What is the correct syntax for referring to an external script called 'xxx.js'?"],
//     ["3. The external JavaScript file must contain the <script> tag."]
// ];

// var answersList = [
//     ['<script>', '<javascript>', '<scripting>'],
//     ['<script src="xxx.js">', '<script name="xxx.js">'],
//     ['True', 'False', 'Yes']
// ]

//store all the questions in an array
var allQuestions = [{
    question: "How many legs does a spider have?",
    answers: [6, 4, 8],
    correctAnswer: 8
}, {
    question: "how many legs does a cat have?",
    answers: [2, 4, 6],
    correctAnswer: 4
}, {
    question: "how many legs do you have?",
    answers: [2, 4, 6],
    correctAnswer: 2
}];


var currentQuestion = 0;
var answerNum = 0;
var userScore = 0;

//Variable Element Selectors
// =============================

var timeEl = document.querySelector(".timer");
var startArea = document.querySelector(".startArea")
var goBtn = document.querySelector(".goBtn")
var nextBtn = document.querySelector(".next")
var questionCont1 = document.querySelector(".question-block1")
var questionCont2 = document.querySelector(".question-block2")
// var questionH2 = document.querySelector(".question");
var questionH2Alt = document.querySelector(".questionAlt");
var answersDiv = document.querySelector(".answers");
var answersUlAlt = document.querySelector(".answersAlt");
var getStartedDiv = document.querySelector(".get-started");
var questionsDiv = document.querySelector(".question-block")
var questionsAlt = document.querySelector(".question-blockAlt")


var maxTime = 75;


//Functions
// =============================


// Function to insert Questions
function askQuestion() {
    var askQuestions = allQuestions[currentQuestion].question;
    document.querySelector(".question").innerHTML = askQuestions;
}





function showAnswers() {
    var displayChoices = allQuestions[currentQuestion].answers;
    answersDiv.innerHTML = ""
    for (var i = 0; i < displayChoices.length; i++) {
        var createLI = document.createElement("li");
        var answerBtn = document.createElement("button");
        answerBtn.textContent = answersList[questionNum][i];
        createLI.setAttribute("class", "m-3")
        answerBtn.setAttribute("class", "btn btn-primary my-2");
        answerBtn.setAttribute("answer-index", [i])
        answerBtn.classList.add("class", "next");
        answersUl.appendChild(createLI);
        createLI.appendChild(answerBtn);
        // var label = document.createElement('label');
        // var input = document.createElement('input');
        // var br = document.createElement('br');

        // input.setAttribute("id", "Radios");
        // input.setAttribute('type', 'radio');
        // input.setAttribute('name', 'answer');
        // input.setAttribute('value', i);

        // label.appendChild(input);
        // label.appendChild(document.createTextNode(displayChoices[i]));

        // choices.append(label);
        // choices.append(br);
    }
}

// askQuestion();
// showAnswers()

// function hideInitial() {
//     startArea.classList.add("class", "hide");
//     questionsDiv.classList.add("class", "show");
//     next1();
// }

// function toggleQuestions() {
//     if (questionsAlt.classList.contains("hide")) {
//         questionsDiv.classList.add("class", "hide");
//         questionsDiv.classList.remove("class", "hide");
//     }

// }


// function next1() {
//     questionH2.textContent = questionList[questionNum];

//     //question 001
//     for (var i = 0; i < answersList[answerNum].length; i++) {
//         var createLI = document.createElement("li");
//         var answerBtn = document.createElement("button");
//         answerBtn.textContent = answersList[questionNum][i];
//         createLI.setAttribute("class", "m-3")
//         answerBtn.setAttribute("class", "btn btn-primary my-2");
//         answerBtn.setAttribute("answer-index", [i])
//         answerBtn.classList.add("class", "next");
//         answersUl.appendChild(createLI);
//         createLI.appendChild(answerBtn);
//     }
//     questionNum++;
//     answerNum++
// };


// goBtn.addEventListener("click", function () {
//     console.log("click");
//     hideInitial();
// });





