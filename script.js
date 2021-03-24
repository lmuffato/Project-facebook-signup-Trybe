function alertUserEmail(buttonElement, text) {
  const button = buttonElement;
  button.addEventListener('click', () => {
    if (text.value !== '') {
      alert(text.value);
    }
  });
}
const button = document.querySelector('#button-login');
const valueEmail = document.querySelector('#user-email-phone');
alertUserEmail(button, valueEmail);

function validateInputsRegister(inputElements) {
  const inputs = inputElements;
  let validate = true;
  const validateFalse = false;
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      validate = validate && validateFalse;
    }
  }
  return validate;
}
function validateRadioButton(radioButtonElement) {
  const radioButton = radioButtonElement;
  let validate = false;
  for (let index = 0; index < radioButton.length; index += 1) {
    if (radioButton[index].checked) {
      validate = validate || true;
    }
  }
  return validate;
}

function elementText(element, text) {
  const el = document.createElement(element);
  el.innerHTML = text;
  return el;
}

function logEntries() {
  const rightContent = document.querySelector('.right-content');
  const firstName = document.querySelector('input[name="firstname"]');
  const lastName = document.querySelector('input[name="lastname"]');
  const emailAndPhone = document.querySelector('input[name="phone_email"]');
  const birthDate = document.querySelector('input[name="birthdate"]');
  const gender = [...document.querySelectorAll('.gender__radios input')];
  rightContent.innerHTML = '';
  rightContent.appendChild(elementText('h3',
    `Olá, ${firstName.value} ${lastName.value}`));
  rightContent.appendChild(elementText('p',
    `<strong>Email/telefone:</strong> ${emailAndPhone.value}`));
  rightContent.appendChild(elementText('p',
    `<strong>Data de nascimento:</strong> ${birthDate.value}`));
  rightContent.appendChild(elementText('p',
    `<strong>Gênero:</strong> ${gender.filter((x) => x.checked)[0].value}`));
}

function validateRegister(buttonValidate, selector, radioElements) {
  const buttonRegister = buttonValidate;

  buttonRegister.addEventListener('click', (e) => {
    const inputElements = document.querySelectorAll(selector);
    const validateInputs = validateInputsRegister(inputElements);
    const validateRadios = validateRadioButton(radioElements);
    if ((validateInputs && validateRadios) === false) {
      document.querySelector('.error').classList.add('open');
    } else {
      logEntries();
    }
    e.preventDefault();
  });
}

function createCustomGender(parentForm, submitButton) {
  const form = parentForm;
  const input = document.createElement('input');
  const gCustomName = 'gender-custom';
  input.type = 'text';
  input.id = gCustomName;
  input.name = gCustomName;
  input.classList.add(gCustomName);
  input.placeholder = 'Gênero (opcional)';

  form.insertBefore(input, submitButton);
}

function removeElements(selector) {
  const childs = document.querySelectorAll(selector);
  for (let x = 0; x < childs.length; x += 1) {
    childs[x].remove();
  }
}

function customGender(GenderRadiosElement, submitButton, parentForm) {
  const radios = GenderRadiosElement;
  radios.addEventListener('click', (e) => {
    const { target } = e;
    const { localName, id } = target;

    console.log(localName.split(''), target, id);
    if (localName === 'input' && id === 'Personalizado') {
      removeElements('.gender-custom');
      createCustomGender(parentForm, submitButton);
    } else if (localName === 'input') removeElements('.gender-custom');
  });
}

const buttonValidate = document.querySelector('#facebook-register');

const radiosRegister = document.querySelectorAll('.gender input');
const custoGender = document.querySelector('.gender__radios');
const registerForm = document.querySelector('.right-content form');
const inputsSelector = '.right-content input[type="text"]';
validateRegister(buttonValidate, inputsSelector, radiosRegister);
customGender(custoGender, buttonValidate, registerForm);

const textP = `O início do Facebook se deu em 2003, 
quando Mark Zuckerberg, Dustin Moskovitz e Chris Hughes, estudantes na 
Universidade de Harvard,desenvolveram uma rede social exclusiva para o
 campus. Em 2004, Zuckerberg criou o thefacebook.com, que se tornou o 
 Facebook no ano seguinte.
Hoje, o Facebook é a maior rede social do mundo, com mais de 2 bilhões 
de usuários ativos. Na plataforma, os usuários podem criar um perfil 
ou uma fan page, interagindo entre si através de "likes", mensagens 
e compartilhamentos de imagens e textos. 
De acordo com Mark Zuckerberg, o objetivo da rede social é conectar 
pessoas, criando um mundo mais transparente. Entre os valores da 
companhia estão a liberdade de compartilhamento de informações e 
de conexão, respeito à privacidade dos usuários, liberdade e fluxo 
livre de informações, igualdade de fundamentos, responsabilidade e 
transparência.
O Facebook chegou oficialmente ao Brasil em 2007, quando recebeu 
suporte à língua portuguesa.`;

const createdivFacebook = () => {
  const filho = document.createElement('div');
  filho.classList.add('history__facebook');
  const main = document.querySelector('.main');
  main.appendChild(filho);
  const filhoDiv = document.createElement('div');
  filhoDiv.classList.add('history_child');
  filho.appendChild(filhoDiv);
  const p = document.createElement('p');
  p.innerHTML = textP;
  p.classList.add('facebook_p');
  filhoDiv.appendChild(p);
};

const efeitoEscrita = () => {
  const p = document.querySelector('.facebook_p');
  const elemento = p.innerHTML.split('');
  p.innerHTML = '';
  elemento.forEach((letra, index) => {
    setTimeout(() => { p.innerHTML += letra; }, 30 * index);
  });
};

const historyOfFacebook = (link) => {
  link.addEventListener('click', () => {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    createdivFacebook();
    efeitoEscrita();
  });
};
const linkHistory = document.querySelector('a');
historyOfFacebook(linkHistory);
