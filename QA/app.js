// const cross = document.querySelectorAll(".cross");
// const qsn = document.querySelectorAll(".qsn");
// const answers = document.querySelectorAll(".ans");

// for (let key of qsn) {
//   key.addEventListener("click", (e) => {
//     // console.log(e.target.parentNode);
//     let qsnId = e.currentTarget.getAttribute("qsnId");

//     for (let answer of answers) {
//       if (document.querySelector(qsnId) != answer) {
//         answer.classList.add("hidden");
//       }
//     }
//     for (let one of cross) {
//       if (e.currentTarget.lastElementChild != one) {
//         one.classList.remove("rotate");
//       }
//     }

//     document.querySelector(qsnId).classList.toggle("hidden");
//     e.currentTarget.lastElementChild.classList.toggle("rotate");
//   });
// }
