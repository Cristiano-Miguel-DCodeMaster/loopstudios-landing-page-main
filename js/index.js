const menu = document.querySelector('.menu');
const menumobile = document.querySelector('.menu-mobile');
menu.addEventListener('click', () => {
    menumobile.style.display = "block";
    menumobile.style.display = "flex";
    menumobile.style.animation="move 2s ease 1";
})
const close = document.querySelector('.close');
close.addEventListener('click', () => {
    menumobile.style.animation = "moveout 1s ease 1";
    setTimeout(() => {
        menumobile.style.display = "none";
    }, 900);
})
const a = document.querySelectorAll('.menu-mobile a');
a.forEach(a => {
    a.addEventListener('click', () => {
        menumobile.style.animation = "moveout 6.1s ease 1";
        setTimeout(() => {
            menumobile.style.display = "none";
        }, 6000);
    })
});
const section = document.querySelectorAll('section');
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        
        if (top >= offset && top < offset + height ) {
            sec.classList.add('show');
        } else {
            sec.classList.remove('show');
        }
    })
}
