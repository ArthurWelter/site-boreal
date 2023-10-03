const botaoX = document.querySelectorAll('.cara-nova i');
const caraNova = document.querySelector('.cara-nova')

botaoX.forEach((botao) => {
    botao.addEventListener ('click', () => {
        caraNova.classList.add('desativa')
    })
})

var swiper =new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});

const imgs =document.getElementById("img");
const img = document.querySelectorAll("#img .preview");

let idx = 0;

function carrosel(){
    idx++;

    if(idx > img.lenght - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}vw)`;
}

setInterval(carrosel, 2000);




const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });







//   const countUp = new CountUp('targetId', 5234, {
//     plugin: new Odometer({ duration: 2.3, lastDigitDelay: 100 }),
//     duration: 3.0
//   });
//   const countUp = new CountUp('targetId', 989, { enableScrollSpy: true });

import { CountUp } from './js/countUp.min.js';

window.onload = function() {
  var countUp = new CountUp('target', 2000);
  countUp.start();
}