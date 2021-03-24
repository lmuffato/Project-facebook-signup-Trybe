const genderCustomConst = 'gender-custom';
const idSuccessButton = document.querySelector('#facebook-register');
const inputsText = document.querySelectorAll('.createUser input');
const radioElement = document.form1;
const idMessageInvalid = document.querySelector('#messageInvalid');
const idSucessRegister = document.querySelector('#successRegister');
const form = document.querySelector('.createUser');
const register = document.querySelector('.register');
const quickEasy = document.querySelector('.quick-easy');
const submitButton = document.querySelector('.submitButton');
const msgMobile = document.querySelector('.msgMobile');
const personalizedGender = document.querySelector('#personalizedGender');
const customGender = document.getElementById('customGender');

const generateInvalidMessage = () => {
  idMessageInvalid.innerHTML = '';
  const newMsg = document.createElement('p');
  newMsg.innerHTML = 'Campos inválidos';
  idMessageInvalid.appendChild(newMsg);
};

const validRadio = () => {
  if (radioElement.gender[0].checked === false
  && radioElement.gender[1].checked === false
  && radioElement.gender[2].checked === false) {
    return false;
  }
  return true;
};

const validTextField = (el) => {
  if ((el.type === 'text' || el.type === 'password') && el.value === '') {
    return false;
  }
};

const createPGender = () => {
  if (form.gender[0].checked) {
    return 'Feminino';
  }
  if (form.gender[1].checked) {
    return 'Masculino';
  }
  if (form.gender[2].checked) {
    return 'Personalizado';
  }
};

const toggleDiv = () => {
  if (form.style.visibility === '') {
    register.style.display = 'none';
    quickEasy.style.display = 'none';
    form.style.display = 'none';
    idSucessRegister.style.display = 'flex';
  } else {
    register.style.display = 'block';
    quickEasy.style.display = 'block';
    form.style.display = 'flex';
    idSucessRegister.style.display = 'none';
  }
};

const showNewUser = () => {
  const nameUser = form.firstname.value;
  const lastNameUser = form.lastname.value;
  const phoneEmail = form.phone_email.value;
  const birthdate = form.birthdate.value;

  idSucessRegister.innerHTML = '';

  idSucessRegister.innerHTML += `
    <h3>Olá, <strong>${nameUser} ${lastNameUser}</strong></h3>
  `;
  idSucessRegister.innerHTML += `<p><b>Telefone/Email: </b> ${phoneEmail}</p>`;
  idSucessRegister.innerHTML += `
    <p><b>Data de Nascimento: </b> ${birthdate}</p>
  `;
  idSucessRegister.innerHTML += `<p><b>Gênero: </b>${createPGender()}</p>`;
  toggleDiv();
};

const validateForm = (e) => {
  e.preventDefault();
  let check = true;
  inputsText.forEach((el) => {
    if (validTextField(el) === false) {
      check = false;
    }
  });
  if (!validRadio()) {
    check = false;
  }
  if (check === false) {
    generateInvalidMessage();
  } else {
    idMessageInvalid.innerHTML = '';
    showNewUser();
  }
};

function resetGender() {
  if ((personalizedGender.innerHTML.length === 7)) {
    const parentEle = personalizedGender;
    const elem = document.createElement('input');
    parentEle.appendChild(elem);
    Object.assign(elem, {
      name: genderCustomConst,
      type: 'text',
      placeholder: 'Gênero (opcional)',
      id: genderCustomConst,
    });
  }
}

window.onload = () => {
  document.querySelector('#button-login').addEventListener('click', () => {
    alert(document.querySelector('#user-email-phone').value);
  });
  idSuccessButton.addEventListener('click', validateForm);
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.innerWidth < 1100) {
      msgMobile.style.display = 'block';
    }
  });
  customGender.addEventListener('click', resetGender);
  document.getElementById('male').addEventListener('change', resetGender);
  document.getElementById('female').addEventListener('change', resetGender);
};

window.onresize = () => {
  if (window.innerWidth < 1100) {
    msgMobile.style.display = 'none';
  }
};

function clickParaSelecionar() {
  document.getElementById(genderCustomConst).remove();
}

document.querySelectorAll('.genderRadio1').forEach((elementoSelecionado) => {
  elementoSelecionado.addEventListener('click', clickParaSelecionar);
});
