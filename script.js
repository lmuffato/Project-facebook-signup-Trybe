const loginBtn = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const personal = document.querySelector('#personal');
const genderField = document.querySelector('#gender-field');

console.log(`Personal: ${personal.innerHTML}`);
console.log(`Gender Field: ${genderField.innerHTML}`);
loginBtn.addEventListener('click', (e) => {
  if (userEmailPhone.innerText === '') {
    alert(userEmailPhone.value);
  }
  e.preventDefault();
});

genderField.addEventListener('click', (e) => {
  const selected = e.target;
  if (selected === personal) {
    const opcional = document.createElement('input');
    opcional.setAttribute('type', 'text');
    opcional.setAttribute('name', 'gender-custom');
    opcional.setAttribute('placeholder', 'Gênero (opcional)');
    genderField.appendChild(opcional);
  }
  console.log(`Selected: ${selected.innerHTML}`);
});
