window.onload = () => {
    document.querySelector('#button-login').addEventListener('click', () => {
      alert(document.querySelector('#user-email-phone').value);
    });
  }