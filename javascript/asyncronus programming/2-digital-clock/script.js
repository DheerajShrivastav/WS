const clockElement = document.getElementById('clock')

function formatTimeUnit(value) {
  return String(value).padStart(2, '0')
}

function updateClock() {
  const now = new Date()
  const hours = formatTimeUnit(now.getHours())
  const minutes = formatTimeUnit(now.getMinutes())
  const seconds = formatTimeUnit(now.getSeconds())

  clockElement.textContent = `${hours}:${minutes}:${seconds}`
}

updateClock()
setInterval(updateClock, 1000)
