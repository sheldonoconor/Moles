const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');

const time = 10000;
let lastMole;
let score = 0;
let inProgress = false;

const start = () => {
  console.log('started');
  inProgress = true;
  score = 0;
  scoreBoard.textContent = score;
  lastMole = undefined;
  popup();

  setTimeout(() => {
    inProgress = false;
    }, time);
}

const stop = () => {
  inProgress = false;
}

const restart = () => {
  stop();
  start();
}

const getRandomTime = () => {
  return Math.floor(Math.random() * 3000);
}

const popup = () => {
  const time = getRandomTime();
  const mole = getRandomMole();
  mole.classList.add('show');
  setTimeout(() => {
    mole.classList.remove('show');
    if (inProgress) {
      popup();
    }
  },  time);
}

const getRandomMole = () => {
  const index = Math.floor(Math.random() * holes.length);
  const mole = holes[index];
  if (mole === lastMole) {
    return getRandomMole();
  }
  lastMole = mole;
  return mole;
}

function hit (event) {
  this.parentNode.classList.remove('show');
  scoreBoard.textContent = ++score;
}

moles.forEach((mole) => mole.addEventListener('click', hit));