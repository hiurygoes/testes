var parar;
var slideItem = 0;
var bolinha = document.getElementsByClassName('bolinha');

window.onload = function() {
	this.passarSlide();
  parar = setInterval(this.passarSlide, 4000);

	var slidewidth = document.getElementById('slideshow').offsetWidth;
	var objs = document.getElementsByClassName('slide');
	for(var i = 0; i < objs.length; i++) {
		objs[i].style.width = slidewidth + 'px';
	}
}

function passarSlide() {
	var slidewidth = document.getElementById('slideshow').offsetWidth;
	var anterior = 0;

	if(slideItem >= bolinha.length - 1) {
		slideItem = 0;
	} else {
		slideItem++;
	}
	
	document.getElementsByClassName('slideshowarea')[0].style.marginLeft = '-' + (slidewidth * slideItem) + 'px';
	anterior = (slideItem === 0) ? bolinha.length - 1 : slideItem - 1;

	if (bolinha[anterior].classList.contains('active')) {
		bolinha[anterior].classList.remove('active');
	}

	if (!bolinha[slideItem].classList.contains('active')) {
		bolinha[slideItem].classList.add('active');
	}
}

function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
	for (var i = 0; i < bolinha.length - 1; i++) {
		bolinha[i].classList.remove('active');
	}
	bolinha[slideItem].classList.add('active');
}

function toggleMenu() {
	var menu = document.getElementById("menu");
	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
}

function iniciarAnimacao() {
	if (parar === null) { 
    parar = setInterval(passarSlide, 4000);
	}
}

function pararAnimacao() {
	if (parar) { 
    clearInterval(parar);
    parar = null;
  }
}