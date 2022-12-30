const wrapp = document.querySelector('.wrapper')
const ball = document.querySelector('.item')

width = +window.getComputedStyle(wrapp).width.replace('px', '')
height = +window.getComputedStyle(wrapp).height.replace('px', '')

function genRandInd(max) {
  return Math.random() * max
}

function getDirection() {
  return Math.random()
}

function changePos(element, direction) {
  if (direction < 0.33) {
    element.style.top = genRandInd(height - 75) + 'px'
  } else if(direction >= 0.33 || direction < 0.66) {
    element.style.left = genRandInd(width - 75) + 'px'
    element.style.top = genRandInd(height - 75) + 'px'
  } else {
    element.style.left = genRandInd(width - 75) + 'px'
  }
}

ball.addEventListener('mouseover', () => {
  const direction = getDirection()
  changePos(ball, direction)
})

ball.addEventListener('mousemove', () => {
  const direction = getDirection()
  changePos(ball, direction)
})

ball.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'red'
})
