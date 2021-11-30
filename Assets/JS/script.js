const startButton = document.getElementById('start-btn')
const startQuiz= document.querySelector(".starter")
const questionContainer= document.getElementById("question-container")
const startContainer= document.getElementById("StarterContainer")
let shuffledQuestions, currectQuestionIndex
let questionElement = document.getElementById ("question")
let answerButtonsElement = document.getElementById("answer-buttons")
var timerEl = document.getElementById("time");
var timerCount;
var timer;
var score = 0
var questionIndex= 0



var questions = [
    {
    title: 'Commonly used data types DO NOT include:',
    alternatives: ['strings','booleans','alerts','numbers'],
    answer:'alerts'
    },
    {
    title: 'The condition in an if / else statement is enclosed within ____.',
    alternatives: ['quotess','curly brackets', 'parentheses','square brackets'],    
    answer:'parenthese'      
     },       
     {   
    title: 'Arrays in JavaScript can be used to store ____.',
    alternatives: ['numbers and strings','other arrays', 'booleans','all of the above'],
    answer: 'all of the above'
    } ,
    {
    title: 'String values must be enclosed within ____ when being assigned to variables.',
    alternatives: ['commas','curly brackets', 'quotes','parentheses','quotes'],
    answer:'quotes'
    },
    {title: 'A very useful tool used during development and debugging for printing content to the debugger is',
    alternatives: ['JavaScript','terminal','for loops','console.log'],
    answer: 'console.log'
    } 
];

startButton.addEventListener('click', startGame)

function startGame() {
console.log('The game has started')
startContainer.style.display ='none';
questionContainer.style.display= 'block';
// shuffledQuestions = question.sort(()=> Math.random()- .5)
questionIndex=0
startTimer();
render();
}


function render(questionIndex) {
    questionElement.innerHTML= "";
    answerButtonsElement.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions.title;
        var userChoices = questions.alternatives;
    answerButtonsElement.textContent = userQuestion;
    };  


// REVIST CODE RIGHT Here. removed elements from the page to create a new list. change html file to reflect the li instead of buttons
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionElement.appendChild(ulCreate);
        answerButtonsElement.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}





// }

// function render(questionIndex) {
//     // Clears existing data 
//     questionsDiv.innerHTML = "";
//     ulCreate.innerHTML = "";
//     // For loops to loop through all info in array
//     for (var i = 0; i < questions.length; i++) {
//         // Appends question title only
//         var userQuestion = questions[questionIndex].title;
//         var userChoices = questions[questionIndex].choices;
//         questionsDiv.textContent = userQuestion;
//     }
//     // New for each for question choices
//     userChoices.forEach(function (newItem) {
//         var listItem = document.createElement("li");
//         listItem.textContent = newItem;
//         questionsDiv.appendChild(ulCreate);
//         ulCreate.appendChild(listItem);
//         listItem.addEventListener("click", (compare));
//     })
// }







// function setNextQuestion (){showQuestion(shuffledQuestions[currectQuestionIndex])

// }

// function showQuestion(questions){
// questionElement.innerText = questions.questions
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
// let questions = [
//     {ask: 'Commonly used data types DO NOT include:',
//     alternatives: [
//         {text:'strings', correct: false},
//         {text:'booleans', correct: false},
//         {tet:'alerts', correct: true},
//         {text:'numbers', correct:false},

//         ]

//     },
//     {
//         ask: 'The condition in an if / else statement is enclosed within ____.',
//         alternatives: [
//             {text:'quotess', correct: false},
//             {text:'curly brackets', correct: false},
//             {tet:'parentheses', correct: true},
//             {text:'square brackets', correct:false},
            
//             ]
    
//         }  ,
//         {
//             ask: 'Arrays in JavaScript can be used to store ____.',
//             alternatives: [
//                 {text:'numbers and strings', correct: false},
//                 {text:'other arrays', correct: false},
//                 {tet:'booleans', correct: false},
//                 {text:'all of the above', correct:true},
                
//                 ]
        
//             } ,
//             {
//                 ask: 'String values must be enclosed within ____ when being assigned to variables.',
//                 alternatives: [
//                     {text:'commas', correct: false},
//                     {text:'curly brackets', correct: false},
//                     {tet:'quotes', correct: true},
//                     {text:'parentheses', correct:false},
                    
//                     ]
            
//                 }, 
//                 {
//                     ask: 'A very useful tool used during development and debugging for printing content to the debugger is',
//                     alternatives: [
//                         {text:'JavaScript', correct: false},
//                         {text:'terminal', correct: false},
//                         {tet:'for loops', correct: false},
//                         {text:'console.log', correct:true},
                
//                         ]
                
//                     } 
// ];