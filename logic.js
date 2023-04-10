//Declaring variables
var playerChoice = "";
var playerWins = 0, computerWins = 0, round = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//BUTTONS
//rock
rock.addEventListener('click', () => {
    console.log("ROCK");
    playRound("rock");
});
//paper
paper.addEventListener('click', () => {
    console.log("PAPER");
    playRound("paper");
});
//scissors
scissors.addEventListener('click', () => {
    console.log("SCISSORS");
    playRound("scissors");
});

//GETS COMPUTER CHOICE
function getComputerChoice()
{
    const options = ["Rock", "Paper", "Scissors"]
    const randomChoice = options[Math.floor(Math.random() * options.length)]
    return randomChoice
}

//PLAY A ROUND FUNCTION 
function playRound(playerChoice)
{
    //removes result image
    document.getElementById('win').style.display = 'none';
    document.getElementById('loser').style.display = 'none';
    //gets computer choice from function
    computerChoice = getComputerChoice();

    
    
    //Rock Choices
    if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper")
    {
        document.getElementById('gameinfo').innerHTML = "<span style='color: red'> You Lose!</span> Paper beats Rock";
        console.log("You Lose! Paper beats Rock")
        computerWins += 1
    }
    else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors")
    {
        document.getElementById('gameinfo').innerHTML = "<span style='color: green'> You Win!</span> Rock beats Scissors";
        console.log("You Win! Rock beats Scissors")
        playerWins += 1
    }
    else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock")
    {
        document.getElementById('gameinfo').innerHTML = "<span style='color: orange'> Its a Tie!</span>";
        console.log("Its a Tie!")
    }

    //Paper Choices
    if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock")
    {
        document.getElementById('gameinfo').innerHTML = "<span style='color: green'> You Win!</span> Paper beats Rock";
        console.log("You Win! Paper beats Rock")
        playerWins += 1
    }
    else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors")
    {
        document.getElementById('gameinfo').innerHTML = "<span style='color: red'> You Lose!</span> Scissors beats Paper";
        console.log("You Lose! Scissors beats Paper")
        computerWins += 1
    }
    else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "paper")
    {
        document.getElementById('gameinfo').innerHTML = "<span style='color: orange'> Its a Tie!</span>";
        console.log("Its a Tie!")
    }

    //Scissors Choices
    if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper")
    {
        document.getElementById('gameinfo').innerHTML = "<span style='color: green'> You Win!</span> Scissors beats Paper";
        console.log("You Win! Scissors beats Paper")
        playerWins += 1
    }
    else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock")
    {
        document.getElementById('gameinfo').innerHTML = "<span style='color: red'> You Lose!</span> Rock beats Scissors";
        console.log("You Lose! Rock beats Scissors")
        computerWins += 1
    }
    else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "scissors")
    {
        document.getElementById('gameinfo').innerHTML = "<span style='color: orange'> Its a Tie!</span>";
        console.log("Its a Tie!")
    }

    //displays playerwins, computerwins, and round # + increments round
    document.getElementById('playerwins').innerHTML = "Player Wins: " + playerWins;
    document.getElementById('computerwins').innerHTML = "Computer Wins: " + computerWins;
    round++;
    document.getElementById('round').innerHTML = "Round: " + round;

    //check who won the game and reset variables
    if (playerWins === 5) {
        //displays result image if player wins
        document.getElementById('win').style.display = 'block';
        
        playerWins = 0;
        computerWins = 0;
        round = 0;
    }
    if (computerWins === 5) {
        //displays result image if computer wins
        document.getElementById('loser').style.display = 'block';

        computerWins = 0;
        playerWins = 0;
        round = 0;
    }
}