const buttonRegister = document.querySelector('#facebook-register');
const errorMessage = document.createElement('span');
const female = document.querySelector('#female');
const male = document.querySelector('#male');

document.querySelector('#button-login').addEventListener('click', () => {
  const userEmailPhone = document.querySelector('#user-email-phone');
  alert(userEmailPhone.value);
});

// Requisito 18
buttonRegister.addEventListener('click', (event) => {
  const text = document.querySelectorAll('.input-text');
  let bln = false;
  for (let i = 0; i < text.length; i += 1) if (text[i].value === '') bln = true;
  if (bln) {
    event.preventDefault();
    errorMessage.innerText = 'Campos inválidos';
    document.querySelector('.register').appendChild(errorMessage);
  }
});

// Requisito 19 - Cria um input de texto quando clica no radio button 'Personalizado'
document.querySelector('#custom').addEventListener('click', () => {
  const genderList = document.querySelector('.gender-list');
  if (genderList.lastElementChild.type !== 'text') {
    const customInput = document.createElement('input');
    customInput.id = 'custom-box';
    customInput.type = 'text';
    customInput.name = 'gender-custom';
    customInput.placeholder = 'Gênero (opcional)';
    customInput.style.margin = '5px 0';
    genderList.appendChild(customInput);
  }
});

// Requisito 19 - Remove o input de texto criado quando clica nos radio buttons 'Feminino' e 'Masculino'
[female, male].forEach((item) => {
  item.addEventListener('click', () => {
    const customBox = document.querySelector('#custom-box');
    if (customBox) customBox.remove();
  });
});
