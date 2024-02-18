//Скрипт на приветствие с пользователем
function Hello(){
    let hi = document.getElementById('hi');
    let header = document.getElementById('header');
    let article = document.getElementById('article');
    hi.style.visibility = 'hidden'
    header.style.visibility = 'visible'
    article.style.visibility = 'visible'
    
    setTimeout(function () {
        logoExtensive.style.opacity = '0%';
        
        }, 5000);
}
document.getElementById('hi__Start').onclick = Hello;
//Курсор мыши
document.onmousemove = (e) => {
	document.onclick = () => {
		let circle = document.createElement('div');
		circle.classList.add('click');
		circle.style.left = e.pageX + 'px';
		circle.style.top = e.pageY + 'px';
		document.body.appendChild(circle);

		setTimeout(() => {
			circle.remove();
		}, 1000);
	};
};

