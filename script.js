// Consts //
let submitCount = 0;
const buttonFacebookRegister = document.querySelector('#facebook-register');
const buttonCustomGender = document.querySelector('#custom');

// REQUISITO 5

function login() {
    const userEmailPhone = document.getElementById('user-email-phone');
    alert(userEmailPhone.value);
  }

// REQUISITO 18

function validateRegister() {
    submitCount = 0;
    validateFirstName();
    validateLastName();
    validatePhoneEmail();
    validatePassword();
    validateBirthDate();
    validateGender();

    if (submitCount === 6) {
        wellcome();
    }
}

// Funções de Validação //
// https://www.w3schools.com/jsref/coll_doc_forms.asp //
function validateFirstName() {
    if (document.forms.registrationForm.firstname.value === '') {
        document.querySelector('#invalid').innerText = 'Campos inválidos'
    } else {
        submitCount += 1;
    }
}

function validateLastName() {
    if (document.forms.registrationForm.lastname.value === '') {
        document.querySelector('#invalid').innerText = 'Campos inválidos'
    } else {
        submitCount += 1;
    }
}

function validatePassword() {
    if (document.forms.registrationForm.password.value === '') {
        document.querySelector('#invalid').innerText = 'Campos inválidos'
    } else {
        submitCount += 1;
    }
}

function validatePhoneEmail() {
    if (document.forms.registrationForm.phone_email.value === '') {
        document.querySelector('#invalid').innerText = 'Campos inválidos'
    } else {
        submitCount += 1;
    }
}

function validateBirthDate() {
    if (document.forms.registrationForm.birthdate.value === '') {
        document.querySelector('#invalid').innerText = 'Campos inválidos'
    } else {
        submitCount += 1;
    }
}

function validateGender() {
    if (document.forms.registrationForm.gender.value === '') {
        document.querySelector('#invalid').innerText = 'Campos inválidos'
    } else {
        submitCount += 1;
    }
}

// REQUISITO 19

function createCustomGender() {
    const custom = document.querySelector('#hidden-input');
    custom.innerHTML = '<input name="gender-custom" placeholder="Gênero (opcional)" type="text">';
}

// REQUISITO 20

// 20. Substitua o conteúdo do container com a classe right-content se o formulário estiver completamente preenchido e validado
// Pontos importantes:

// Deve haver um texto no modelo "Olá, Jonh Doe" (substitua John Doe pelo nome e sobrenome preenchido no formulário)
// Exibir o e-mail ou telefone
// Não exibir a senha
// Exibir a data de nascimento
// Caso a opção selecionada no campo Gênero seja Feminino exibir "Feminino"
// Caso a opção selecionada no campo Gênero seja Masculino exibir "Masculino"
// Caso a opção selecionada no campo Gênero seja Personalizado exibir "Personalizado":

function wellcome() {
    const rightContent = document.querySelector('.right-content')
    const wellcomeText = document.querySelector('registrationForm');
    rightContent.innerText = 'Opa, tudo bem?';
    console.log(wellcomeText);
}

// Eventos //
buttonFacebookRegister.addEventListener('click', validateRegister); // Requisito 18, puxa validateRegister e essa puxa as outras validações //
buttonCustomGender.addEventListener('click', createCustomGender);
document.getElementById('button-login').addEventListener('click', login);




