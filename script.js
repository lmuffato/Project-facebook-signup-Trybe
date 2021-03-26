window.onload = function startin() {
  const btnLogin = document.getElementById('button-login');
  btnLogin.addEventListener('click', () => {
    const inputName = document.getElementById('user-email-phone').value;
    alert(inputName);
  });
};

// const fields = document.querySelectorAll('[required]');

// function verifyError(event) {
//   const field = event.target;
//   let foundError = false;
//   if (field.validity.valueMissing === true) {
//     foundError = true;
//   }
//   return foundError;
// }

// function validation(event) {
//   const field = event.target;
//   const error = verifyError(event);
//   if (error) {
//     field.setCustomValidity('Campos inválidos');
//   } else {
//     field.setCustomValidity('');
//   }
// }

// for (let index = 0; index < fields.length; index += 1) {
//   fields[index].addEventListener('invalid', validation);
// }

// const invalidField = document.getElementById('invalidFields');
const fields = document.querySelectorAll('[required]');
const cadasForm = document.querySelectorAll('form')[1];

function clearMessage() {
  const msgInvalid = document.getElementById('message-invalid');
  if (msgInvalid !== null) {
    cadasForm.removeChild(msgInvalid);
  }
}

function verifError() {
  let foundError = 0;
  for (let index = 0; index < fields.length; index += 1) {
    if (fields[index].validity.valueMissing === true) {
      foundError += 1;
    }
  }
  return foundError;
}

function messageInvalid() {
  const error = verifError();
  if (error > 0) {
    const tagP = document.createElement('p');
    tagP.innerText = 'Campos inválidos';
    tagP.id = 'message-invalid';
    tagP.style.color = 'red';
    cadasForm.appendChild(tagP);
  }
}

const btn = document.getElementById('facebook-register');
btn.addEventListener('click', clearMessage);
btn.addEventListener('click', messageInvalid);

for (let index = 0; index < fields.length; index += 1) {
  fields[index].addEventListener('keydown', clearMessage);
}

const genderModify = document.getElementById('Personalizado');
const genderElement = document.querySelector('.gender');
genderModify.addEventListener('click', () => {
  console.log(genderElement.style.visibility = 'visible');
});
