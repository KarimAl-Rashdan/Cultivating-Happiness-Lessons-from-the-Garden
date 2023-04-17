const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = "white"
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './assets/map.png'
console.log(image)

image.onload = () => {
  
}

class Sprite {
  constructor({ position, velocity, image}) {
    this.position = position
    this.image = image
  }
  draw() {
    c.drawImage(image, this.position.x, this.position.y)
  }
}

const background = new Sprite({position: {
  x: -785
  y: -650
},
  image: image
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

function animate() {
  window.requestAnimationFrame(animate)
  background.draw()
  console.log('animate')

  if (keys.w.pressed) background.position.y = background.position.y + 3
}
animate()

window.addEventListener('keydown', (e) => {
  console.log(e.key)
  switch (e.key) {
    case 'w':
      keys.w.pressed = true
      break
    case 'a':
      keys.a.pressed = true
      break
    case 's':
      keys.s.pressed = true
      break
    case 'd':
      keys.d.pressed = true
      break
  }
  console.log(keys)
})

window.addEventListener('keyup', (e) => {
  console.log(e.key)
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
  console.log(keys)
})