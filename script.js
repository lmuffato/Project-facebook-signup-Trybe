// Requisito 7
const btnEntrar = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
btnEntrar.addEventListener('click', () => alert(userEmailPhone.value));

// Requisito 18
// Referencia para resolução do requisito : https://www.youtube.com/watch?v=GTMEuHxh8aQ

function eventRequired() {
  const msg = document.getElementById('msg');
  msg = msg.innerHTML = '<span><strong>Campos inválidos</strong></span>';
  const fields = document.querySelectorAll('[required]');
  for (let index = 0; index < fields.length; index += 1) {
    fields[index].addEventListener('invalid', () => msg);
  }
}

const btncadastra = document.getElementById('facebook-register');
btncadastra.addEventListener('click', eventRequired);
