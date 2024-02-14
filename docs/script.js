function startTimer(hours, minutes, seconds) {
  let timerInterval = setInterval(function () {
    seconds--
    if (seconds < 0) {
      seconds = 59
      minutes--
      if (minutes < 0) {
        minutes = 59
        hours--
        if (hours < 0) {
          clearInterval(timerInterval)
        }
      }
    }
    document.querySelector(".hours").textContent = padZero(hours)
    document.querySelector(".minutes").textContent = padZero(minutes)
    document.querySelector(".seconds").textContent = padZero(seconds)
  }, 1000)

  const hoursIndicator = document.querySelector(".hours-indicator circle")
  const minutesIndicator = document.querySelector(".minutes-indicator circle")
  const secondsIndicator = document.querySelector(".seconds-indicator circle")

  const secondsInHours = hours * 3600
  const secondsInMinutes = minutes * 60

  hoursIndicator.style.animation = `countdown ${secondsInHours}s linear infinite forwards`
  minutesIndicator.style.animation = `countdown ${secondsInMinutes}s linear infinite forwards`
  secondsIndicator.style.animation = `countdown ${seconds}s linear infinite forwards`
}

function padZero(num) {
  return (num < 10 ? "0" : "") + num
}

startTimer(1, 2, 60)
