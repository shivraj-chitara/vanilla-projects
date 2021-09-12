const btn = document.querySelector("button");
const cross = document.querySelector(".cross");
const modalShow = document.querySelector(".modal-show");
const main = document.querySelector("main");
const section = document.querySelector("section");

btn.addEventListener("click", () => {
  modalShow.classList.add("active");
  section.classList.add("blur");
});
cross.addEventListener("click", () => {
  modalShow.classList.remove("active");
  section.classList.remove("blur");
});
section.addEventListener("click", () => {
  modalShow.classList.remove("active");
  section.classList.remove("blur");
});
