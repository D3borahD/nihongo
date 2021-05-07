const headerToggle = document.querySelector(".header__toggle");
const toggleMenu = document.querySelector(".header__toggle--menu");
const menu = document.querySelector(".menu");

headerToggle.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  headerToggle.classList.toggle("active");
  menu.classList.toggle("active");
});
