var startButton = document.querySelector('.start-btn')
var questionContainer1 = document.querySelector('.question1')
var questionContainer2 = document.querySelector('.question2')

//Start Button
startButton.addEventListener('click', startGame)

function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainer1.classList.remove('hide')
}

//countdown timer

//incorrect score -5 seconds

//pick an answer Q1
function answer1 () {
    var answerOne = document.querySelector('.btn1')
    questionContainer1.classList.add('hide')
    answerOne.addEventListener('click', answer1)
}

//move to next question
function question2 () {
    questionContainer1.classList.add('hide')
    questionContainer2.classList.remove('hide')
}