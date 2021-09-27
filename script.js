'use strict';

const btnRules = document.querySelector('.rules')
const btnX = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const openModal = () => {
  document.querySelector('.modal').classList.remove('hidden')
}

const closeModal = () => {
  console.log('clicked');
  document.querySelector('.modal').classList.add('hidden')
}

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const displayScore = score =>
  (document.querySelector('.score').textContent = Number(score));

const changeBackGroundColor = color =>
  (document.querySelector('body').style.backgroundColor = color);

const changeWidth = width =>
  (document.querySelector('.number').style.width = width);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  displayMessage(guess);

  if (!guess) {
    //if nothing is entered
    displayMessage('🛑 no number');
  }
  //if player wins the game
  else if (guess === secretNumber) {
    displayMessage('🎉 correct number');
    changeBackGroundColor('#60b347');
    changeWidth('30rem');

    // this is setting the highscore if score is higher then high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '😫 too high' : '😫 too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('you lost the game');
      displayScore(0);
      changeBackGroundColor('#EF4423');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //this will reset the game to normal on the click of the 'agian' button
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  changeBackGroundColor('#222');
  changeWidth('15rem');
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

btnRules.addEventListener('click', openModal)

modal.addEventListener('click', closeModal)

btnX.addEventListener('click', closeModal) 

