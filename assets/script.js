//quiz from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS

var quiz = {
    question1: "Inside which HTML element do we put the JavaScript?",
    q1Answer: {
        option1: "<script>",
        option2: "<javascript>",
        option3: "<scripting>",
        option4: "<js>"
    },
    question2: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    q2Answer: {
        option1: "<script src='xxx.js'",
        option2: "<script name='xxx.js'",
        option3: "<script href='xxx.js'"
    },
    question3: "The external JavaScript file must contain the <script> tag.",
    q3Answer: {
        option1: 'True',
        option2: 'False'
    }
}

var questionEl = document.createElement("h2");
var answerEl = document.createElement("button");
