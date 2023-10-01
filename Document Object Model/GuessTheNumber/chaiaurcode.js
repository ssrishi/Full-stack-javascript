let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const hint = document.querySelector('.lowOrHi');
const result = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevguess = [];
let numGuess = 1;
const totalGuess = 10;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Enter a valid number');
  } else if (guess < 0) {
    alert('Enter number more than Zero');
  } else if (guess > 100) {
    alert('Enter number less than 100');
  } else {
    if (numGuess <= 10) {
      checkRightGuess(guess);
      displayGuess(guess);
    } else {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }
  }
}
function checkRightGuess(guess) {
  if (guess == randomNumber) {
    displayMessage('You Guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Guess is Tooo Low');
  } else if (guess > randomNumber) {
    displayMessage('Guess is Tooo High');
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = totalGuess - numGuess;
  numGuess = numGuess + 1;
}
function displayMessage(message) {
  hint.innerHTML = `${message}`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.style.cursor = 'Pointer';
  p.innerHTML = '<h2>Start Game</h2>';
  result.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  p.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.removeAttribute('disabled');
    guessSlot.innerHTML = [];
    remaining.innerHTML = 10;
    numGuess = 1;
    result.removeChild(p);
    hint.innerHTML = '';

    playGame = true;
  });
}
