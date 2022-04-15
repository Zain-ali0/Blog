const menuToggle = document.querySelector('.menuToggle');
const header = document.querySelector('header');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
})

function togglemenu() {
    menuToggle.classList.remove('active');
    navigation.classList.remove('active');
}