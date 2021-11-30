const startButton = document.getElementById('start-btn')
const startQuiz= document.querySelector(".starter")
const questionContainer= document.getElementById("question-container")
const startContainer= document.getElementById("StarterContainer")
let shuffledQuestions, currectQuestionIndex
let questionElement = document.getElementById ("answer-buttons")
let answerButtonsElement = document.getElementById("btn")
var timerEl = document.getElementById("time");
var timerCount;
var timer;

startButton.addEventListener('click', startGame)

function startGame() {
console.log('The game has started')
startContainer.style.display ='none';
questionContainer.style.display= 'block';
shuffledQuestions = question.sort(()=> Math.random()- .5)
currectQuestionIndex=0
startTimer();
setNextQuestion();
}



function setNextQuestion (){showQuestion(shuffledQuestions[currectQuestionIndex])

}

function showQuestion(question){
questionElement.innerText = question.question
// question.alternatives.forEach(alternatives => {
//     const button = document.createElement('button')
//     button.innerText = alternatives.text
//     button.classList.add("button")
//     if (alternatives.correct) {
//         button.dataset.correct = alternatives.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
    
// })
}

// function selectAnswer () {

// }

// function endQuiz () {

// }


function startTimer () { 
    var secondsLeft = 75;
    var countDown = setInterval(() => {
    secondsLeft --;
    timerEl.textContent = "Time Left: " + secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(countDown);
        }
    }, 1000);
}




    
// function showFianlScore () {

// }
let questions = [
    {ask: 'Commonly used data types DO NOT include:',
    alternatives: [
        {text:'strings', correct: false},
        {text:'booleans', correct: false},
        {tet:'alerts', correct: true},
        {text:'numbers', correct:false},

        ]

    },
    {
        ask: 'The condition in an if / else statement is enclosed within ____.',
        alternatives: [
            {text:'quotess', correct: false},
            {text:'curly brackets', correct: false},
            {tet:'parentheses', correct: true},
            {text:'square brackets', correct:false},
            
            ]
    
        }  ,
        {
            ask: 'Arrays in JavaScript can be used to store ____.',
            alternatives: [
                {text:'numbers and strings', correct: false},
                {text:'other arrays', correct: false},
                {tet:'booleans', correct: false},
                {text:'all of the above', correct:true},
                
                ]
        
            } ,
            {
                ask: 'String values must be enclosed within ____ when being assigned to variables.',
                alternatives: [
                    {text:'commas', correct: false},
                    {text:'curly brackets', correct: false},
                    {tet:'quotes', correct: true},
                    {text:'parentheses', correct:false},
                    
                    ]
            
                }, 
                {
                    ask: 'A very useful tool used during development and debugging for printing content to the debugger is',
                    alternatives: [
                        {text:'JavaScript', correct: false},
                        {text:'terminal', correct: false},
                        {tet:'for loops', correct: false},
                        {text:'console.log', correct:true},
                
                        ]
                
                    } 
];