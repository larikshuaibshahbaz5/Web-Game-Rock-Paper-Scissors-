let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const comScoreBoard = document.querySelector("#com-score");
const modeButton = document.querySelector("#mode");

let mode = 0;
const modeClasses = ["light-mode", "dark-mode", "perple-mode"];
const nextModeLabels = ["Dark", "Perple", "Light"];

modeButton.addEventListener("click", () => {
    mode = (mode + 1) % modeClasses.length;

    document.body.classList.remove(...modeClasses);
    document.body.classList.add(modeClasses[mode]);
    modeButton.textContent = nextModeLabels[mode];
});

const comChoicef = () =>{
    const option = ["Rock", "Paper", "Scissor"]
    const comChoice = Math.floor(Math.random() * 3);
    return option[comChoice];
}

const userChoicef = (userChoice) =>{
    console.log("User Choice is : " + userChoice );

}

const drawGame = () => {
        console.log("Game was Draw");
        msg.innerHTML = "Game is a Draw Try Again";
        msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, comChoice) => {
            if(userWin){
                userScore++;
                userScoreBoard.innerHTML = userScore;
                msg.innerHTML = `You Wins! Your ${userChoice} beats ${comChoice}`;
                msg.style.backgroundColor = "green";
            } else {
                computerScore++;
                comScoreBoard.innerHTML = computerScore;
                msg.innerHTML = `You Lose! ${comChoice} beats your ${userChoice}`;
                msg.style.backgroundColor = "red";
            }
        }
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        userChoicef(userChoice);
        let comChoice = comChoicef();
        console.log("Computer Choice is : " + comChoice);
        if(userChoice === comChoice){
            drawGame();
        }
            else {
                let userWin = true;
                if(userChoice === "Rock"){
                userWin = comChoice === "Paper" ? false : true;
                }   
                else if(userChoice === "Paper"){
                userWin = comChoice === "Scissor" ? false : true;
                } else{
                userWin = comChoice === "Rock" ? false : true;
                }
                showWinner(userWin, userChoice, comChoice);
            }
    });
});