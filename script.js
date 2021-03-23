const emailLoginBtn = document.getElementById('button-login');

const genderPersonalizado = document.getElementById('gender-personalizado');

const boxPersonalizado = document.getElementById('boxPersonalizado');

const mascBtn = document.getElementById('mascBtn');

const femBtn = document.getElementById('femBtn');

function emailAlert() {
  const emailLoginValue = document.getElementById('user-email-phone').value;
  alert(emailLoginValue);
}

emailLoginBtn.addEventListener('click', emailAlert);

function openTextBox() {
  boxPersonalizado.removeAttribute('class');
}

genderPersonalizado.addEventListener('click', openTextBox);

function closeTextBox() {
  boxPersonalizado.className = 'personalizadoBox';
}

femBtn.addEventListener('click', closeTextBox);

mascBtn.addEventListener('click', closeTextBox);
