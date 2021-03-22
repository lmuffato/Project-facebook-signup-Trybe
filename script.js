//  Função click exibe alerta com valor do campo
function testFunction() {
  // alert(document.getElementById('user-email-phone').value);
  const button = document.querySelector('.form-control');
  button.addEventListener('click', () => {
    const text = document.getElementById('user-email-phone').value;
    alert(text);
  });
}

testFunction();
