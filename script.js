//So I have gone back after a few days of learning to make sure that I understand what exactly I did in my assignment. Creation of variables, I did this to start my coding while trying to think ahead. To be honest I do not know if all of them are needed but that will come from learning and writing cleaner code.
var gameScore = 0

var correct = document.querySelector('#correct')

var startButton = document.querySelector('#start-btn')
var answerOne = document.querySelector('#answer-buttons1')
var answerTwo = document.querySelector('#answer-buttons2')
var answerThree = document.querySelector('#answer-buttons3')
var answerFour = document.querySelector('#answer-buttons4')
var answerFive = document.querySelector('#answer-buttons5')
var beginH1 = document.querySelector('.controls')
var endOfGame = document.querySelector('.gameOver')
var correctTotal = document.querySelector('.gameScore')
correctTotal.innerHTML = gameScore
var clearButton = document.querySelector('.clear')

var questionContainer1 = document.querySelector('.question1')
var questionContainer2 = document.querySelector('.question2')
var questionContainer3 = document.querySelector('.question3')
var questionContainer4 = document.querySelector('.question4')
var questionContainer5 = document.querySelector('.question5')


//Start Button
startButton.addEventListener('click', startGame)
//There are the commands that the start button will trigger to start the game. It will hide itself and the H1 and reveal question 1
function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    beginH1.classList.add('hide')
    questionContainer1.classList.remove('hide')
    endOfGame.classList.add('hide')
    countDownToStart()
}



//Countdown timer. This is kind of the opposite of the start function where it now reveals the end of game messaging
var countdown = 21

function countDownToStart() {
    countdown--
  
    if(countdown >= 0){
    document.querySelector('.countDown').innerHTML = countdown
      setTimeout ( countDownToStart, 1000)
    } else {
        var gameEnd = document.querySelector('.end')
        gameEnd.classList.remove('hide')
        endOfGame.classList.remove('hide')
    }
}

//This where I begin to go through the questions and actually determine if they are correct or not
var questionIndex = 1

questionContainer1.addEventListener('click', checkAnswer)

function checkAnswer(event) {
        console.log(event.target.classList)
    if( event.target.classList.contains('correct') ){
        console.log('You are correct')
        gameScore++
        correctTotal.innerHTML = gameScore
    } else {
      //This is the simple code to remove 5 seconds from the game clock
        console.log('Wrong')
        countdown -= 5
    }


    //This is where the code cycles through the questions upon clicking. Fil (my instructor) helped me with this 
    document.querySelector(`.question${questionIndex}`).classList.add('hide')
    document.querySelector(`.question${questionIndex}`).removeEventListener('click', checkAnswer )
    questionIndex++
    document.querySelector(`.question${questionIndex}`).classList.remove('hide')
    document.querySelector(`.question${questionIndex}`).addEventListener('click', checkAnswer)
    
}

//High Score List This part is where my code started to fall apart as I tried to add local storage but I was able to pull it together. Here variables are created to get the input from the box and create an array for the items to be stored in local storage.
var form = document.querySelector('form')
var ol = document.querySelector('ol')
var button = document.querySelector('button')
var input = document.querySelector('#item')
var itemsArray = []

var itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

//Creating the local storage array where my input will be held and used for display
localStorage.setItem('items', JSON.stringify(itemsArray))
var data = JSON.parse(localStorage.getItem('items'))

//Appending the child to add a li to the ol with the name and score
var liMaker = (text) => {
    var li = document.createElement('li')
    li.textContent = text
    ol.appendChild(li)
  }

//Upon clicking submit the liMaker function runs and adds the li element with the value given in finalScoreName which is now in input1
  form.addEventListener('submit', function (event) {
    event.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(input.value)
    input = input.value = ''
  })

  data.forEach((item) => {
    liMaker(item)
  })

  //Clear button which is self explanitory
  clearButton.addEventListener('click', function () {
    localStorage.clear()
    while (ol.firstChild) {
      ol.removeChild(ol.firstChild)
    }
  })