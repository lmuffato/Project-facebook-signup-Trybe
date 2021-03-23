const btn = document.querySelector('#button-login');
const contact = document.querySelector('#user-email-phone');

function getContact() {
  alert(contact.value);
}

btn.addEventListener('click', getContact);
