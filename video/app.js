const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const slide = document.querySelector(".slide");
const btn = document.querySelector(".btn");
const video = document.querySelector(".video-container");
const loading = document.querySelector(".loading");
const main = document.querySelector("main");

let isPlaying = true;

btn.addEventListener("click", () => {
  togglePlay();
});
slide.addEventListener("click", () => {
  togglePlay();
});

function togglePlay() {
  if (slide.classList.contains("moveL")) {
    slide.classList.add("moveR");
    slide.classList.remove("moveL");
  } else {
    slide.classList.add("moveL");
    slide.classList.remove("moveR");
  }
  if (isPlaying) {
    video.pause();
    isPlaying = false;
  } else {
    video.play();
    isPlaying = true;
  }
}

setTimeout(() => {
  loading.classList.add("hidden");
  main.classList.remove("hidden");
}, 1000);
