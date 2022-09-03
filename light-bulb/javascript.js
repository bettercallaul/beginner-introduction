// ruang-keluarga

function Saklar() {
  let Cekrekan = document.getElementById('teal-toggle');
  let Cekrekan1 = document.getElementById('teal-toggle1');
  let Cekrekan2 = document.getElementById('teal-toggle2');

  let lamp1 = document.getElementById('LAMPU');
  let lamp2 = document.getElementById('LAMPU1');
  let lamp3 = document.getElementById('LAMPU2');

  if (Cekrekan.checked) {
    lamp1.src = 'asset/images/on.gif';
  } else {
    lamp1.src = 'asset/images/off.gif';
  }

  if (Cekrekan1.checked) {
    lamp2.src = 'asset/images/on.gif';
  } else {
    lamp2.src = 'asset/images/off.gif';
  }

  if (Cekrekan2.checked) {
    lamp3.src = 'asset/images/on.gif';
  } else {
    lamp3.src = 'asset/images/off.gif';
  }
}

function Saklar1() {
  let semuaCekrekan = document.getElementById('teal-toggle-all');

  let lamp1 = document.getElementById('LAMPU');
  let lamp2 = document.getElementById('LAMPU1');
  let lamp3 = document.getElementById('LAMPU2');

  if (semuaCekrekan.checked) {
    lamp1.src = 'asset/images/on.gif';
    lamp2.src = 'asset/images/on.gif';
    lamp3.src = 'asset/images/on.gif';
  } else {
    lamp1.src = 'asset/images/off.gif';
    lamp2.src = 'asset/images/off.gif';
    lamp3.src = 'asset/images/off.gif';
  }
}
// ruang-keluarga-end

// ruang-tamu

function laskar() {
  let Cekrekan = document.getElementById('teal-toggle-tamu');
  let Cekrekan1 = document.getElementById('teal-toggle-tamu2');
  let Cekrekan2 = document.getElementById('teal-toggle-tamu3');
  let Cekrekan3 = document.getElementById('teal-toggle-tamu4');

  let lamp1 = document.getElementById('LAMP1');
  let lamp2 = document.getElementById('LAMP2');
  let lamp3 = document.getElementById('LAMP3');
  let lamp4 = document.getElementById('LAMP4');

  if (Cekrekan.checked) {
    lamp1.src = 'asset/images/on.gif';
  } else {
    lamp1.src = 'asset/images/off.gif';
  }

  if (Cekrekan1.checked) {
    lamp2.src = 'asset/images/on.gif';
  } else {
    lamp2.src = 'asset/images/off.gif';
  }

  if (Cekrekan2.checked) {
    lamp3.src = 'asset/images/on.gif';
  } else {
    lamp3.src = 'asset/images/off.gif';
  }
  if (Cekrekan3.checked) {
    lamp4.src = 'asset/images/on.gif';
  } else {
    lamp4.src = 'asset/images/off.gif';
  }
}

function Saklar2() {
  let semuaCekrekan = document.getElementById('teal-toggle-all-1');

  let lamp1 = document.getElementById('LAMP1');
  let lamp2 = document.getElementById('LAMP2');
  let lamp3 = document.getElementById('LAMP3');
  let lamp4 = document.getElementById('LAMP4');

  if (semuaCekrekan.checked) {
    lamp1.src = 'asset/images/on.gif';
    lamp2.src = 'asset/images/on.gif';
    lamp3.src = 'asset/images/on.gif';
    lamp4.src = 'asset/images/on.gif';
  } else {
    lamp1.src = 'asset/images/off.gif';
    lamp2.src = 'asset/images/off.gif';
    lamp3.src = 'asset/images/off.gif';
    lamp4.src = 'asset/images/off.gif';
  }
}

// ruang-tamu-end

// ruang-tidur

function damnMan() {
  let Cekrekan = document.getElementById('teal-toggle-tidur');
  let Cekrekan1 = document.getElementById('teal-toggle-tidur2');

  let lamp1 = document.getElementById('BOHLAM1');
  let lamp2 = document.getElementById('BOHLAM2');

  if (Cekrekan.checked) {
    lamp1.src = 'asset/images/on.gif';
  } else {
    lamp1.src = 'asset/images/off.gif';
  }

  if (Cekrekan1.checked) {
    lamp2.src = 'asset/images/on.gif';
  } else {
    lamp2.src = 'asset/images/off.gif';
  }
}

function Saklar3() {
  let semuaCekrekan = document.getElementById('teal-toggle-all-2');

  let lamp1 = document.getElementById('BOHLAM1');
  let lamp2 = document.getElementById('BOHLAM2');

  if (semuaCekrekan.checked) {
    lamp1.src = 'asset/images/on.gif';
    lamp2.src = 'asset/images/on.gif';
  } else {
    lamp1.src = 'asset/images/off.gif';
    lamp2.src = 'asset/images/off.gif';
  }
}

// ruang-tidur-end

// ruang-makan
function damnMan1() {
  let Cekrekan = document.getElementById('teal-toggle-makan');
  let lamp1 = document.getElementById('HELIKOPTER');

  if (Cekrekan.checked) {
    lamp1.src = 'asset/images/on.gif';
  } else {
    lamp1.src = 'asset/images/off.gif';
  }
}
// ruang-makan-end
