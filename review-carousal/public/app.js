const reviews = [
  {
    name: "vinod",
    img: "./img/vinod.jpeg",
    job: "Full-stack development",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quiapossimus beatae omnis? Qui consequatur, in iusto vitae iste nobiserror quam repudiandae harum vero. Exercitationem obcaecati cupiditate commodi reiciendis anim",
  },

  {
    name: "shivraj",
    img: "./img/shiv.jpg",
    job: "Front-end development",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quiapossimus beatae omnis? Qui consequatur, in iusto vitae iste nobiserror quam repudiandae harum vero. Exercitationem obcaecati cupiditate commodi reiciendis anim",
  },

  {
    name: "bhavesh",
    img: "./img/bhavesh.jpg",
    job: "web development",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quiapossimus beatae omnis? Qui consequatur, in iusto vitae iste nobiserror quam repudiandae harum vero. Exercitationem obcaecati cupiditate commodi reiciendis anim",
  },

  {
    name: "john",
    img: "./img/johnsmith.jpeg",
    job: "web designer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quiapossimus beatae omnis? Qui consequatur, in iusto vitae iste nobiserror quam repudiandae harum vero. Exercitationem obcaecati cupiditate commodi reiciendis anim",
  },
];

const userName = document.querySelector(".user-name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const img = document.querySelector(".user-img");

const prevBtn = document.querySelector(".prevbtn");
const nextBtn = document.querySelector(".nextbtn");
const randomBtn = document.querySelector(".randombtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showUser(currentItem);
});

function showUser() {
  person = reviews[currentItem];
  userName.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.info;
  img.src = person.img;
}
nextBtn.addEventListener("click", () => {
  currentItem = (currentItem + 1) % 4;

  showUser();
});
prevBtn.addEventListener("click", () => {
  currentItem = (currentItem - 1 + 4) % 4;
  showUser();
});
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showUser();
});
