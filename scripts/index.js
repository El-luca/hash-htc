const $boardList = document.querySelectorAll('.board-list')
const $reset = document.querySelector('.section__restart-button')
const $scorePlayer1 = document.querySelector('.section__scoreboard--player1')
const $scorePlayer2 = document.querySelector('.section__scoreboard--player2')
const $winnerName = document.querySelector('.winner-text')
const $playerField1 = document.querySelector('.player1')
const $playerField2 = document.querySelector('.player2')
const $historyMoveList = document.querySelector('.section__text-history')
const $matchHistoryList = document.querySelector('.section__history-last-match')

let currentMove = 'X'
let scorePlayer1 = 0
let scorePlayer2 = 0

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const dicionaryIndexBoard = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto', 'Sexto', 'Sétimo', 'Oitavo', 'Nono']

function printMoveHistory(move, playerName, boardIndex) {
  $historyMoveList.innerHTML += `
  
  <div class="section__print-move-to-player">
  <div class="section__print-last-move">${move}</div>
  <div class="section__print-player-and-box">
    <span class="section__print-history-player1-and-color-gray">${playerName}</span>
    <span class="section__number-square-and-color-blue">${dicionaryIndexBoard[boardIndex]} campo </span>
  </div>
`
}

$reset.addEventListener('click', function () {
  document.location.reload()
})

function pirntWinnerName(winnerName) {
  $winnerName.textContent = winnerName
}

function getScenary() {
  const scenary = []

  for (const $board of $boardList) {
    const move = $board.textContent
    scenary.push(move)
  }
  return scenary
}

function printMatchHitory(winner, scenary) {
  let miniBoardScenary = ''

  for (const move  of scenary){
    miniBoardScenary += `<div class="section__mini-box">${move}</div>`
  }
  $matchHistoryList.innerHTML += `
  <div class="section__scenary-history">
    <span class="section__winner-green">Vencedor</span>
    <p class="section__match-gray">${winner}</p>
  </div>
  <p class="section__scenery">Cenário</p>
  <div class="section__mini-wrapper">
    ${miniBoardScenary}
  </div>
`
}

function toggleMove() {
  currentMove = currentMove == 'X' ? 'O' : 'X' // if ternário (usar só se a variavel for de forma condicional)
  // if (currentMove == 'X') {
  //   currentMove = 'O'
  // } else {
  //   currentMove = 'X'
  // }
}

function verifyGame() {
  let filledField = 0
  for (const condition of winConditions) {
    const fieldIndex0 = condition[0]
    const fieldIndex1 = condition[1]
    const fieldIndex2 = condition[2]

    const $field0 = $boardList[fieldIndex0]
    const $field1 = $boardList[fieldIndex1]
    const $field2 = $boardList[fieldIndex2]

    if ($field0.innerHTML != '' && $field0.innerHTML == $field1.innerHTML && $field1.innerHTML == $field2.innerHTML) {
      return currentMove
    }
  }

  for (const $field of $boardList) {
    if ($field.innerHTML != '') filledField++
  }
  if (filledField === 9) return 'draw'
}

function resetHistoryList() {
  $historyMoveList.innerHTML = '<span class="section__text-history">Históricos de Jogadas</span>'
}

function resetBattlefield() {
  for (const $boardItem of $boardList) {
    $boardItem.innerHTML = ''
  }
}

function bot(){
  const randomNumber = Math.random() * 9
  const index = Math.floor(randomNumber)
  const $boardItem = $boardList[index]
  const game = verifyGame()
  if ($boardItem.textContent != '' && game != 'draw') return bot()
  move(index, 'bot') 
}

function move(boardIndex, type) {
  const $boardItem = $boardList[boardIndex]
  if ($boardItem.innerHTML != '') return
  $boardItem.innerHTML = currentMove
  const gameresult = verifyGame()
  const scenary = getScenary()
  const playerName =
    currentMove === 'X'
      ? $playerField1.value !== ''
        ? $playerField1.value
        : 'Jogador 1'
      : $playerField2.value !== ''
      ? $playerField2.value
      : 'Jogador 2'

  if (gameresult === 'X' || gameresult === 'O') {
    addpoint(gameresult)
    printScore()
    pirntWinnerName(playerName)
    setTimeout(resetBattlefield, 1500)
    setTimeout(resetHistoryList, 1500)
    printMatchHitory(playerName, scenary)
    getScenary()
  }
  if (gameresult == 'draw') {
    setTimeout(resetBattlefield, 1500)
    setTimeout(resetHistoryList, 1500)
    printMatchHitory('empate', scenary)
  }
  printMoveHistory(currentMove, playerName, boardIndex)
  toggleMove()
  if (type === 'user') bot()
}

function addpoint(winner) {
  if (winner == 'X') scorePlayer1++
  if (winner == 'O') scorePlayer2++
}

function printScore() {
  $scorePlayer1.innerHTML = String(scorePlayer1).padStart(2, '0') // por enquanto não usar ...
  $scorePlayer2.innerHTML = scorePlayer2 < 10 ? '0' + scorePlayer2 : scorePlayer2
}

function addBoardListiners() {
  for (let index = 0; index < $boardList.length; index++) {
    const $boardItem = $boardList[index]
    $boardItem.addEventListener('click', function () {
      move(index, 'user')
    })
  }
}

addBoardListiners()
