//store all the questions in an array
var allQuestions = [{
    question: "1. Inside which HTML element do we put the JavaScript?",
    choices: ['<scripting>', '<script>', '<javascript>'],
    answer: '1',
}, {
    question: "2. What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ['<script name="xxx.js">', '<script src="xxx.js">', '<script href="xxx.js">'],
    answer: '1',
}, {
    question: "3. The external JavaScript file must contain the < script > tag.",
    choices: ['True', 'False',],
    answer: '1',
},
{
    question: "5. How do you write 'Hello World' in an alert box?",
    choices: ['alertBox("Hello World")', 'msg("Hello World:)', 'msgBox("Hello World)', 'alert("Hello World")'],
    answer: '3',
},
{
    question: "5. How do you create a function in JavaScript?",
    choices: ['function:myFunction()', 'function = myFunction()', 'function myFunction()'],
    answer: '2',
},
{
    question: "5. How do you call a function in JavaScript?",
    choices: ['call myFunction()', 'call function myFunction()', 'myFunction()'],
    answer: '2',
}
];



var correctAnswers = ['<script>', '<script src="xxx.js">', 'True']

var timeEl = document.getElementById("timer");
var startArea = document.getElementById("start-section");
var goBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
// var questionContainer = $("#question-container"); /// jQuery
var questionDiv = document.getElementById("question");
var answerDiv = document.getElementById("answer-div");
var answerValidationDiv = document.getElementById("validation");
// var allChoiceBtns = document.querySelectorAll(".choices")

var yourScore = document.querySelector(".span-score");

var nextBtn = document.querySelector(".next");

var statusShow = document.querySelector(".show");
var statusHide = document.querySelector(".hide");

var currentQuestion = 0;
var score = 0;
var timeLimit = 100;
var btnValues = []
// const answerOptions = document.querySelectorAll('.choices');

// var answerCheck = allQuestions[currentQuestion].answer;

//===============================================================
//Event delegation - used to access dynamic buttons
questionContainer.addEventListener("click", function (event) {
    event.preventDefault();
    var btnValue = event.target.value;
    console.log("Answer Value" + allQuestions[currentQuestion].answer)
    console.log("button value:" + btnValue)

    var validateText = document.createElement("h2");

    if (btnValue == allQuestions[currentQuestion].answer) {
        // alert("Correct!")
        score += 10;
        yourScore.innerText = score;
        validateText.innerText = "You are correct :)";
        answerValidationDiv.append(validateText);
    } else {
        // alert("incorrect")
        score -= 5;
        timeLimit -= 10;
        validateText.innerText = "You are incorrect :(";
        answerValidationDiv.append(validateText);
    }
    localStorage.setItem("Score", score);
    currentQuestion++;
    setTimeout(function () { renderQuiz(); }, 1000);


});

//===============================================================
//Sets the timer
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

//===============================================================
//Starts the Quiz
function start() {
    setTime();
    startArea.classList.add("hide");
    // questionContainer.removeClass("hide"); // jQuery
    questionContainer.classList.remove("hide");
    renderQuiz();
}

//===============================================================
//Renders the current question / answer options
function renderQuiz() {
    console.log(`Current Question: ${currentQuestion}`);
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

}

//===============================================================
//Fucntion that checks answers
function correct() {

}


//===============================================================
//Deletes the dynamic elements before rendering the next set of items
function resetState() {
    while (questionDiv.firstChild) {
        questionDiv.removeChild(questionDiv.firstChild);
    }
    while (answerDiv.firstChild) {
        answerDiv.removeChild(answerDiv.firstChild);
    }
    while (answerValidationDiv.firstChild) {
        answerValidationDiv.removeChild(answerValidationDiv.firstChild);
    }
}

//===============================================================
//Evente Listener For Initial Start button
goBtn.addEventListener("click", function () {
    console.log("click");
    start();
})
