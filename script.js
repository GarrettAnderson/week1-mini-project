// when user clicks on burger menu icon, toggle the ul

const menuIcon = document.querySelector('.burger-icon-menu')
const navMenu = document.querySelector('ul')

function openMenu() {
    navMenu.classList.toggle('open')
}

menuIcon.addEventListener('click', openMenu)