const $boardList = document.querySelectorAll('.board-list')
const $reset = document.querySelector('.section__restart-button')

let currentMove = 'X'

$reset.addEventListener('click', function(){
    document.location.reload()
})

function toggleMove() {
  if (currentMove == 'X') {
    currentMove = 'O'
  } else {
    currentMove = 'X'
  }
}

function verifyGame() {
  if (
    $boardList[0].innerHTML != '' &&
    $boardList[0].innerHTML == $boardList[1].innerHTML &&
    $boardList[1].innerHTML == $boardList[2].innerHTML
  ) {
    return currentMove
  }
  if (
    $boardList[3].innerHTML != '' &&
    $boardList[3].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[5].innerHTML
  ) {
    return currentMove
  }
  if (
    $boardList[6].innerHTML != '' &&
    $boardList[6].innerHTML == $boardList[7].innerHTML &&
    $boardList[7].innerHTML == $boardList[8].innerHTML
  ) {
    return currentMove
  }
  if (
    $boardList[0].innerHTML != '' &&
    $boardList[0].innerHTML == $boardList[3].innerHTML &&
    $boardList[3].innerHTML == $boardList[6].innerHTML
  ) {
    return currentMove
  }
  if (
    $boardList[1].innerHTML != '' &&
    $boardList[1].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[7].innerHTML
  ) {
    return currentMove
  }
  if (
    $boardList[2].innerHTML != '' &&
    $boardList[2].innerHTML == $boardList[5].innerHTML &&
    $boardList[5].innerHTML == $boardList[8].innerHTML
  ) {
    return currentMove
  }
  if (
    $boardList[0].innerHTML != '' &&
    $boardList[0].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[8].innerHTML
  ) {
    return currentMove
  }
  if (
    $boardList[2].innerHTML != '' &&
    $boardList[2].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[6].innerHTML
  ) {
    return currentMove
  }

  if(
    $boardList[0].textContent != '' &&
    $boardList[1].textContent != '' &&
    $boardList[2].textContent != '' &&
    $boardList[3].textContent != '' &&
    $boardList[4].textContent != '' &&
    $boardList[5].textContent != '' &&
    $boardList[6].textContent != '' &&
    $boardList[7].textContent != '' &&
    $boardList[8].textContent != '' 
  ){
    return 'draw'
  }

}

function move(boardIndex){
  const $boardItem = $boardList[boardIndex]
  if ($boardItem.innerHTML != '') {
    return
  }
  $boardItem.innerHTML = currentMove
  const gameresult = verifyGame()
  if(gameresult == 'X' || gameresult == 'O'){
      alert(currentMove)
  }
  if(gameresult == 'draw'){
    alert('Empate')
  }
  toggleMove()
}

function addBoardListiners(){
  for(let index = 0; index< $boardList.length; index++){
    const $boardItem = $boardList[index ]
    $boardItem.addEventListener('click', function(){
      move(index)
    })
  }
}

addBoardListiners()