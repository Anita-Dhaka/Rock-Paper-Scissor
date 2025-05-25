const score = document.getElementById('score');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const result = document.getElementById("result");
const choice = ["Rock", "Paper", "Scissor"];
let userChoice, compChoice, compScore = 0, userScore = 0;
//computer choice 
function compterChoice(){
    let choose = Math.floor(Math.random() * choice.length);
    compChoice = choice[choose];
}
//user choice functions to call in event
rockChoose = ()  => {
    userChoice = choice[0];
    compterChoice();
    display();
}
paperChoose = ()  => {
    userChoice = choice[1];
    compterChoice();
    display();
}
scissorChoose = ()  => {
    userChoice = choice[2];
    compterChoice();
    display();
}

//what to print and score board, call the function
display = () => {
    if(compChoice === userChoice){
        result.textContent = `It's a tie! Both chose ${compChoice}`;
    }
    else if((compChoice === "Paper" && userChoice === "Rock") || (compChoice === "Scissor" && userChoice === "Paper") || (compChoice === "Rock" && userChoice === "Scissor")){
        result.textContent = `Computer wins! ${compChoice} beats ${userChoice}.`;
        compScore = compScore + 1;
    }
    else if((userChoice === "Paper" && compChoice === "Rock") || (userChoice === "Scissor" && compChoice === "Paper") || (userChoice === "Rock" && compChoice === "Scissor")){
        result.textContent = `Player wins! ${userChoice} beats ${compChoice}.`;
        userScore = userScore + 1;
    }
    score.innerHTML = `<span>Computer Score: ${compScore}</span><span>Player Score: ${userScore}</span>`
    winner();
}
//winner
function playAgain(){
    const playAgainButton = document.createElement("button");
    const playAgainText = document.createTextNode("Play again?");
    playAgainButton.id = "play-again";
    playAgainButton.ariaLabel = "Play Again";
    playAgainButton.appendChild(playAgainText);
    document.getElementById('winner').appendChild(playAgainButton);

    playAgainButton.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;
        score.innerHTML = `<span>Computer Score: ${compScore}</span><span>Player Score: ${userScore}</span>`
        document.querySelectorAll('button').forEach(btn => btn.disabled = false);
        result.textContent = "";
        document.getElementById('winner').textContent = "";
        playAgainButton.remove();
    });
}
function  winner(){
    if(userScore === 3){
        document.getElementById('winner').textContent = `Player has won the game!`;
        document.querySelectorAll('button').forEach(btn => btn.disabled = true);
        playAgain();
    }
    else if(compScore === 3){
        document.getElementById('winner').textContent = `Computer has won the game!`;
        document.querySelectorAll('button').forEach(btn => btn.disabled = true);
        playAgain();
    }
}
const playBtn = document.getElementById('play-again');

rock.addEventListener("click", rockChoose);
paper.addEventListener("click", paperChoose);
scissor.addEventListener("click", scissorChoose);