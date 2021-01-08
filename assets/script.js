//Questions, Choices, and an Answer key
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


//variabels pointing to elements that will need to be accessed
var timeEl = document.getElementById("timer");
var startArea = document.getElementById("start-section");
var goBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionDiv = document.getElementById("question");
var answerDiv = document.getElementById("answer-div");
var answerValidationDiv = document.getElementById("validation");

var yourScore = document.querySelector(".span-score");
var instructionsP = document.querySelector(".instructions");

var statusShow = document.querySelector(".show");
var statusHide = document.querySelector(".hide");

//stores the current question that is being rendered
var currentQuestion = 0;
var score = 0;
var timeLimit = 50;
var btnValues = []


//===============================================================
//Event delegation - used to access dynamic buttons
//The event for this function is the dynamic buttons that are being generated as options
questionContainer.addEventListener("click", function (event) {
    event.preventDefault();
    var btnValue = event.target.value;
    //variable that creates the h2 displaying if you're choice is right or wrong
    var validateText = document.createElement("h2");
    //Validation compares the btn value and the answer index in the array
    if (btnValue == allQuestions[currentQuestion].answer) {
        score += 10;
        answerValidationDiv.classList.remove("hide")
        yourScore.innerText = score;
        validateText.innerText = "You are correct :)";
        answerValidationDiv.append(validateText);
    } else {
        score -= 5;
        timeLimit -= 10;
        validateText.innerText = "You are incorrect :(";
        answerValidationDiv.append(validateText);
    }
    //stores the value in the global score variable to local storage
    localStorage.setItem("Score", score);
    //increases the question count
    currentQuestion++;
    //timeout function delays the next render so the Correct / Incorrect text can be viewed
    setTimeout(function () { renderQuiz(); }, 1000);
});

//===============================================================
//Sets the timer
function setTime() {
    //inner function sets the time interval for 1second
    var timerInterval = setInterval(function () {
        //time limit descreses every second by 1
        timeLimit--;
        //renders the time to the page
        timeEl.textContent = `Time Left: ${timeLimit}`;
        if (timeLimit <= 0) {

            clearInterval(timerInterval);
            console.log("Times Up")
            timeLimit = 50
            gameOver();
        }
    }, 1000);

};

// function quizComplete() {
//     if (currentQuestion > allQuestions.length) {
//         timeLimit = 50
//         gameOver();
//     }
// }

//===============================================================
//Starts the Quiz
function start() {
    setTime();
    instructionsP.classList.add("hide");
    startArea.classList.add("hide");
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
//Game Over Message + Play Again Button + display your score
function gameOver() {
    startArea.classList.remove("hide");
    questionContainer.classList.add("hide");
    //display game over message
    var playAgain = document.createElement("h2");
    playAgain.innerText = "Times Up! Press start to play again";
    startArea.append(playAgain);
    //pull score from local storage and render on the page
    yourScore = localStorage.getItem("Score", score);
    var highScoreDiv = document.createElement("div")
    highScoreDiv.innerText = "You're Score: " + yourScore
    highScoreDiv.setAttribute('class', "Light py-4 my-1")
    startArea.append(highScoreDiv);
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
