const closeButton = document.getElementById('closeButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuButton = document.getElementById('menuButton');

closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

menuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});


