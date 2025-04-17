let question = document.querySelector('.question');
let options = document.querySelectorAll('.options button');
let submitButton = document.querySelector('.submit');
let displayScore = document.querySelector('.score');
let questionNumber = 0;
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
function showScore (){
    document.querySelector('.main').innerHTML = `
    <div class= "score"> your previous score is ${score}</div>
    <h2> Quiz is completed </h2> 
    <p> your score is ${score}/10`
    displayScore.innerHTML = score;
}
submitButton.addEventListener('click',()=>{
     if(optionSelected === null){
        return alert("Please choose and option!");
        
    }
    else if(optionSelected === allQuestions[questionNumber].answer){
        score++;
    }
    
    questionNumber++;
    
    loadQuestion(questionNumber);
    optionSelected = null;
    if(questionNumber === 11){
        showScore();
    }
})






loadQuestion(questionNumber);