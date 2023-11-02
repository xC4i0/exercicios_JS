const result = document.querySelector(".result")
const humanScore = document.querySelector("#main-score")
const machineScore = document.querySelector("#machine-score")


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {



    playTheGame(humanChoice, playMachine())
}


//Decisão do PC
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices [randomNumber]
}


//Vendo quem ganhou
const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)

    if(human === machine) {
        result.innerHTML = "DEU EMPATE!!"
        result.style.color = "#ED91BF"
    } else if (  (human === 'paper' && machine === 'rock') || 
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
        result.style.color = "#ED91BF"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa!"
        result.style.color = "#ED91BF"
    }
}

/*

*/