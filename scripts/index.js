const $boardInten0 = document.querySelector('.board-iten-0')
const $boardInten1 = document.querySelector('.board-iten-1')
const $boardInten2 = document.querySelector('.board-iten-2')
const $boardInten3 = document.querySelector('.board-iten-3')
const $boardInten4 = document.querySelector('.board-iten-4')
const $boardInten5 = document.querySelector('.board-iten-5')
const $boardInten6 = document.querySelector('.board-iten-6')
const $boardInten7 = document.querySelector('.board-iten-7')
const $boardInten8 = document.querySelector('.board-iten-8')
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
    $boardInten0.innerHTML != '' &&
    $boardInten0.innerHTML == $boardInten1.innerHTML &&
    $boardInten1.innerHTML == $boardInten2.innerHTML
  ) {
    return currentMove
  }
  if (
    $boardInten3.innerHTML != '' &&
    $boardInten3.innerHTML == $boardInten4.innerHTML &&
    $boardInten4.innerHTML == $boardInten5.innerHTML
  ) {
    return currentMove
  }
  if (
    $boardInten6.innerHTML != '' &&
    $boardInten6.innerHTML == $boardInten7.innerHTML &&
    $boardInten7.innerHTML == $boardInten8.innerHTML
  ) {
    return currentMove
  }
  if (
    $boardInten0.innerHTML != '' &&
    $boardInten0.innerHTML == $boardInten3.innerHTML &&
    $boardInten3.innerHTML == $boardInten6.innerHTML
  ) {
    return currentMove
  }
  if (
    $boardInten1.innerHTML != '' &&
    $boardInten1.innerHTML == $boardInten4.innerHTML &&
    $boardInten4.innerHTML == $boardInten7.innerHTML
  ) {
    return currentMove
  }
  if (
    $boardInten2.innerHTML != '' &&
    $boardInten2.innerHTML == $boardInten5.innerHTML &&
    $boardInten5.innerHTML == $boardInten8.innerHTML
  ) {
    return currentMove
  }
  if (
    $boardInten0.innerHTML != '' &&
    $boardInten0.innerHTML == $boardInten4.innerHTML &&
    $boardInten4.innerHTML == $boardInten8.innerHTML
  ) {
    return currentMove
  }
  if (
    $boardInten2.innerHTML != '' &&
    $boardInten2.innerHTML == $boardInten4.innerHTML &&
    $boardInten4.innerHTML == $boardInten6.innerHTML
  ) {
    return currentMove
  }
}
$boardInten0.addEventListener('click', function () {
  if ($boardInten0.innerHTML != '') {
    return
  }
  $boardInten0.innerHTML = currentMove
  const gameresult = verifyGame()
  if(gameresult == 'X' || gameresult == 'O'){
      alert(currentMove)
  }
  toggleMove()
})
$boardInten1.addEventListener('click', function () {
  if ($boardInten1.innerHTML != '') {
    return
  }
  $boardInten1.innerHTML = currentMove
  const gameresult = verifyGame()
  if(gameresult == 'X' || gameresult == 'O'){
      alert(currentMove)
  }
  toggleMove()
})
$boardInten2.addEventListener('click', function () {
  if ($boardInten2.innerHTML != '') {
    return
  }
  $boardInten2.innerHTML = currentMove
  const gameresult = verifyGame()
  if(gameresult == 'X' || gameresult == 'O'){
      alert(currentMove)
  }
  toggleMove()
})
$boardInten3.addEventListener('click', function () {
  if ($boardInten3.innerHTML != '') {
    return
  }
  $boardInten3.innerHTML = currentMove
  const gameresult = verifyGame()
  if(gameresult == 'X' || gameresult == 'O'){
      alert(currentMove)
  }
  toggleMove()
})
$boardInten4.addEventListener('click', function () {
  if ($boardInten4.innerHTML != '') {
    return
  }
  $boardInten4.innerHTML = currentMove
  const gameresult = verifyGame()
  if(gameresult == 'X' || gameresult == 'O'){
      alert(currentMove)
  }
  toggleMove()
})
$boardInten5.addEventListener('click', function () {
  if ($boardInten5.innerHTML != '') {
    return
  }
  $boardInten5.innerHTML = currentMove
  const gameresult = verifyGame()
  if(gameresult == 'X' || gameresult == 'O'){
      alert(currentMove)
  }
  toggleMove()
})
$boardInten6.addEventListener('click', function () {
  if ($boardInten6.innerHTML != '') {
    return
  }
  $boardInten6.innerHTML = currentMove
  const gameresult = verifyGame()
  if(gameresult == 'X' || gameresult == 'O'){
      alert(currentMove)
  }
  toggleMove()
})
$boardInten7.addEventListener('click', function () {
  if ($boardInten7.innerHTML != '') {
    return
  }
  $boardInten7.innerHTML = currentMove
  const gameresult = verifyGame()
  if(gameresult == 'X' || gameresult == 'O'){
      alert(currentMove)
  }
  toggleMove()
})
$boardInten8.addEventListener('click', function () {
  if ($boardInten8.innerHTML != '') {
    return
  }
  $boardInten8.innerHTML = currentMove
  const gameresult = verifyGame()
  if(gameresult == 'X' || gameresult == 'O'){
      alert(currentMove)
  }
  toggleMove()
})
