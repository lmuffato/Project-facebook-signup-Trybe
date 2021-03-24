const button = document.getElementById('button-login');
const textInput = document.getElementById('user-email-phone');
const radioButton = document.getElementById('custom');
const label = document.getElementById('label-gender');
const man = document.getElementById('man');
const woman = document.getElementById('woman');

function addInput() {
	if(radioButton.value) {
		const genderText = document.createElement('input');
		genderText.setAttribute('type', 'text');
		label.appendChild(genderText);
		genderText.classList.add('customGender');
	}  

}

radioButton.addEventListener('click', addInput);

// function removeInput() {
// 	const removeGender = document.getElementsByClassName('customGender');
//   if(man.value) {
// 		label.removeChild('removeGender'); 
// 	}  
// }

// man.addEventListener('click', removeInput);
// woman.addEventListener('click', removeInput);



function clickButton() {
  const input = textInput.value;
  alert(input);
}

button.addEventListener('click', clickButton);
