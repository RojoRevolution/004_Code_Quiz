//Questions, Choices, and an Answer key
var allQuestions = [{
    question: "1. Inside which HTML element do we put the JavaScript?",
    choices: ['<script>', '<scripting>', '<javascript>', '<link script>'],
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

console.log(allQuestions.length)
//Variables
const scoreAndTime = document.getElementById('scoreTime')
const introSection = document.getElementById('intro-content')
const questionContainer = document.getElementById('questions')
const questionContent = document.getElementById('question-container')
const gameEndContainer = document.getElementById('gameOver')
const startBtn = document.getElementById('startBtn');

// incrementing variables
let currentQuestion = 0;
let Score = 0;
let maxTime = 60;

//Answer Click Event - Event Delegation
questionContent.addEventListener('click', (event) => {
    event.preventDefault();
    var btnValue = event.target.value;

    // Answer Validation
    let answerImage = document.createElement('img')

    if (btnValue === allQuestions[currentQuestion].answer) {
        answerImage.src = 'assets/images/correct.png';
        answerImage.alt = 'You answered correctly!';
        answerImage.setAttribute('class', 'answer-img')
        resetState()
        questionContent.appendChild(answerImage)
    } else {
        answerImage.src = 'assets/images/wrong.png';
        answerImage.alt = 'You answered correctly!';
        answerImage.setAttribute('class', 'answer-img')
        resetState()
        questionContent.appendChild(answerImage)
    }

    currentQuestion++;
    // check if game over or render the next question
    setTimeout(() => {
        if (currentQuestion > allQuestions.length - 1) {
            console.log('Run Game Over')
            gameOver();
        } else {
            renderQuiz();
        }
    }, 1000);
});



// Render's Questions
renderQuiz = () => {
    resetState()
    // Check if game over
    // if (currentQuestion > allQuestions.length) {
    //     console.log('Run Game Over')
    //     gameOver();
    // }
    let askQuestion = allQuestions[currentQuestion].question;
    let questionHeader = document.createElement('h2');
    // questionHeader.setAttribute('value', [i])
    questionHeader.innerHTML = askQuestion;
    questionContent.appendChild(questionHeader)
    // Render Choices
    let showChoices = allQuestions[currentQuestion].choices;
    for (let i = 0; i < allQuestions[currentQuestion].choices.length; i++) {
        let choiceBtn = document.createElement('button');
        choiceBtn.textContent = showChoices[i];
        choiceBtn.setAttribute("class", "btn btn-secondary me-2 mt-2");
        choiceBtn.setAttribute("value", [i]);
        questionContent.appendChild(choiceBtn);
    }
}

//===============================================================
//Deletes the dynamic elements
resetState = () => {
    while (questionContent.firstChild) {
        questionContent.removeChild(questionContent.firstChild);
    }
}

//===============================================================
//Game Over
gameOver = () => {
    scoreAndTime.setAttribute('class', 'hide');
    questionContainer.setAttribute('class', 'hide');
    gameEndContainer.removeAttribute('class', 'hide');
}


// Event Listeners
startBtn.addEventListener("click", () => {
    scoreAndTime.removeAttribute('class', 'hide');
    introSection.setAttribute('class', 'hide');
    questionContainer.removeAttribute('class', 'hide');
    renderQuiz();
})