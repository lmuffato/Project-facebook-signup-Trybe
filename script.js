const myAddEventListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

const isValidForm = (...inputs) => {
  console.log('=======================');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '' || inputs[index] === []) {
      console.log(inputs[index]);
      return false;
    }
  }
  return true;
};

const generateUserInfo = (...infos) => {
  const painelRightContent = document.querySelector('.right-content');
  painelRightContent.innerHTML = '';
  for (let index = 0; index < infos.length; index += 1) {
    const node = document.createElement('p');
    node.textContent = infos[index];
    painelRightContent.appendChild(node);
  }
};

const generateWelcome = () => {
  const fisrtName = document.querySelector('#firstname');
  const lastName = document.querySelector('#lastname');
  const phoneEmail = document.querySelector('#phone_email');
  const password = document.querySelector('#password');
  const birthdate = document.querySelector('#birthdate');
  const gender = document.getElementsByName('gender');
  const inputRadioGenderChecked = Array.from(gender).filter((x) => x.checked); // https://stackoverflow.com/questions/32765157/filter-or-map-nodelists-in-es6
  const formInvalid = document.querySelector('#form-invalid');
  if (!isValidForm(fisrtName, lastName, phoneEmail,
    birthdate, password, inputRadioGenderChecked)) {
    formInvalid.style.display = 'block';
    return;
  }
  formInvalid.style.display = 'none';
  const fullNameMsg = 'Olá, '.concat(`${fisrtName.value} ${lastName.value}`);
  console.log(fullNameMsg);
  generateUserInfo(fullNameMsg, phoneEmail.value, birthdate.value,
    inputRadioGenderChecked[0].value);
};

window.onload = () => {
  myAddEventListener('#button-login', 'click', (e) => {
    e.preventDefault();
    const input = document.querySelector('#user-email-phone');
    alert(input.value);
  });
  myAddEventListener('#facebook-register', 'click', (e) => {
    e.preventDefault();
    generateWelcome();
  });
  myAddEventListener('#custom', 'focus', () => {
    document.querySelector('#gender-custom').style.display = 'block';
  });
  myAddEventListener('#custom', 'blur', () => {
    document.querySelector('#gender-custom').style.display = 'none';
  });
};
