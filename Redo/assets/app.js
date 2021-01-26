//Questions, Choices, and an Answer key
var allQuestions = [{
    question: "1. Inside which HTML element do we put the JavaScript?",
    choices: ['<script>', '<scripting>', '<javascript>', '<link script>'],
    answer: '0',
},
{
    question: "2. What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ['<script name="xxx.js">', '<script href="xxx.js">', '<script src="xxx.js">'],
    answer: '2',
}, {
    question: "3. The external JavaScript file must contain the < script > tag.",
    choices: ['True', 'False',],
    answer: '1',
},
    // {
    //     question: "5. How do you write 'Hello World' in an alert box?",
    //     choices: ['alertBox("Hello World")', 'msg("Hello World:)', 'alert("Hello World)', 'msgBox("Hello World")'],
    //     answer: '2',
    // },
    // {
    //     question: "5. How do you create a function in JavaScript?",
    //     choices: ['function:myFunction()', 'function = myFunction()', 'function myFunction()'],
    //     answer: '2',
    // },
    // {
    //     question: "5. How do you call a function in JavaScript?",
    //     choices: ['myFunction()', 'call function myFunction()', 'call myFunction()'],
    //     answer: '0',
    // }
];

let highScore = []

console.log(allQuestions.length)
//Variables
const quizContentEl = document.getElementById('quizContent')
const scoreAndTime = document.getElementById('scoreTime');
const introSection = document.getElementById('intro-content');
const questionContainer = document.getElementById('questions');
const questionContent = document.getElementById('question-container');
const gameEndContainer = document.getElementById('gameOver');
const timeEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const yourScoreEl = document.getElementById('yourScore');
const nameEl = document.getElementById('name');
const scoreBtn = document.getElementById('submitScore')
const startBtn = document.getElementById('startBtn');
const scoreListEl = document.getElementById('scoreList')
const highScoreDiv = document.getElementById('highScores')


// incrementing variables
let currentQuestion = 0;
let score = 0;
let timeLimit = 60;


init();


//===============================================================
//Sets the timer
setTime = () => {
    //inner function sets the time interval for 1second
    var timerInterval = setInterval(function () {
        //time limit descreses every second by 1
        timeLimit--;
        //renders the time to the page
        timeEl.textContent = `${timeLimit}`;
        if (timeLimit <= 0) {
            clearInterval(timerInterval);
            timeLimit = 50
            gameOver();
        }
    }, 1000);

};

startQuiz = () => {

}


//===============================================================
//Answer Click Event - Event Delegation
questionContent.addEventListener('click', (event) => {
    event.preventDefault();
    var btnValue = event.target.value;

    // Answer Validation
    let answerImage = document.createElement('img')
    answerImage.setAttribute('class', 'answer-img')

    if (btnValue === allQuestions[currentQuestion].answer) {
        // updates the score
        score += 20;
        scoreEl.innerText = score;
        answerImage.src = 'assets/images/correct.png';
        answerImage.alt = 'You answered correctly!';
    } else {
        // Updates the score
        if (score >= 10) {
            score -= 10;
            scoreEl.innerText = score;
        }
        answerImage.src = 'assets/images/wrong.png';
        answerImage.alt = 'You answered correctly!';
    }
    //Appends the image based on the if..else above
    resetState()
    questionContent.appendChild(answerImage)
    // Updates the question #
    currentQuestion++;
    //  Sends score to LS
    localStorage.setItem("Score", score);
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


//===============================================================
// Render's Questions
renderQuiz = () => {
    resetState()
    setTime();
    let askQuestion = allQuestions[currentQuestion].question;
    let questionHeader = document.createElement('h2');
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
    // get Score from LS
    yourScore = localStorage.getItem("Score", score);
    yourScoreEl.innerText = yourScore;
    scoreAndTime.setAttribute('class', 'hide');
    questionContainer.setAttribute('class', 'hide');
    gameEndContainer.removeAttribute('class', 'hide');
}

//===============================================================

//Gets Local storage and renders score list if available
function init() {
    let storedScoreList = JSON.parse(localStorage.getItem('storedScores'))
    if (storedScoreList !== null) {
        highScore = storedScoreList;
        console.log(highScore);
        for (var i = 0; i < highScore.length; i++) {
            let scoreLI = document.createElement('li');
            scoreLI.textContent = `${highScore[i]}`;
            console.log(scoreLI)
            scoreListEl.append(scoreLI)
        }
    } else { return }
}

//===============================================================
// Event Listeners

// Click Event for Start Button
startBtn.addEventListener('click', () => {
    scoreAndTime.classList.remove('class', 'hide');
    viewScoreBtn.classList.add('class', 'hide');
    introSection.classList.add('class', 'hide');
    questionContainer.classList.remove('class', 'hide');
    renderQuiz();
})

// Click event for entering your name at the end
scoreBtn.addEventListener('click', (event) => {
    event.preventDefault();
    quizContentEl.setAttribute('class', 'hide');
    highScoreDiv.removeAttribute('class', 'hide');
    let playerName = nameEl.value;
    let player = `${yourScore} Points - ${playerName}`
    //Push the name + score to the highScore array
    highScore.push(player)
    localStorage.setItem('storedScores', JSON.stringify(highScore))

    // Append Score list
    let scoreLI = document.createElement('li');
    scoreLI.innerText = player;
    scoreListEl.append(scoreLI)
})