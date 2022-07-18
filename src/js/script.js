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