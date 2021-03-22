const email = document.querySelector('#user-email-phone');
const form = document.querySelector('.facebook-login');

function showEmail(Event) {
  alert(email.value);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showEmail();
});
