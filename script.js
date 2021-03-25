const email = document.querySelector('#user-email-phone');
const form = document.querySelector('.facebook-login');
const genders = document.getElementsByName('gender');

function showEmail() {
  alert(email.value);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showEmail();
});

window.onload => () {
  genders.forEach((gender) => {
    console.log(gender)
  })
}
