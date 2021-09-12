const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const nav = document.querySelector("nav");
// const text = document.querySelector("#text");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  // text.classList.toggle("content");
});

cross.addEventListener("click", () => {
  nav.classList.remove("active");
  // text.classList.remove("content");
});
