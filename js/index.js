const menu = document.querySelector('.menu');
const menumobile = document.querySelector('.menu-mobile');
menu.addEventListener('click', () => {
    menumobile.style.display = "block";
})
const close = document.querySelector('.close');
close.addEventListener('click', () => {
    menumobile.style.display = "none";
})