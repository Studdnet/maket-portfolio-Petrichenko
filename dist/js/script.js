"use strict";

const burger = document.querySelector('.burger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');


// Боковое меню 

burger.addEventListener('click', () => {
	menu.classList.add('active');
	document.body.classList.add('_lock');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
	document.body.classList.remove('_lock');
});


// Кнопка для возвращения в начало страницы

let calcScrollValue = () => {
	let scrollProgress = document.getElementById('progressButton');
	let progressValue = document.getElementById('progressButton__value');
	let pos = document.documentElement.scrollTop;
	let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);

	if (pos > 400) {
		scrollProgress.style.display = 'grid';
	} else {
		scrollProgress.style.display = 'none';
	}

	scrollProgress.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#ffa501 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// Прокрутка при клике 

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
let menuItems = document.querySelectorAll('.menu__item[data-goto]');
if (menuItems.length > 0) {
	menuItems.forEach(menuItem => {
		menuItem.addEventListener("click", onMenuItemClick);
	});
}

function onMenuItemClick(e) {
	const menuItem = e.target;
	if (menuItem.dataset.goto && document.querySelector(menuItem.dataset.goto)) {
		const gotoBlock = document.querySelector(menuItem.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset + 100;

		if (menu.classList.contains('active')) {
			document.body.classList.remove('_lock');
			menu.classList.remove('active');

		}

		window.scrollTo({
			top: gotoBlockValue
		});
		e.preventDefault();
	}
}


// $(document).ready(function () {

// 	function validateForms(form) {
// 		$(form).validate({
// 			rules: {
// 				name: {
// 					required: true,
// 					minlength: 2
// 				},
// 				email: {
// 					required: true,
// 					email: true
// 				}
// 			},
// 			messages: {
// 				name: {
// 					required: "Введите свое имя",
// 					minlength: jQuery.validator.format("Минимальное кол-во символов: {0}")
// 				},
// 				email: {
// 					required: "Нам нужен ваш email для обратной связи",
// 					email: "Ваш email должен соответствовать формату: name@domain.com"
// 				}
// 			}
// 		});
// 	}

// 	validateForms('#contacts__form');

// });