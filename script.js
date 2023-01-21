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

  let available = spaces[Math.floor(Math.random() * 9)]
  available.classList.add('mole')

  position = available.id
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
