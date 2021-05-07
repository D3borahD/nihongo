const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const scroll = this.document.documentElement.scrollTop;

  if (scroll > 31) {
    header.style.background = "rgba(128, 128, 128, 0)";
  } else {
    header.style.background = "rgba(128, 128, 128, 1)";
  }
});
