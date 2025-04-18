let question = document.querySelector('.question');
let options = document.querySelectorAll('.options button');
let submitButton = document.querySelector('.submit');
let displayScore = document.querySelector('.score');
let questionNumber = 1;
let score = 0;
let optionSelected = null;

function loadQuestion(questionNumber){
    question.innerHTML = allQuestions[questionNumber].question;
    options.forEach((button , i)=>{
        button.innerHTML = allQuestions[questionNumber].options[i];
        options.forEach(btn => btn.classList.remove("selected"));

    })

}
function chooseOption(){
    
}
options.forEach((element, index)=>{
    element.addEventListener('click',(event)=>{
        console.log(event.currentTarget.innerHTML)
        optionSelected = event.currentTarget.innerHTML;
        
        // console.log(score)
        options.forEach(btn => btn.classList.remove("selected"));
        event.currentTarget.classList.add("selected");

    })
    
})
function showScore() {
    const main = document.querySelector('.main');

    main.innerHTML = `
        <div class="score">Your previous score is ${score}</div>
        <h2>Quiz is completed</h2> 
        <p>Your score is ${score}/10</p>
        <button class="restart py-2 px-4 bg-orange-700 rounded-lg hover:bg-blue-600 transition-all">Restart</button>
    `;

    // Add event listener AFTER the button is in the DOM
    document.querySelector('.restart').addEventListener('click', () => {
        // Reset values
        questionNumber = 0;
        score = 0;
        optionSelected = null;

        // Restore quiz UI from scratch or reload the page
        window.location.reload(); // easiest option
        // OR re-create full quiz UI if you want to do it manually
    });
}

submitButton.addEventListener('click',()=>{
     if(optionSelected === null){
        return alert("Please choose and option!");
        
    }
    else if(optionSelected === allQuestions[questionNumber].answer){
        score++;
    }
    
    questionNumber++;
    displayScore.innerHTML = `Questions: ${questionNumber}/10`
    
    loadQuestion(questionNumber);
    optionSelected = null;
    if(questionNumber === 10){
        showScore();
    }
})






loadQuestion(questionNumber);