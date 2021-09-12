const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  header.classList.add("hfull");
  menu.classList.remove("active");
  menu.classList.add("disable");
  nav.style.display = "flex";
});
cross.addEventListener("click", () => {
  header.classList.remove("hfull");
  menu.classList.add("active");
  menu.classList.remove("disable");
  nav.style.display = "none";
});
