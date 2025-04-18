let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const messageEl = document.getElementById('message');
const hintEl = document.getElementById('hint');
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const resetBtn = document.getElementById('resetBtn');
const attemptCountEl = document.getElementById('attemptCount');

guessBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  // Reset animation
  messageEl.classList.remove('animate');
  void messageEl.offsetWidth; // reflow to restart animation

  if (!guess || guess < 1 || guess > 100) {
    messageEl.textContent = '⛔ Enter a number between 1 and 100!';
    hintEl.textContent = '';
    return;
  }

  attempts++;
  attemptCountEl.textContent = attempts;

  if (guess === secretNumber) {
    messageEl.textContent = `🎉 Correct! The number was ${secretNumber}`;
    hintEl.textContent = `You guessed it in ${attempts} attempt${attempts > 1 ? 's' : ''}! 🏆`;
    document.body.style.background = 'linear-gradient(135deg, #2b5876, #4e4376)';
  } else if (guess > secretNumber) {
    messageEl.textContent = '📈 Too high!';
    hintEl.textContent = 'Try something lower...';
  } else {
    messageEl.textContent = '📉 Too low!';
    hintEl.textContent = 'Try something higher...';
  }

  messageEl.classList.add('animate');
});

resetBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptCountEl.textContent = attempts;
  guessInput.value = '';
  messageEl.textContent = 'Start guessing!';
  hintEl.textContent = '';
  document.body.style.background = 'linear-gradient(135deg, #1f1c2c, #928dab)';
});
