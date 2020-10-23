var questionContent = document.getElementById( "question-content" )
var answerOptions = document.getElementById( "answer-options" )

//quiz questions
const questions = [
    {
        question: 'Inside which HTML element do we put the Javascript?',
        potentialAnswers: ['<scripting', '<javascript>', '<js>', '<script>'],
        correctAnswer: '<javascript>'
    },
    {
        question: 'Where is the correct place to insert Javascript',
        potentialAnswers: ['Both the <head> section and the <body> section are correct', 'The <body> section', 'The <head> section'],
        correctAnswer: 'Both the <head> section and the <body> section are correct'
    },
    {
        question: 'How do you write "Hello World" in an alert box',
        potentialAnswers: ['alert("Hello World");', 'alertBox("hello World);', 'window("Hellow World);', "msgBox(Hello World);"],
        correctAnswer: 'alert("Hello World");'
    },
    {
        question: 'How do you create a function?',
        potentialAnswers: ['function:myFunction()', 'function=myFunction()', 'function myFunction()', 'myFunction():function'],
        correctAnswer: 'myFunction():function'
    },
    {
        question: 'How do you write a conditional statement for executing some statements only if "i" is NOT equal to 5?',
        potentialAnswers: ['if (i!=5)', 'if =! 5 then', 'if (i<>5)', 'if <>5'],
        correctAnswer: 'if (i!=5)'
    }
]
//logs which question function is on
var questionNumber = 0;

//score keeper
var scoreKeeper = document.getElementById( "score" );
var counter = 0;

//timer
var timeLeft = questions.length * 15;
var timerID;
var message = "Time is up!";

//global variables to reference
var titleIntro = document.querySelector( "#title-intro" );
var quizContent = document.querySelector( "#quiz-content" )
var startBtn = document.querySelector( '#start-button' )
var timeEl = document.querySelector( '#timer' )

//questions for the quiz as an object
function renderQuestions() {
    questionContent.innerHTML = questions[questionNumber].question;

    for ( var i = 0; i < questions[questionNumber].potentialAnswers.length; i++ ) {
        var btn = document.createElement( "button" );
        btn.innerText = questions[questionNumber].potentialAnswers[i];
        btn.setAttribute( 'class', 'btn btn-success btn-block' );
        answerOptions.appendChild( btn );
        btn.addEventListener( "click", checkAnswers );
    }
}

//checks answers against correct answer and continues to the next question
function checkAnswers( event ) {

    var userSelect = event.target.textContent;

    var correctAnswer = questions[questionNumber].correctAnswer

    if ( userSelect === correctAnswer ) {
        alert( "Correct!" );
        counter++;
    }
    else {
        alert( "Wrong answer!" )
        timeLeft -= 10
    }
    questionNumber++;
    scoreKeeper.innerHTML = ( "Score: " + counter );
    //clears the space for the next question and answers
    questionContent.innerHTML = "";
    answerOptions.innerHTML = "";

    if ( questionNumber > 4 ) {
        endQuiz();
    }
    else {
        renderQuestions();
    }

}

//start button - starts quiz
function startQuiz() {

    //hides intro section
    titleIntro.setAttribute( "class", "hide" );

    //displays the quiz section
    quizContent.setAttribute( "class", "show" );

    //use setInterval to indicate the length of time between each execution of a fuction
    timerID = setInterval( countdown, 1000 );

    //set the time element to display the text that is timeLeft
    timeEl.textContent = timeLeft;
    renderQuestions();
}

function countdown() {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if ( timeLeft <= 0 ) {
        endQuiz();
    }
}

function endQuiz() {
    //what should happen when the quiz ends?
    //stop the time
    clearInterval( timeLeft );
    timeEl.textContent = message;
    //display final score screen
}

//highest score - compile initials and score
startBtn.addEventListener( 'click', startQuiz )