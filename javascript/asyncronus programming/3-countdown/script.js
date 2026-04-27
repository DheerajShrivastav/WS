const secondsInput = document.getElementById('secondsInput')
const startBtn = document.getElementById('startBtn')
const resetBtn = document.getElementById('resetBtn')
const countdownDisplay = document.getElementById('countdownDisplay')
const statusText = document.getElementById('statusText')

let remainingSeconds = 0
let timerId

function formatCountdown(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function updateDisplay() {
  countdownDisplay.textContent = formatCountdown(remainingSeconds)
}

function startCountdown() {
  const inputValue = Number(secondsInput.value)

  if (!Number.isInteger(inputValue) || inputValue <= 0) {
    statusText.textContent = 'Please enter a valid number greater than 0.'
    return
  }

  clearInterval(timerId)
  remainingSeconds = inputValue
  updateDisplay()
  statusText.textContent = 'Countdown started...'

  timerId = setInterval(() => {
    remainingSeconds -= 1
    updateDisplay()

    if (remainingSeconds <= 0) {
      clearInterval(timerId)
      statusText.textContent = "Time's up!"
    }
  }, 1000)
}

function resetCountdown() {
  clearInterval(timerId)
  remainingSeconds = 0
  updateDisplay()
  statusText.textContent = 'Timer reset. Enter time and press Start.'
  secondsInput.value = ''
}

startBtn.addEventListener('click', startCountdown)
resetBtn.addEventListener('click', resetCountdown)

updateDisplay()
