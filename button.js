const headerToggle = document.querySelector(".header__toggle");
const toggleMenu = document.querySelector(".header__toggle--menu");

headerToggle.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  headerToggle.classList.toggle("active");
});
