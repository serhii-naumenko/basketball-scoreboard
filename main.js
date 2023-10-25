const homeEl = document.getElementById('scoreHome');
const guestEl = document.getElementById('scoreGuest');

let scoreHome = 0;
let scoreGuest = 0;

function increment(side, amount) {
  if (side === 'home') {
    scoreHome += amount;
    homeEl.textContent = scoreHome;
  } else {
    scoreGuest += amount;
    guestEl.textContent = scoreGuest;
  }
}
