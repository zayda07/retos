const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')//Trae varias etiqueras


open_btn.addEventListener('click',()=>{
    nav.forEach(nav_elem=>nav_elem.classList.add('visible'))
    //nav_el es una variable
})
close_btn.addEventListener('click',()=>{
    nav.forEach(nav_elem=>nav_elem.classList.remove('visible'))
})
