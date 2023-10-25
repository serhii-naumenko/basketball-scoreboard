const homeEl = document.getElementById('scoreHome');
const guestEl = document.getElementById('scoreGuest');
const timeEl = document.getElementById("time");
const buttonStartEl = document.getElementById('btn-start')

let scoreHome = 0;
let scoreGuest = 0;
let time = 0;
let isTimer = false;

function increment(side, amount) {
  if (side === 'home') {
    scoreHome += amount;
    homeEl.textContent = scoreHome;
  } else {
    scoreGuest += amount;
    guestEl.textContent = scoreGuest;
  }
}

function gameStart() {
  buttonStartEl.textContent = 'The game is going';
  buttonStartEl.disabled = true;
  time = 0;
  timeEl.textContent = '00:00';
  const period = setInterval(() => {
    time += 1;
    timeEl.textContent = convertTime(time);
  }, 1000);
  if (isTimer) {
    clearInterval(period);
    period();
  }
  isTimer = true;
}

function convertTime(currentTime) {
  let minutes = Math.floor(currentTime / 60);
  if (minutes < 10) minutes = '0' + minutes;
  let seconds = currentTime - minutes * 60;
  if (seconds < 10) seconds = '0' + seconds;
  return minutes + ':' + seconds;
}
