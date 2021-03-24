const buttonSubmit = document.getElementById('button-login');
const buttonRegister = document.getElementById('facebook-register');
const registerInputs = document.querySelectorAll('.register');
const radiosButtons = document.getElementsByName('gender');
const contentRight = document.querySelector('.right-content');

function submit() {
  alert(document.getElementById('user-email-phone').value);
}

function addGenderOption() {
  for (let j = 0; j < radiosButtons.length; j += 1) {
    radiosButtons[j].addEventListener('click', addGenderOption);
    if (radiosButtons[2].checked === true) {
      document.getElementById('gender-custom').style.display = 'flex';
    } else {
      document.getElementById('gender-custom').style.display = 'none';
    }
  }
}

function checkRegister() {
  let confirmRegister = true;

  for (let i = 0; i < registerInputs.length; i += 1) {
    if (registerInputs[i].value === '') {
      confirmRegister = false;
    }
  }
  return confirmRegister;
}

function checkRadios() {
  let confirmRadios = false;

  for (let j = 0; j < radiosButtons.length; j += 1) {
    if (radiosButtons[j].checked === true) {
      confirmRadios = true;
    }
  }
  return confirmRadios;
}

function valueSelectedGender() {
  for (let j = 0; j < radiosButtons.length; j += 1) {
    if (radiosButtons[j].checked === true) {
      return radiosButtons[j].value;
    }
  }
}

function showInfosOnTheForm() {
  const tankingTheData = sessionStorage.getItem('infosForm');
  const onlyData = tankingTheData.split(',');

  const greeting = `Olá, ${onlyData[0]} ${onlyData[1]} 
  ${onlyData[2]} 
  ${onlyData[3]} 
  ${onlyData[4]}`;

  contentRight.innerText = greeting;
}

function saveInfosForm() {
  const firstName = document.querySelector('#firstname').value;
  const lastName = document.querySelector('#lastname').value;
  const emailPhone = document.querySelector('#phone-email').value;
  const birthdate = document.querySelector('#user-birthdate').value;
  const gender = valueSelectedGender();
  const data = [firstName, lastName, emailPhone, birthdate, gender];

  sessionStorage.setItem('infosForm', data);

  contentRight.innerHTML = '';
  showInfosOnTheForm();
}

function checkData(e) {
  e.preventDefault();
  if (checkRegister() === false || checkRadios() === false) {
    document.getElementById('mensage-invalid').style.display = 'block';
  } else {
    saveInfosForm();
  }
}

buttonSubmit.addEventListener('click', submit);
buttonRegister.addEventListener('click', checkData);
radiosButtons[2].addEventListener('click', addGenderOption);
