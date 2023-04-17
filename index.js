const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = "white"
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './assets/map.png'

const playerImage = new Image()
playerImage.src = './assets/playerDownOceanHair.png'

image.onload = () => {
  c.drawImage(image, -785, -650)
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 8,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
   )
}
