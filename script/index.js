// Toggle menu when the menu button is clicked
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});
