const nav = document.querySelector("nav");
const links = document.querySelectorAll("a");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 100) {
    nav.classList.add("nav-fixed");
    for (let link of links) {
      link.classList.add("black");
    }
  } else {
    nav.classList.remove("nav-fixed");
    for (let link of links) {
      link.classList.remove("black");
    }
  }
});
