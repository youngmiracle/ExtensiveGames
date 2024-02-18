let input = document.getElementById('password__input');
let ss = document.getElementById('password__showPassword');

ss.onclick = function (){
	if (input.getAttribute('type') === 'password') {
		input.setAttribute('type', 'text');
	} 
	else {
		input.setAttribute('type', 'password'); 
	}
}

