const btnchange = document.getElementById('btn-change');
const paragraph = document.getElementById('paragraph');
let paragraphArray = document.getElementById('paragraph').innerText.split('');

btnchange.addEventListener('click', () => {
  setInterval(changeLetter, randomInterval());
});

function randomInterval() {
  return Math.floor(Math.random() * (6000 - 1000 + 1) + 1000);
}

function changeLetter() {
  let currentIndex = Math.floor(Math.random() * paragraphArray.length);
  let originalLetter = paragraphArray[currentIndex];
  paragraphArray[currentIndex] = '#';
  updateView();
  setTimeout(restoreLetter, 700);
  function restoreLetter() {
    paragraphArray[currentIndex] = originalLetter;
    updateView();
  }
}

function generateRandomLetter() {
  const alphabet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function updateView() {
  paragraph.innerText = paragraphArray.join('');
}
