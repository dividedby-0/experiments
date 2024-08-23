const btnchange = document.getElementById('btn-change');
const paragraph = document.getElementById('paragraph');
let paragraphArray = document.getElementById('paragraph').innerText.split('');
let clicked;

btnchange.addEventListener('click', () => {
  while (!clicked) {
    clicked = true;
    setInterval(startGlitching, 400);
    btnchange.innerText = 'Glitching...';
  }
});

function startGlitching() {
  setInterval(changeLetter1, randomInterval());
  setInterval(changeLetter2, randomInterval());
}

function randomInterval() {
  return Math.floor(Math.random() * (6000 - 1000 + 1) + 1000);
}

function randomTimeout() {
  return Math.floor(Math.random() * (700 - 500 + 1) + 500);
}

function changeLetter1() {
  for (let i = 0; i < 3; i++) {
    let currentIndex = Math.floor(Math.random() * paragraphArray.length);
    let originalLetter = paragraphArray[currentIndex];
    if (originalLetter != ' ') {
      switch (originalLetter) {
        case 'i':
          paragraphArray[currentIndex] = '1';
          updateView();
          break;
        case 'o':
          paragraphArray[currentIndex] = '0';
          updateView();
          break;
        case 'e':
          paragraphArray[currentIndex] = '3';
          updateView();
          break;

        default:
          paragraphArray[currentIndex] = randomGlitch();
          updateView();
          break;
      }
      setTimeout(restoreLetter, randomTimeout());
    }
    function restoreLetter() {
      paragraphArray[currentIndex] = originalLetter;
      updateView();
    }
  }
}

function changeLetter2() {
  for (let i = 0; i < 3; i++) {
    let currentIndex = Math.floor(Math.random() * paragraphArray.length);
    let originalLetter = paragraphArray[currentIndex];
    if (originalLetter != ' ') {
      switch (originalLetter) {
        case 'i':
          paragraphArray[currentIndex] = '1';
          updateView();
          break;
        case 'o':
          paragraphArray[currentIndex] = '0';
          updateView();
          break;
        case 'e':
          paragraphArray[currentIndex] = '3';
          updateView();
          break;

        default:
          paragraphArray[currentIndex] = randomGlitch();
          updateView();
          break;
      }
      setTimeout(restoreLetter, randomTimeout());
    }
    function restoreLetter() {
      paragraphArray[currentIndex] = originalLetter;
      updateView();
    }
  }
}

// function generateRandomLetter() {
//   const alphabet =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//   return alphabet[Math.floor(Math.random() * alphabet.length)];
// }

function updateView() {
  paragraph.innerText = paragraphArray.join('');
}

function randomGlitch() {
  let possibleGlitches = ['#', '%', '&', '@', '+', '?', '-'];
  return possibleGlitches[Math.floor(Math.random() * possibleGlitches.length)];
}
