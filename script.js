const btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});
function EraseMessage() {
  if (document.querySelectorAll('#mensagem').length > 1) {
    document.querySelector('#mensagem').remove();
  }
}
function validateInput() {
  const inputs = document.querySelectorAll('.form');
  const btn = document.getElementById('facebook-register');
  btn.addEventListener('click', (event) => {
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].value === '') {
        const message = document.createElement('p');
        message.setAttribute('id', 'mensagem');
        message.innerHTML = ('Campos Inválidos');
        message.style.color = 'red';
        document.querySelector('.form-cadastro').appendChild(message);
        event.preventDefault();
        EraseMessage();
        break;
      }
    }
  });
}

function customGender() {
  const btn = document.getElementById('custom');
  btn.addEventListener('click', () => {
    const custom = document.createElement('input');
    custom.setAttribute('name', 'gender-custom');
    custom.setAttribute('placeholder', 'Gênero(opcional)');
    document.querySelector('.register-gender').appendChild(custom);
    const customClean = document.getElementsByName('gender-custom');
    if (customClean.length > 1) {
      customClean[0].remove();
    }
  });
}
function radioButtonCheck2(event, radios) {
  let check;
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      check = true;
      break;
    } else {
      check = false;
    }
  }
  if (check === false) {
    const message = document.createElement('p');
    message.setAttribute('id', 'mensagem');
    message.innerHTML = ('Campos inválidos');
    message.style.color = 'red';
    document.querySelector('.form-cadastro').appendChild(message);
    event.preventDefault();
    EraseMessage();
  }
}

function radioButtonCheck() {
  const radios = document.querySelectorAll('input[name="gender"]');
  const btn = document.getElementById('facebook-register');
  btn.addEventListener('click', (event) => {
    radioButtonCheck2(event, radios);
  });
}

function hideRegister() {
  const form = document.getElementsByClassName('form-cadastro');
  form[0].addEventListener('submit', () => {
    const register = document.querySelector('.right-content');
    while (register.firstChild) {
      register.removeChild(register.lastChild);
    }
  });
}
function writeMessage(name, email, genero, birthDate) {
  const write = document.createElement('div');
  write.setAttribute('class', 'right-content');
  document.querySelector('.main-content').appendChild(write);
  const message = document.createElement('p');
  message.innerHTML = `Olá, ${name} email : ${email}`;
  message.innerHTML += ` Genero : ${genero} Data de Nascimento : ${birthDate}`;
  document.querySelector('.right-content').appendChild(message);
}

function registerData() {
  const form = document.getElementsByClassName('form-cadastro');
  form[0].addEventListener('submit', () => {
    let name = `${document.getElementsByName('firstname')[0].value}`;
    name += `${document.getElementsByName('lastname')[0].value}`;
    const email = document.getElementsByName('phone_email')[0].value;
    let genero;
    const radios = document.querySelectorAll('input[name="gender"]');
    for (let index = 0; index < radios.length; index += 1) {
      if (radios[index].checked) {
        genero = radios[index].value;
      }
    }
    const birthDate = document.getElementsByName('birthdate')[0].value;
    writeMessage(name, email, genero, birthDate);
  });
}

registerData();
validateInput();
radioButtonCheck();
customGender();
hideRegister();
