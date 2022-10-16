let player1Score = 0
let player2Score = 0
let player1Turn = true

let message = document.getElementById('message')
let player1Scoreboard = document.getElementById('player1Scoreboard')
let player2Scoreboard = document.getElementById('player2Scoreboard')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const dices = [player1Dice, player2Dice]
const themeChanger = document.getElementById('themeToggler')
function turnOff() {
    document.getElementById('body').classList.toggle('darkMode')
    document.getElementById('themeToggler').classList.toggle('darkMode')
}


rollBtn.addEventListener('click', function () {
    const dice = Math.floor((Math.random() * 6) + 1)
    if (player1Turn) {
        player1Score += dice
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = dice
        message.textContent = `player 2 Turn`

        for (let current of dices) {
            current.classList.remove('active')
            player2Dice.classList.add('active')
        }

        // player1Turn = false
    } else {
        player2Score += dice
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = dice
        message.textContent = `player 1 Turn`

        // player1Turn = true
        for (let current of dices) {
            current.classList.remove('active')
            player1Dice.classList.add('active')
        }



    }
    player1Turn = !player1Turn

    if (player1Score >= 20) {
        showWinner(1)
    } else if (player2Score >= 20) {
        showWinner(2)
    }
    function showWinner(playerNum) {
        message.textContent = `player ${playerNum} won`
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'block'

    }


})
function reset() {
    player1Turn = true
    message.textContent = `Player 1 Turn`
    player1Dice.textContent = ''
    player2Dice.textContent = ''
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    resetBtn.style.display = 'none'
    rollBtn.style.display = 'block'
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')

}
resetBtn.addEventListener('click', reset)
themeChanger.addEventListener('click', turnOff)