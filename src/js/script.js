"use strict";

const burger = document.querySelector('.burger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const points = document.querySelectorAll('.percentages__body-points'),
		lines = document.querySelectorAll('.percentages__box-yellow');

points.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});