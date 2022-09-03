let inputUsername = document.getElementById('usernameInput');
let inputRole = document.getElementById('role');
let inputPassword = document.getElementById('passwordInput');
let hehe = document.getElementById('hehe');
let hehe1 = document.getElementById('hehe1');
let hehe2 = document.getElementById('hehe2');

hehe.style.display = 'none';

hehe3.style.display = 'none';

function register() {
  // localStorage.setItem(inputUsername.value, inputPassword.value);
  if (inputUsername.value == '' && inputPassword.value == '') {
    localStorage.setItem('username', role.value);
    localStorage.setItem('role', role.value);
    localStorage.setItem('password', role.value);
    alert('Pendaftaran Berhasil');
    hehe1.style.display = 'none';
    hehe.style.display = 'block';
  }
}

function loginMantep() {
  if (inputUsername.value == localStorage.getItem('username') && inputPassword.value == localStorage.getItem('password')) {
    alert('berhasil');
    window.location = 'index.html';

    localStorage.clear;
    location.reload;
  } else {
    alert('gagal');
  }
}
