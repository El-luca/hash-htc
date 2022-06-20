const $boardList = document.querySelectorAll('.board-list')
const $reset = document.querySelector('.section__restart-button')
const $scorePlayer1 = document.querySelector('.section__scoreboard--player1')
const $scorePlayer2 = document.querySelector('.section__scoreboard--player2')
const $winnerName = document.querySelector('.winner-text')
const $playerField1 = document.querySelector('.player1')
const $playerField2 = document.querySelector('.player2')

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

$reset.addEventListener('click', function () {
  document.location.reload()
})

function pirntWinnerName(winnerName) {
  $winnerName.textContent = winnerName
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
  if (filledField == 9) return 'draw'
}

function resetBattlefield() {
  for (const $boardItem of $boardList) {
    $boardItem.innerHTML = ''
  }
}

function move(boardIndex) {
  const $boardItem = $boardList[boardIndex]
  if ($boardItem.innerHTML != '') return
  $boardItem.innerHTML = currentMove
  const gameresult = verifyGame()
  if (gameresult == 'X' || gameresult == 'O') {
    addpoint(gameresult)
    printScore()
    pirntWinnerName('lucas')
    setTimeout(resetBattlefield, 1500)
  }
  if (gameresult == 'draw') {
    setTimeout(resetBattlefield, 1500)
  }
  toggleMove()
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
      move(index)
    })
  }
}

addBoardListiners()
