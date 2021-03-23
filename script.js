const buttonLogin = document.getElementById('button-login');
const inputEmailTel = document.getElementById('user-email-phone');
buttonLogin.addEventListener('click', (Event) => {
  Event.preventDefault();
  alert(inputEmailTel.value);
});


const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', (Event) => {
  Event.preventDefault();
  if(document.getElementsByName('firstname').value === null) {
    // const elementVadidator = document.getElementsByName('firstname');
    // elementVadidator.appendChild('Campos inválidos'); 
    alert('Campos inválidos');
  }
  if(document.getElementsByName('lastname').value === null) {
    // const elementVadidator = document.getElementsByName('lastname');
    // elementVadidator.appendChild('Campos inválidos');
    alert('Campos inválidos');
  }
  if(document.getElementsByName('phone_email').value === null) {
    // const elementVadidator = document.getElementsByName('phone_email');
    // elementVadidator.appendChild('Campos inválidos');
    alert('Campos inválidos');
  }
  if(document.getElementsByName('password').value === null) {
    // const elementVadidator = document.getElementsByName('password');
    // elementVadidator.appendChild('Campos inválidos');
    alert('Campos inválidos');
  }
  if(document.getElementsByName('gender').value === null) {
    // const elementVadidator = document.getElementsByName('gender');
    // elementVadidator.appendChild('Campos inválidos');
    alert('Campos inválidos');
  }
  if(document.getElementsByName('birthdate').value === null) {
    // const elementVadidator = document.getElementsByName('birthdate');
    // elementVadidator.appendChild('Campos inválidos');
    alert('Campos inválidos');
  }
});