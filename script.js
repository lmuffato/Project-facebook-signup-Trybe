const btnEntrar = document.getElementById("button-login");







//Alert para atender o requisito 7
btnEntrar.addEventListener('click' ,() => alert(document.getElementById('user-email-phone').value));


function validateInput() {
    const inputs = document.querySelectorAll('.form');
    const btn = document.getElementById('facebook-register');
    
    btn.addEventListener('click', (event) =>{
      for (let index = 0; index < inputs.length; index +=1 ) {
        if(inputs[index].value === '') {
          const message = document.createElement ('p');
          message.setAttribute('id', 'mensagem');
          message.innerHTML =('Campos Inválidos');
          message.style.color = 'red';
          document.querySelector('.form-cadastro').appendChild(message);
          event.preventDefault()
          EraseMessage();
          break;
         
        }
      }
    
    });
   
  
  }
  
  function EraseMessage() {
    if(document.querySelectorAll('#mensagem').length > 1) {
      document.querySelector('#mensagem').remove();
    }
  }
  
  function customGender() {
    const btn = document.getElementById('custom');
    btn.addEventListener('click', () => {
      const custom = document.createElement('input');
      custom.setAttribute('name', 'gender-custom');
      custom.setAttribute('placeholder','Gênero(opcional)');
      document.querySelector('.register-gender').appendChild(custom);
      const customClean = document.querySelectorAll('input[name="gender-custom"]')
      if(customClean.length > 1) {
        customClean[0].remove();
      }
    });
    
  }
  function radioButtonCheck() {
    const radios = document.querySelectorAll('input[name="gender"]');
    const btn = document.getElementById('facebook-register');
    let check;
    btn.addEventListener('click', (event) => {
      for (radio of radios) {
        if(radio.checked){
          check = true;
          break;
        }else {
          check = false;
        }
    
      }
      if(check === false){
        const message = document.createElement ('p');
        message.setAttribute('id', 'mensagem');
        message.innerHTML =('Campos Inválidos');
        message.style.color = 'red';
        document.querySelector('.form-cadastro').appendChild(message);
        event.preventDefault();
        EraseMessage();
       
      }
   
    });
  
  }
  
  function hideRegister() {
    const form = document.getElementsByClassName('form-cadastro'); 
    form[0].addEventListener('submit', (event) => {
      const register = document.getElementsByClassName('right-content');
      register[0].style.display = 'none';
      event.preventDefault();
      });
   
  }
  function registerData() {
    const form = document.getElementsByClassName('form-cadastro');
    form[0].addEventListener('submit', () => {
    let name = document.getElementsByName('firstname')[0].value + ' ' + document.getElementsByName('lastname')[0].value ;
    let email = document.getElementsByName('phone_email')[0].value;
    let genero;
    const radios = document.querySelectorAll('input[name="gender"]');
    for( radio of radios ){
      if(radio.checked) {
       genero = radio.value;
       }
    }
    if(genero === 'male') {
      genero = 'Masculinho'
    }else if(genero ==='female'){
      genero = 'Feminino';
    }else {
      genero = 'Personalizado';
    }
    let birthDate = document.getElementsByName('birthdate')[0].value;
    writeMessage(name,email,genero,birthDate);
    });
    
  
  }
  function writeMessage(name,email,genero,birthDate) {
     const write = document.createElement('div');
      write.setAttribute('class','rigth-content2' )
      document.querySelector('.main-content').appendChild(write);
      const message = document.createElement('p');
      message.innerHTML ='Olá, '+ name + ' email : ' + email + ' Genero : ' + genero + ' Data de Nascimento : ' + birthDate;
      document.querySelector('.rigth-content2').appendChild(message);
      

      
  
  }
  registerData();
  validateInput(); 
  radioButtonCheck();
  customGender();
  hideRegister();
  
  
  
  



