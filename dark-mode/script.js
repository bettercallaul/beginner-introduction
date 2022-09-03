let body = document.body;
const darkLimit = 5;
let darkCounter = 0;
let darkRemainLeft;
let info = document.getElementById('info');
let mode = document.getElementById('modeMode');
let mode1 = document.getElementById('modeMode1');
let mode2 = document.getElementById('modeMode2');
let mode3 = document.getElementById('modeMode3');
let home = document.getElementById('home');
function darkMode() {
  if (darkRemainLeft == 0) {
    info.textContent = 'DARK MODE IS ALREADY OFF LIMIT';
    mode.style.display = 'none';
    home.textContent = 'Reload';
    return;
  } else darkCounter += 1;
  darkRemainLeft = darkLimit - darkCounter;

  info.textContent = `you have been clicked for ${darkCounter}x, remain ${darkRemainLeft}x`;
  console.log('jumlah klik', darkCounter);
  console.log('remain left: ', darkRemainLeft);
  body.classList.toggle('dark');
}

function yellowMode() {
  if (darkRemainLeft == 0) {
    info.textContent = 'YELLOW MODE IS ALREADY OFF LIMIT';
    mode1.style.display = 'none';
    home.textContent = 'Reload';
    return;
  } else darkCounter += 1;
  darkRemainLeft = darkLimit - darkCounter;

  info.textContent = `you have been clicked for ${darkCounter}x, remain ${darkRemainLeft}x`;
  console.log('jumlah klik', darkCounter);
  console.log('remain left: ', darkRemainLeft);
  body.classList.toggle('yellow');
}

function greenMode() {
  if (darkRemainLeft == 0) {
    info.textContent = 'GREEN MODE IS ALREADY OFF LIMIT';
    mode2.style.display = 'none';
    home.textContent = 'Reload';
    return;
  } else darkCounter += 1;
  darkRemainLeft = darkLimit - darkCounter;

  info.textContent = `you have been clicked for ${darkCounter}x, remain ${darkRemainLeft}x`;
  console.log('jumlah klik', darkCounter);
  console.log('remain left: ', darkRemainLeft);
  body.classList.toggle('green');
}

function redMode() {
  if (darkRemainLeft == 0) {
    info.textContent = 'RED MODE IS ALREADY OFF LIMIT';
    mode3.style.display = 'none';
    home.textContent = 'Reload';
    return;
  } else darkCounter += 1;
  darkRemainLeft = darkLimit - darkCounter;

  info.textContent = `you have been clicked for ${darkCounter}x, remain ${darkRemainLeft}x`;
  console.log('jumlah klik', darkCounter);
  console.log('remain left: ', darkRemainLeft);
  body.classList.toggle('red');
}

function reRender() {
  location.reload();
}
