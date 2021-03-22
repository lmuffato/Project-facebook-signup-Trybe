// Consts //
const buttonFacebookRegister = document.querySelector('#facebook-register');
let submitCount = 0;

function validateRegister() {
    submitCount = 0;

    validateFirstName();
    validateLastName();
    validatePhoneEmail();
    validatePassword();
    validateBirthDate();
    validateGender();
    console.log(submitCount)
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

function validatePhoneEmail() {
    if (document.forms.registrationForm.phone_email.value === '') {
        document.querySelector('#invalid').innerText = 'Campos inválidos'
    } else {
        submitCount += 1;
    }
}

function validateBirthdate() {
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

//Eventos //
buttonFacebookRegister.addEventListener('click', validateRegister); // Requisito 18, puxa validateRegister e essa puxa as outras validações //