function loginAlert() {
  const btnLogin = document.getElementById('button-login');
  let inputText = '';
  btnLogin.addEventListener('click', () => {
    inputText = document.getElementById('user-email-phone').value;
    alert(inputText);
  });
}

function getElements() {
  const name = document.getElementById('firsname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone-email').value;
  const password = document.getElementById('password').value;
  const birthdate = document.getElementById('birthdate').value;
  const result = [name, lastName, phoneEmail, password, birthdate];
  return result;
}

function check() {
  const result = getElements();
  let sum = 0;
  for (let index = 0; index < result.length; index += 1) {
    const element = result[index];
    if (element !== '') {
      sum += 1;
    }
  }
  return sum;
}

function alert(number) {
  if (number !== 5) {
    document.querySelector('.alert').style.display = 'block';
  }
}

function validate() {
  const btn = document.getElementById('facebook-register');
  btn.addEventListener('click', () => {
    alert(check());
  });
}

window.onload = function run() {
  loginAlert();
  validate();
};
