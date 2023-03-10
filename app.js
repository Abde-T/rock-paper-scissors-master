function ShowRules() {
  document.querySelector(" .rules__wrapper").style.display = "block";
}
function HideRules() {
  document.querySelector(" .rules__wrapper").style.display = "none";
}
function showSelection() {
  document.querySelector(" .results__wrapper").style.display = "flex";
  document.querySelector(" .pentagon").style.display = "none";
}
function hideSelection() {
  document.querySelector(" .results__wrapper").style.display = "none";
  document.querySelector(" .pentagon").style.display = "flex";
  getResult()
}

const computerChoise = document.getElementById("computer__choice");
const playerChoice = document.getElementById("User__choice");
const scoreDisplay = document.getElementById("score");
const resultsDisplay = document.getElementById("result");


const possibleChoises = Array.from(document.querySelectorAll(".choices"));
let userChoise;
let compChoise;
let score = 0;
let result;



possibleChoises.forEach((possibleChoise) =>
  possibleChoise.addEventListener("click", (e) => {
    
    userChoise = e.target.id
    
    playerChoice.innerHTML = `<div class="${userChoise} choices">
    <img id="lizard" src="./images/icon-${userChoise}.svg" alt="" onclick="showSelection()">
    </div>
    ` ;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;

  if (randomNumber === 1) {
    compChoise = "rock";
  }
  if (randomNumber === 2) {
    compChoise = "scissors";
  }
  if (randomNumber === 3) {
    compChoise = "paper";
  }
  if (randomNumber === 4) {
    compChoise = "lizard";
  }
  if (randomNumber === 5) {
    compChoise = "spock";
  }
  computerChoise.innerHTML = `<div class="${compChoise} choices">
  <img id="lizard" src="./images/icon-${compChoise}.svg" alt="" onclick="showSelection()">
</div>`;

}

function getResult() {
  if (compChoise === userChoise) {
    result = "Draw";
  }
    if (compChoise === "rock" && userChoise === "paper") {
      result = "YOU LOSE";
    }
    if (compChoise === "rock" && userChoise === "spock") {
      result = "YOU lose";
    }
    if (compChoise === "paper" && userChoise === "scissors") {
      result = "YOU LOSE";
    }
    if (compChoise === "paper" && userChoise === "spock") {
      result = "YOU LOSE";
    }
    if (compChoise === "scissors" && userChoise === "rock") {
      result = "YOU LOSE";
    }
    if (compChoise === "scissors" && userChoise === "lizard") {
      result = "YOU LOSE";
    }
    if (compChoise === "lizard" && userChoise === "spock") {
      result = "YOU LOSE";
    }
    if (compChoise === "lizard" && userChoise === "paper") {
      result = "YOU LOSE";
    }
    if (compChoise === "spock" && userChoise === "rock") {
      result = "YOU LOSE";
    }
    if (compChoise === "spock" && userChoise === "scissors") {
      result = "YOU LOSE";
    }
    if (compChoise === "rock" && userChoise === "scissors") {
      result = "YOU WIN";
    }
    if (compChoise === "rock" && userChoise === "lizard") {
      result = "YOU WIN";
    }
    if (compChoise === "scissors" && userChoise === "paper") {
      result = "YOU WIN";
    }
    if (compChoise === "scissors" && userChoise === "spock") {
      result = "YOU WIN";
    }
    if (compChoise === "paper" && userChoise === "rock") {
      result = "YOU WIN";
    }
    if (compChoise === "paper" && userChoise === "lizard") {
      result = "YOU WIN";
    }
    if (compChoise === "lizard" && userChoise === "rock") {
      result = "YOU WIN";
    }
    if (compChoise === "lizard" && userChoise === "scissors") {
      result = "YOU WIN";
    }
    if (compChoise === "spock" && userChoise === "lizard") {
      result = "YOU WIN";
    }
    if (compChoise === "spock" && userChoise === "paper") {
      result = "YOU WIN";
    }
    
    if(result=="YOU WIN"){
      scoreDisplay.innerHTML = score++
    }else if(result =="YOU LOSE"){
      scoreDisplay.innerHTML = score--
    }else if(result =="YOU LOSE" && score == 0){
      scoreDisplay.innerHTML = score
    }

    setTimeout(() =>{
      resultsDisplay.innerHTML = ` <div class="result" >
      <div id="result">${result}</div>
      <h1 class="replay" onclick="hideSelection()">PLAY AGAIN</h1>
    </div>`;
    }, 1000)
}

