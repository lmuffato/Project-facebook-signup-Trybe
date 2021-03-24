function activeAlert() {
  const loginButton = document.querySelector('#button-login');
  loginButton.addEventListener('click', () => {
    const inputContent = document.querySelector('#user-email-phone').value;
    alert(inputContent);
  });
}

function showCustom(value) {
  if (value === 'Personalizado') {
    document.getElementById('gender-custom-content').style.display = 'block';
  } else {
    document.getElementById('gender-custom-content').style.display = 'none';
  }
}

function clickGender() {
  const radioOptions = document.querySelectorAll('[name=gender]');
  console.log(radioOptions);
  Array.from(radioOptions).forEach((radio) => {
    radio.addEventListener('click', (event) => {
      showCustom(event.target.value);
    });
  });
}

function checkTextInputs() {
  const inputList = document.querySelectorAll('.input-text');
  let emptyField = false;
  for (let index = 0; index < inputList.length; index += 1) {
    if (inputList[index].value === '') {
      emptyField = true;
    }
  }
  return emptyField;
}

function checkRadioInputs() {
  const inputsRadio = document.getElementsByName('gender');
  let count = 0;
  for (let index = 0; index < inputsRadio.length; index += 1) {
    if (inputsRadio[index].checked) {
      count += 1;
    }
  }
  return count;
}

let messageShown = false;

function checkInputs(event) {
  if (checkTextInputs() === true || checkRadioInputs() === 0) {
    const message = document.createElement('p');
    document.querySelector('.main-form').appendChild(message);
    if (messageShown === false) {
      message.innerText = 'Campos inválidos';
      messageShown = true;
    }
  }
  event.preventDefault();
}

// Remove conteúdo do right content
function deleteContent() {
  const rightContent = document.querySelectorAll('.delete');
  for (let index = 0; index < rightContent.length; index += 1) {
    rightContent[index].remove();
  }
}

// Substitui conteúdo do right content pelas respostas do cadastro
function resultRegister(dataList) {
  const textForm = document.createElement('p');
  document.querySelector('.right-content').appendChild(textForm);
  textForm.innerText = `Olá, ${dataList[0]} ${dataList[1]}
  ${dataList[2]}
  ${dataList[3]}
  ${dataList[4]}`
}

// Recupera os dados inseridos no formulário de cadastro
function getData() {
  const dataList = [];
  dataList.push(document.getElementById('first-name').value);
  dataList.push(document.getElementById('last-name').value)
  dataList.push(document.getElementById('phone-email').value);
  dataList.push(document.getElementById('date').value);
  dataList.push(document.querySelector("input[name='gender']:checked").value);

  deleteContent();
  resultRegister(dataList);
}

const submitButton = document.querySelector('#facebook-register');
submitButton.addEventListener('click', checkInputs);
submitButton.addEventListener('click', getData);

window.onload = function startSession() {
  activeAlert();
  clickGender();
};
