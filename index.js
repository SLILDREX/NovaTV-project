const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const overlay = document.querySelector('.overlay');
const disableScroll = document.querySelector('body');

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  overlay.style.display = offScreenMenu.classList.contains('active') ? 'block' : 'none';
  disableScroll.style.overflow = offScreenMenu.classList.contains('active') ? 'hidden' : 'auto';
});