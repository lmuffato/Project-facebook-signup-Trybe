// Requisito 7
const btnEntrar = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
btnEntrar.addEventListener('click', () => alert(userEmailPhone.value));

const btncadastrar = document.getElementById('facebook-register');
btncadastrar.addEventListener('click', () =>{
    const inputname = document.getElementsByClassName('lastName');
    if (inputname.value === " ") {
        console.log("campo vazio");

    }
})