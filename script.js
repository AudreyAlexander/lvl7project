const spaces = document.querySelectorAll('.space')
const mole = document.querySelector('.mole')
const highScore = document.querySelector('#score')

let score = 0
let position
let moving = null

function newSpace() {
  spaces.forEach(space => {
    space.classList.remove('mole')
  })

  let randomSquare = spaces[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  position = randomSquare.id
}

spaces.forEach(space => {
  space.addEventListener('mousedown', () => {
    if (space.id == position) {
      score = score + 1
      highScore.textContent = score
      position = null
    }
  })
})

function move() {
  moving = setInterval(newSpace, 700)
}

move()