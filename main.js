const homeEl = document.getElementById('scoreHome');
const guestEl = document.getElementById('scoreGuest');
const timeEl = document.getElementById('time');
const buttonStartEl = document.getElementById('btn-start')
const pauseEl = document.getElementById('pause');
const continueEl = document.getElementById('continue');
let period;

let scoreHome = 0;
let scoreGuest = 0;
let time = 0;

function increment(side, amount) {
  if (side === 'home') {
    scoreHome += amount;
    homeEl.textContent = scoreHome;
  } else {
    scoreGuest += amount;
    guestEl.textContent = scoreGuest;
  }
}

function startTimer() {
  period = setInterval(() => {
    time += 1;
    timeEl.textContent = convertTime(time);
  }, 1000);
  pauseEl.disabled = false;
  continueEl.disabled = true;
  buttonStartEl.textContent = 'The game is going';
  buttonStartEl.style.color = '#022dc7';
}

function gameStart() {
  buttonStartEl.disabled = true;
  time = 0;
  timeEl.textContent = '00:00';
  startTimer();
}

function convertTime(currentTime) {
  let minutes = Math.floor(currentTime / 60);
  if (minutes < 10) minutes = '0' + minutes;
  let seconds = currentTime - minutes * 60;
  if (seconds < 10) seconds = '0' + seconds;
  return minutes + ':' + seconds;
}

function pauseTimer() {
  clearInterval(period);
  pauseEl.disabled = true;
  continueEl.disabled = false;
  buttonStartEl.textContent = 'P A U S E';
  buttonStartEl.style.color = 'red';
}
