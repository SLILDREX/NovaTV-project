const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const overlay = document.querySelector('.overlay');

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  overlay.style.display = offScreenMenu.classList.contains('active') ? 'block' : 'none';
});