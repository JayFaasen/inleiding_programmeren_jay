const backButton = document.querySelector('#back')
const nextButton = document.querySelector('#next');
const warrior = document.querySelector('#warriorpick');
const getalVeld = document.querySelector('#levelNummer');
const rollButton = document.querySelector('#roll')
const attackButtonFirst = document.querySelector('#attack1')
const attackButtonSecond = document.querySelector('#attack2')
const attackButtonThird = document.querySelector('#attack3')
const winOrLoseFirst = document.querySelector('#winLose1')
const winOrLoseSecond = document.querySelector('#winLose2')
const winOrLoseThird = document.querySelector('#winLose3')
const refreshButton = document.querySelector('#tryAgain')
const attackBoss = document.querySelector('#attackMoonlord')
const winOrLoseBoss = document.querySelector('#winLoseBoss')

const warriorArray = ['character1.png','character2.png','character3.png','character4.png','character5.png']

let warriors = 0;
let getal = 0;
let randomInt = getRandomInt(150)

function nextWarriorPick(){
    warriors = warriors + 1 
    warriors = (warriors + 1) % warriorArray.length; //chatgpt
    veranderWarrior()   
}

function lastWarriorPick(){
    warriors = warriors - 1
    warriors = (warriors - 1 + warriorArray.length) % warriorArray.length; //chatgpt
    veranderWarrior()
}

function veranderWarrior(){
    warrior.src = 'images/'+warriorArray[warriors];
}
  
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function rollLevel(){
    console.log(randomInt)
    getalVeld.textContent = randomInt
}

function attack1(){
    let gewonnen;
    if (randomInt > 25) {
        gewonnen = "You defeated the monster!";
      } else {
       gewonnen = "Really...you lost already?";
      }
      winOrLoseFirst.textContent = gewonnen
}

function attack2(){
    let gewonnen;
    if (randomInt > 75) {
        gewonnen = "Good job!";
      } else {
       gewonnen = "You suck....sorry!";
      }
      winOrLoseSecond.textContent = gewonnen
}

function attack3(){
    let gewonnen;
    if (randomInt > 100) {
        gewonnen = "You won!";
      } else {
       gewonnen = "Try again!";
      }
      winOrLoseThird.textContent = gewonnen
}

function bossFight(){
    let gewonnen;
    if (randomInt > 125) {
        gewonnen = "You defeated the boss!";
      } else {
       gewonnen = "Try again!";
      }
      winOrLoseBoss.textContent = gewonnen
}

//https://stackoverflow.com/questions/5611119/how-to-make-a-refresh-button-using-javascript
function refreshPage(){
    window.location.reload("Refresh")
}

nextButton.addEventListener("mouseenter", nextWarriorPick)
backButton.addEventListener("mouseenter", lastWarriorPick)
rollButton.addEventListener("click", rollLevel)
attackButtonFirst.addEventListener("click", attack1)
attackButtonSecond.addEventListener("click", attack2)
attackButtonThird.addEventListener("click", attack3)
attackBoss.addEventListener('click', bossFight)
refreshButton.addEventListener('click', refreshPage)
