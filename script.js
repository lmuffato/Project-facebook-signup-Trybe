const female = document.querySelector('#female');
const male = document.querySelector('#male');

document.querySelector('#button-login').addEventListener('click', () => {
  const userEmailPhone = document.querySelector('#user-email-phone');
  alert(userEmailPhone.value);
});

// Requisito 19 - Cria um input de texto quando clica no radio button 'Personalizado'
document.querySelector('#custom').addEventListener('click', () => {
  const listRegister = document.querySelector('.register');
  if (listRegister.lastElementChild.type !== 'text') {
    const customInput = document.createElement('input');
    customInput.id = 'custom-box';
    customInput.type = 'text';
    customInput.name = 'gender-custom';
    customInput.placeholder = 'Gênero (opcional)';
    listRegister.appendChild(customInput);
  }
});

// Requisito 19 - Remove o input de texto criado quando clica nos radio buttons 'Feminino' e 'Masculino'
[female, male].forEach((item) => {
  item.addEventListener('click', () => {
    const customBox = document.querySelector('#custom-box');
    if (customBox) {
      customBox.remove();
    }
  });
});
