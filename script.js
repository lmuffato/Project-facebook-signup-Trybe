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

/* function getData() {
  const dataList = document.querySelectorAll('input');
  let dataShow = [];
  for (let index = 0; index < dataList.length - 3; index += 1) {
    dataShow.push(dataList[index].value);
    console.log(dataShow);
  }
} */

function getData() {
  const getFirstName = document.getElementById('first-name').value;
  const getLastName = document.getElementById('last-name').value;
  const getPhoneEmail = document.getElementById('phone-email').value;
  const getDateBirth = document.getElementById('date').value;
  const getGender = document.querySelector("input[name='gender']:checked").value;

  console.log(getFirstName);
  console.log(getLastName);
  console.log(getPhoneEmail);
  console.log(getDateBirth);
  console.log(getGender);
}

const submitButton = document.querySelector('#facebook-register');
submitButton.addEventListener('click', checkInputs);
submitButton.addEventListener('click', getData);

window.onload = function startSession() {
  activeAlert();
  clickGender();
};
