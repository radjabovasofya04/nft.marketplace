'use strict';

document.addEventListener('DOMContentLoaded', e => {
    const btn = document.querySelector('.header_burger'),
          menu = document.querySelector('.header_menu');
          
    btn.addEventListener('click', e => {
        btn.classList.toggle('header_burger_active');
        menu.classList.toggle('header_menu_active');
    })
})