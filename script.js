function alertEmail() {
  const btnLogin = document.getElementById('button-login');

  btnLogin.addEventListener('click', () => {
    const emailValue = document.getElementById('user-email-phone').value;
    alert(`${emailValue}`);
  });
}

function checkInput(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll('.required');
  const radios = document.querySelectorAll('input[type="radio"]:checked');
  const validateMessage = document.querySelector('.validate-message');
  let validate = true;

  for (let i = 0; i < inputs.length; i += 1) {
    if (!inputs[i].value || !radios) {
      validateMessage.innerText = 'Campos inválidos';
      validate = false;
    }
  }
  return validate;
}

function changeContainer(event) {
  if (checkInput(event)) {
    const name = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#phone_email').value;
    const birthdate = document.querySelector('#birthdate-input').value;
    const gender = document.querySelector('input[type="radio"]:checked').value;
    const rightContent = document.querySelector('.right-content');
    rightContent.innerHTML = '';
    rightContent.innerText = `Olá, ${name} ${lastname}
     ${email} ${birthdate} ${gender}`;
  }
}

function registerBtn() {
  const registerBtnI = document.getElementById('facebook-register');
  registerBtnI.addEventListener('click', changeContainer);
}

function deleteField() {
  const fields = document.querySelectorAll('.gender');
  const fieldDiv = document.querySelector('.custom-gender');

  for (let i = 0; i < fields.length; i += 1) {
    fieldDiv.removeChild(fields[i]);
  }
}

function customGender() {
  const custom = document.getElementById('custom');
  custom.addEventListener('click', () => {
    deleteField();
    const createElement = document.createElement('input');
    createElement.type = 'text';
    createElement.placeholder = 'Gênero (opcional)';
    createElement.name = 'gender-custom';
    createElement.classList.add('gender');
    document.querySelector('.custom-gender').appendChild(createElement);
  });
}

const fGender = document.getElementById('female');
fGender.addEventListener('click', () => {
  deleteField();
});

const mGender = document.getElementById('male');
mGender.addEventListener('click', () => {
  deleteField();
});

window.onload = () => {
  alertEmail();
  customGender();
  registerBtn();
};
