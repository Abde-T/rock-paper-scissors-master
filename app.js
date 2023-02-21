function ShowRules(){
    document.querySelector(" .rules__wrapper").style.display = "block";
}
function HideRules(){
    document.querySelector(" .rules__wrapper").style.display = "none";
}

const computerChoise =  document.getElementById('computer-choice');
const playerChoice = document.getElementById('User-choice');
const scoreDisplay = document.getElementById('score');
const resultDisplay = document.getElementById('result');

const possibleChoises = document.querySelectorAll('.choices');
let userChoise
let compChoise
let score
let result

possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) =>{
    userChoise =  e.target.classList
    playerChoice.innerHTML = userChoise
    generateComputerChoice()
    getResult()
  }))

  console.log(userChoise)

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*5)+1
  
    if(randomNumber === 1){
      compChoise = 'rock'
    }
    if(randomNumber === 2){
      compChoise = 'scissors'
    }
    if(randomNumber === 3){
      compChoise = 'paper'
    }
    if(randomNumber === 4){
        compChoise = 'lizard'
    }
      if(randomNumber === 5){
        compChoise = 'spock'
    }
    computerChoise.innerHTML = compChoise
  }

function getResult(){
  if(compChoise === userChoise){
    result = 'Draw'
  }

  if(compChoise === 'rock' && userChoise === "paper"){
    result = 'YOU LOSE'
  }
  if(compChoise === 'rock' && userChoise === "scissors"){
    result = 'YOU WIN'
  }
  if(compChoise === 'rock' && userChoise === "lizard"){
    result = 'YOU WIN'
  }
  if(compChoise === 'rock' && userChoise === "spock"){
    result = 'YOU lose'
  }


  if(compChoise === 'paper' && userChoise === "rock"){
    result = 'YOU WIN'
  }
  if(compChoise === 'paper' && userChoise === "scissors"){
    result = 'YOU LOSE'
  }
  if(compChoise === 'paper' && userChoise === "spock"){
    result = 'YOU LOSE'
  }
  if(compChoise === 'paper' && userChoise === "lizard"){
    result = 'YOU WIN'
  }


  if(compChoise === 'scissors' && userChoise === "paper"){
    result = 'YOU WIN'
  }
  if(compChoise === 'scissors' && userChoise === "rock"){
    result = 'YOU LOSE'
  }
  if(compChoise === 'scissors' && userChoise === "spock"){
    result = 'YOU WIN'
  }
  if(compChoise === 'scissors' && userChoise === "lizard"){
    result = 'YOU LOSE'
  }


  if(compChoise === 'lizard' && userChoise === "rock"){
    result = 'YOU WIN'
  }
  if(compChoise === 'lizard' && userChoise === "spock"){
    result = 'YOU LOSE'
  }
  if(compChoise === 'lizard' && userChoise === "scissors"){
    result = 'YOU WIN'
  }
  if(compChoise === 'lizard' && userChoise === "paper"){
    result = 'YOU LOSE'
  }


  if(compChoise === 'spock' && userChoise === "rock"){
    result = 'YOU LOSE'
  }
  if(compChoise === 'spock' && userChoise === "scissors"){
    result = 'YOU LOSE'
  }
  if(compChoise === 'spock' && userChoise === "lizard"){
    result = 'YOU WIN'
  }
  if(compChoise === 'spock' && userChoise === "paper"){
    result = 'YOU WIN'
  }
  resultDisplay.innerHTML = result

}
