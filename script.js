let question = document.querySelector('.question');
let options = document.querySelectorAll('.options button');
let submitButton = document.querySelector('submit');

let questionNumber = 0;
let score = 0;
let optionSelected = null;

function loadQuestion(questionNumber){
    question.innerHTML = allQuestions[questionNumber].question;
    options.forEach((button , i)=>{
        button.innerHTML = allQuestions[questionNumber].options[i];
    })
}


loadQuestion(questionNumber);