const $boardList = document.querySelectorAll('.board-list')
const $reset = document.querySelector('.section__restart-button')
const $scorePlayer1 = document.querySelector('.section__scoreboard--player1')
const $scorePlayer2 = document.querySelector('.section__scoreboard--player2')
const $winnerName = document.querySelector('.winner-text')
const $playerField1 = document.querySelector('.player1')
const $playerField2 = document.querySelector('.player2')
const $historyMoveList = document.querySelector('.section__text-history')
const $matchHistoryList = document.querySelector('.section__history-last-match')
const $switcherBOT = document.querySelector('.section__bot-or-player')
const $switcherBestOf = document.querySelector('.section__thee-or-five ')

let currentMove = 'X'
let scorePlayer1 = 0
let scorePlayer2 = 0
let gameStart = true
let botActive = false
let bestOf = 3

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

function printWinnerName(winnerName) {
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

function verifyBestOf() {
  if (scorePlayer1 === 2 && bestOf === 3){
    return 'X'
  }
  if (scorePlayer1 === 3 && bestOf === 5){
    return 'X'
  } 
  if (scorePlayer2 === 2 && bestOf === 3){
    return 'O'
  }
  if (scorePlayer2 === 3 && bestOf === 5){
    return 'O'
  }
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

function resetScoreboard() {
  $scorePlayer1.textContent = '00'
  $scorePlayer2.textContent = '00'
}

function resetBattlefield() {
  for (const $boardItem of $boardList) {
    $boardItem.innerHTML = ''
  }
}

function toggleBestOf() {
  bestOf = bestOf === 3 ? 5 : 3
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
  if (!gameStart) return
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
    gameStart = false
    addpoint(gameresult)
    printScore()
    printWinnerName(playerName)
    setTimeout(resetBattlefield, 1500)
    setTimeout(resetHistoryList, 1500)
    printMatchHitory(playerName, scenary)
    // getScenary()
    setTimeout(function(){
      gameStart = true
    }, 1500)
  }
  if (gameresult == 'draw') {
    gameStart = false
    setTimeout(resetBattlefield, 1500)
    setTimeout(resetHistoryList, 1500)
    printMatchHitory('empate', scenary)
    setTimeout(function(){
      gameStart = true
    }, 1500)
  }

  const bestOfResult = verifyBestOf()


  printMoveHistory(currentMove, playerName, boardIndex)
  toggleMove()
  if (type === 'user' && botActive) bot()
  if (bestOfResult !== undefined) {
    resetScoreboard()
    scorePlayer1 = 0
    scorePlayer2 = 0
    alert(`o ganhador foi ${bestOfResult}`)
  }
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

$switcherBOT.addEventListener('click', function(){
  $switcherBOT.classList.toggle('active')
  botActive = !botActive
  $playerField2.value = botActive ? 'BOT' : ''
  $playerField2.disabled = !$playerField2.disabled
})

$switcherBestOf.addEventListener('click', function(){
  $switcherBestOf.classList.toggle('active')
  toggleBestOf()
})