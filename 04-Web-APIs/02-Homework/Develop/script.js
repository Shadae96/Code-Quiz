const startButton= document.querySelector (".start-btn")
const starterPage= document.querySelector(".starter")
const questionContainer= document.querySelector(".option-container")
let shuffledQuestions, currectQuestionIndex
let questionElement = document.getElementById ("question")
let answerButtonsElement = document.getElementById("answer-btn")



let question = [
    {ask: 'Commonly used data types DO NOT include:',
    alternatives: [
        {text:'strings', correct: false},
        {text:'booleans', correct: false},
        {tet:'alerts', correct: true},
        {text:'numbers', correct:false},

        ]

    },
    {
        ask: 'Commonly used data types DO NOT include:',
        alternatives: [
            {text:'strings', correct: false},
            {text:'booleans', correct: false},
            {tet:'alerts', correct: true},
            {text:'numbers', correct:false},
            
            ]
    
        }  ,
        {
            ask: 'Commonly used data types DO NOT include:',
            alternatives: [
                {text:'strings', correct: false},
                {text:'booleans', correct: false},
                {tet:'alerts', correct: true},
                {text:'numbers', correct:false},
                
                ]
        
            } ,
            {
                ask: 'Commonly used data types DO NOT include:',
                alternatives: [
                    {text:'strings', correct: false},
                    {text:'booleans', correct: false},
                    {tet:'alerts', correct: true},
                    {text:'numbers', correct:false},
                    
                    ]
            
                } 
];


var timerCount;
var timer;

startButton.addEventListener('click',startGame)

function startGame() {
console.log('started')
startButton.classList.add('hide');
questionContainer.classList.remove('hide');
shuffledQuestions = question.sort(()=> Math.random() -.5);
currentQuestionIndex=0;
startTimer();
setNextQuestion();
}



function setNextQuestion (){showQuestion(shuffledQuestions[currectQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText = question.ask
question.alternatives.forEach(alternatives => {
    const button = document.createElement('button')
    button.innerText = alternatives.text
    button.classList.add("button")
    
})}

// function selectAnswer () {

// }

// function endQuiz () {

// }


function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}


    
// function showFianlScore () {

// }