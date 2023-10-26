const homeEl = document.getElementById('scoreHome');
const guestEl = document.getElementById('scoreGuest');
const timeEl = document.getElementById('time');
const buttonStartEl = document.getElementById('btn-start')
const pauseEl = document.getElementById('pause');
const continueEl = document.getElementById('continue');
const mainContainerEl = document.getElementById('main-container');
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
  buttonStartEl.textContent = 'Restart timer';
}

function gameStart() {
  clearInterval(period);
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
}

function finalResult() {
  clearInterval(period);
  const winner = scoreHome > scoreGuest
    ? 'Winner is HOME!'
    : scoreHome < scoreGuest
      ? 'Winner is GUEST!'
      : 'DEAD HEAT';
  const result = scoreHome + ' : ' + scoreGuest;
  mainContainerEl.innerHTML = `
    <h2 class="winner">${winner}</h2>
    <h3 class="final-score">Score: ${result}</h3>
    <a href="../index.html" class="return-start">Start new game</a>
  `
  mainContainerEl.setAttribute('style', "height: 500px; justify-content: center;");
}
