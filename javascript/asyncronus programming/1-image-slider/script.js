const images = [
  'https://picsum.photos/id/1015/800/500',
  'https://picsum.photos/id/1025/800/500',
  'https://picsum.photos/id/1035/800/500',
]

let currentIndex = 0
let autoSlideTimer

const slideImage = document.getElementById('slideImage')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

function showImage(index) {
  slideImage.src = images[index]
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length
  showImage(currentIndex)
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  showImage(currentIndex)
}

function startAutoSlide() {
  clearInterval(autoSlideTimer)
  autoSlideTimer = setInterval(showNextImage, 3000)
}

prevBtn.addEventListener('click', () => {
  showPreviousImage()
  startAutoSlide()
})

nextBtn.addEventListener('click', () => {
  showNextImage()
  startAutoSlide()
})

showImage(currentIndex)
startAutoSlide()
