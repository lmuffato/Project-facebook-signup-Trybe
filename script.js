window.onload = () => {
  document.querySelector('#button-login').addEventListener('click', () => {
    alert(document.querySelector('#user-email-phone').value);
  });
};

//CRIAR CAMPO PARA GENERO PERSONALIZADO
document.getElementById('customGender').addEventListener('click', Clicou1);
  function Clicou1 (evento) {
  console.log('mouse clicou no botão 1');
  console.log(evento.target);
  genderCustom ()
}

function genderCustom () {
  if (document.querySelector('#customGender').checked === true) {
    parentEle = document.querySelector('#personalizedGender');
    let elementoCriado = document.createElement('input');
    parentEle.appendChild(elementoCriado);
    elementoCriado.id = 'gender-custom';
    elementoCriado.setAttribute('name', 'gender-custom');
    elementoCriado.setAttribute('type', 'text');
    elementoCriado.setAttribute('placeholder', 'Gênero (opcional)');
  }
}

//REMOVENDO O GENERO PERSONALIZADO
document.querySelectorAll('.genderRadio1').forEach(elementoSelecionado => {
    elementoSelecionado.addEventListener('click', clickParaSelecionar);
    function clickParaSelecionar(){
    document.getElementById('gender-custom').remove()
  } 
});
