const user = document.getElementById('user-email-phone');
const login = document.getElementById('button-login');
/* const buttom = document.getElementById('facebook-register');
const inputs = document.getElementsByTagName('input')
const text = document.createElement('p')
const formulario = document.getElementById('nameContainer') */

function alerta() {
  alert(user.value);
}

login.addEventListener('click', alerta);

// * function checkFill {
//   text.innerText = 'Campos inválidos'
//   ifinputs.value === '') {
//     text.appendChild(formulario)
//   }
// }
// buttom.addEventListener('click', checkFill)

// const rightContent = document.querySelector('.right-content');
// const error = document.createElement('h1');
// const radio = document.querySelector('#form').gender;
// const submitForm = document.getElementById('submitForm');
// // inputs values/////////////////
// const name = document.getElementById('name').value;
// const sobrenome = document.getElementById('sobrenome');
// const email = document.getElementById('celular-email');
// const senha = document.getElementById('senha');
// const birthdate = document.getElementById('birthdate');
// function checkGender() {
//   for (let index = 0; index < 3; index += 1) {
//     if (radio[index] === true) {
//     }
//   }
// }
// checkGender();
// // inputs values/////////////////

// console.log(radio);

// function checkRadio() {
//   if (radio[0].checked === false && radio[1].checked === false && radio[2].checked === false) {
//     return false;
//   }
//   return true;
// }

// function register(e) {
//   e.preventDefault();
//   for (let index = 0; index < inputs.length; index += 1) {
//     if (inputs[index].value === '' || checkRadio() === false) {
//       error.innerText = 'Campos inválidos';
//       rightContent.appendChild(error);
//       break;
//     }
//     rightContent.classList.add('removeElement');
//     submitedForm();
//   }
// }

// buttom.addEventListener('click', register);

// function submitedForm() {
//   submitForm.classList.remove('removeElement');
//   const p = document.getElementById('p');
//   p.innerHTML = `Olá ${nome.value} ${sobrenome.value}`
//   p.innerHTML = `Email: ${email.value}`
//   p.innerHTML = `Data de nascimento: ${birthdate.value}`
//   // p.innerHTML = `Gênero:`
// }

// const gender = document.getElementById('personalizado')
// const genderConteiner = document.getElementsByClassName('genderConteiner')

// function customGender() {
//   const customInput = document.createElement('input')
//   genderConteiner.appendChild(customInput)
//   Object.assign(customInput, {
//     id: customGenderId,
//     name: customGenderName,
//     type: 'text',
//     placeholder: 'Gênero (opcional)',
//   });
// }
// gender.addEventListener('click', customGender);
