var gameScore = 0

var correct = document.querySelector('#correct')

var startButton = document.querySelector('.start-btn')
var answerOne = document.querySelector('#answer-buttons1')
var answerTwo = document.querySelector('#answer-buttons2')
var answerThree = document.querySelector('#answer-buttons3')
var answerFour = document.querySelector('#answer-buttons4')
var answerFive = document.querySelector('#answer-buttons5')
var beginH1 = document.querySelector('.controls')
var endOfGame = document.querySelector('.gameOver')
var correctTotal = document.querySelector('.gameScore').innerHTML = gameScore


var questionContainer1 = document.querySelector('.question1')
var questionContainer2 = document.querySelector('.question2')
var questionContainer3 = document.querySelector('.question3')
var questionContainer4 = document.querySelector('.question4')
var questionContainer5 = document.querySelector('.question5')


//Start Button
startButton.addEventListener('click', startGame)

function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    beginH1.classList.add('hide')
    questionContainer1.classList.remove('hide')
    countDownToStart()
}



//countdown timer
var countdown = 10

function countDownToStart() {
    countdown--
  
    if(countdown >= 0){
    document.querySelector('.countDown').innerHTML = countdown
      setTimeout ( countDownToStart, 1000)
    }   
}


var questionIndex = 1

questionContainer1.addEventListener('click', checkAnswer)

function checkAnswer(event) {
        console.log(event.target.classList)
    if( event.target.classList.contains('correct') ){
        console.log('You are correct')
        gameScore++
    }
    //console.log('Check Answer', event.target.id)
    document.querySelector(`.question${questionIndex}`).classList.add('hide')
    document.querySelector(`.question${questionIndex}`).removeEventListener('click', checkAnswer )
    questionIndex++
    document.querySelector(`.question${questionIndex}`).classList.remove('hide')
    document.querySelector(`.question${questionIndex}`).addEventListener('click', checkAnswer)
    
}


//pick an answer Q1
// answerOne.addEventListener('click', answer1)

// function answer1 () {
//     questionContainer1.classList.add('hide')
//     questionContainer2.classList.remove('hide')
// }

// //move to next question
// answerTwo.addEventListener('click', answer2)

// function answer2 () {
//     questionContainer2.classList.add('hide')
//     questionContainer3.classList.remove('hide')
// }

// answerThree.addEventListener('click', answer3)

// function answer3 () {
//     questionContainer3.classList.add('hide')
//     questionContainer4.classList.remove('hide')
// }

// answerFour.addEventListener('click', answer4)

// function answer4 () {
//     questionContainer4.classList.add('hide')
//     questionContainer5.classList.remove('hide')
// }

// //Answer comparrison if else statement
// correct.addEventListener('click', correctChoice)