//Скрипт для глаза в придумайте пароль
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

//Скрипт для глаза в повторите пароль
let inputTwo = document.getElementById('password__inputTwo');
let Eyes = document.getElementById('password__showPasswordTwo');

Eyes.onclick = function (){
	if (inputTwo.getAttribute('type') === 'password') {
		inputTwo.setAttribute('type', 'text');
	} 
	else {
		inputTwo.setAttribute('type', 'password'); 
	}
}


const btnReg = document.getElementById('button__reg');

//
let PasswordCheck = document.getElementById('CheckInput');
PasswordCheck.onclick = function (){
    let passwordFirst = document.getElementById('password__input');
    let passwordSecond = document.getElementById('password__inputTwo');
    let passwordFirstVal = passwordFirst.value;
    let passwordSecondVal = passwordSecond.value;
    if(passwordFirstVal === passwordSecondVal && passwordSecondVal.trim() !== ''){
        document.getElementById('password__inputTwo').style.backgroundColor = 'green';
        document.getElementById('CheckInput').style.opacity = '0';
        document.getElementById('button__reg').style.zIndex = '3';
        btnReg.type = 'submit';
    }
    let NameCheck = document.getElementById('nameUser');
    let NameCheckVal = NameCheck.value;
    if (NameCheckVal == ''){
        document.getElementById('nameUser').style.backgroundColor = 'red';
    }
    else{
        document.getElementById('nameUser').style.backgroundColor = 'black';
    }
    let LoginCheck = document.getElementById('login__input');
    let LoginCheckVal = LoginCheck.value;
    if (LoginCheckVal == ''){
        document.getElementById('login__input').style.backgroundColor = 'red';
    }
    else{
        document.getElementById('login__input').style.backgroundColor = 'black';
    }
    if (passwordFirstVal == ''){
        document.getElementById('password__input').style.backgroundColor = 'red';
    }
    else{
        document.getElementById('password__input').style.backgroundColor = 'black';
    }
}
//Скрипт на принятие параметров в Local Storage
btnReg.onclick = function(){
    if(btnReg.type === 'submit'){
        let nameUser = document.getElementById('nameUser');
        let loginUser = document.getElementById('login__input');
        let passwordUser = document.getElementById('password__inputTwo');
        var UserObj = {
            userName: nameUser.value,
            login: loginUser.value,
            password: passwordUser.value
        }; 
        let NameCheckVal = nameUser.value;
        if(NameCheckVal.trim() !== '' ){
            localStorage.setItem('Name User', UserObj.userName);
        }
        else{
            alert('Введите имя')
        }
        let LoginCheckVal = loginUser.value;
        if(LoginCheckVal.trim() !== '' ){
            localStorage.setItem('Login User', UserObj.login);
        }
        else{
            alert('Введите логин')
        }
        let PasswordCheckVal = passwordUser.value;
        if(PasswordCheckVal.trim() !== '' ){
            localStorage.setItem('Password User', UserObj.password);
        }
        else{
            alert('Введите пароль')
        }     
    }
    else{
        alert('Данные введены неверно!!!');
    }
}

