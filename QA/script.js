const crosses = document.querySelectorAll(".cross");
const qsn = document.querySelectorAll(".qsn");
const answers = document.querySelectorAll(".ans");

for (let key of qsn) {
  key.addEventListener("click", (e) => {
    // console.log(e.currentTarget);
    let qsnId = e.currentTarget.getAttribute("qsnId");
    // console.log(qsnId);

    for (let answer of answers) {
      if (document.querySelector(qsnId) != answer) {
        answer.classList.add("hidden");
      }
    }
    for (let cross of crosses) {
      if (e.currentTarget.lastElementChild != cross) {
        cross.classList.remove("rotate");
      }
    }
    document.querySelector(qsnId).classList.toggle("hidden");
    e.currentTarget.lastElementChild.classList.toggle("rotate");
  });
}
