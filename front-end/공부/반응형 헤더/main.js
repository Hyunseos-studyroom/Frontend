const togglebln = document.querySelector(".tagle");
const menu = document.querySelector(".navbar-menu");
const links = document.querySelector(".navbar_links");

togglebln.addEventListener("click", () => {
  menu.classList.toggle("active");
  links.classList.toggle("active");
});
