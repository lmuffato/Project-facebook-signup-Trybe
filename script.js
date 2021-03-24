const buttonSubmit = document.getElementById('button-login');
const buttonRegister = document.getElementById('facebook-register');
const registerInputs = document.querySelectorAll('.register');
const radiosButtons = document.getElementsByName('gender');

function submit() {
  alert(document.getElementById('user-email-phone').value);
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

function displayUser() {
  const fistName = document.querySelector('#firstname').value;
  const lastName = document.querySelector('#lastname').value;
  const emailPhone = document.querySelector('#phone-email').value;
  const birthdate = document.querySelector('#user-birthdate').value;

  // for (let j = 0; j < radiosButtons.length; j += 1) {
  //   radiosButtons[j].addEventListener('click', () => {
  //     if (radiosButtons[j].checked === true) {
  //       const gender = radiosButtons[j].value;
  //     }
  //   });
  //   return gender;
  // }
  console.log(fistName + lastName + emailPhone + birthdate);
}

function checkData(e) {
  e.preventDefault();
  if (checkRegister() === false || checkRadios() === false) {
    document.getElementById('mensage-invalid').style.display = 'block';
  } else {
    document.getElementById('mensage-invalid').style.display = 'none';
    document.querySelector('#form-register').style.display = 'none';
    displayUser();
  }
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

buttonSubmit.addEventListener('click', submit);
buttonRegister.addEventListener('click', checkData);
radiosButtons[2].addEventListener('click', addGenderOption);
