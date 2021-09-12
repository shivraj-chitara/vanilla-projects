const titles = document.querySelectorAll(".title");
const paras = document.querySelectorAll(".para");

for (let title of titles) {
  title.addEventListener("click", (e) => {
    for (let title of titles) {
      title.classList.remove("white");
    }
    e.currentTarget.classList.add("white");

    for (let para of paras) {
      para.classList.remove("active");
    }

    const id = e.currentTarget.getAttribute("getId");

    document.querySelector(id).classList.add("active");
  });
}
