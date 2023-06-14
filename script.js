// Add the following script at the bottom of your HTML file or in a separate JavaScript file

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});