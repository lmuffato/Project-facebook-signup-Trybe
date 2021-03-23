window.onload = () => {
  document.querySelector('#button-login').addEventListener('click', () => {
    alert(document.querySelector('#user-email-phone').value);
  });
};

function genderCustom() {
  if (document.querySelector('#customGender').checked === true) {
    const parentEle = document.querySelector('#personalizedGender');
    const e = document.createElement('input');
    c = e;
    b = c;
    a = b;
    parentEle.appendChild(e);
    e.id = 'gender-custom';
    c.setAttribute('name', 'gender-custom');
    b.setAttribute('type', 'text');
    a.setAttribute('placeholder', 'Gênero (opcional)');
  }
}

function Clicou1(evento) {
  console.log('mouse clicou no botão 1');
  console.log(evento.target);
  genderCustom();
}

document.getElementById('customGender').addEventListener('click', Clicou1);

function clickParaSelecionar() {
  document.getElementById('gender-custom').remove();
}

document.querySelectorAll('.genderRadio1').forEach((elementoSelecionado) => {
  elementoSelecionado.addEventListener('click', clickParaSelecionar);
});
