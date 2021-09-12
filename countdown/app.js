const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const calender = document.querySelector("#calender");
const submit = document.querySelector("#submit");
const h3 = document.querySelector("h3");

let inputDate = "";

submit.addEventListener("click", () => {
  inputDate = calender.valueAsDate;
  console.log(inputDate);

  h3.textContent = inputDate;
  getCountdown();
});

function getCountdown() {
  const date = new Date();
  let newYear = new Date(inputDate);
  console.dir(newYear);

  let timeLeft = {};

  let secsLeft = Math.floor(newYear - date) / 1000;
  secsLeft -= 3600 * 5.5;

  function setTimeLeft() {
    const days = Math.floor(secsLeft / (24 * 3600));
    secsLeft = secsLeft % (24 * 3600);
    console.log(days);

    const hours = Math.floor(secsLeft / 3600);
    secsLeft = secsLeft % 3600;
    console.log(hours);

    const mins = Math.floor(secsLeft / 60);
    secsLeft = Math.floor(secsLeft % 60);
    console.log(mins);

    const secs = Math.floor(secsLeft);
    console.log(secs);

    timeLeft = {
      days,
      hours,
      mins,
      secs,
    };

    day.textContent = days;
    hour.textContent = hours;
    min.textContent = mins;
    sec.textContent = secs;
  }

  setInterval(() => {
    if (timeLeft.secs > 0) {
      timeLeft.secs -= 1;
      sec.textContent = timeLeft.secs;
    } else if (timeLeft.mins > 0) {
      timeLeft.mins -= 1;
      min.textContent = timeLeft.mins;
      sec.textContent = 59;
      timeLeft.secs = 59;
    } else if (timeLeft.hours > 0) {
      timeLeft.hours -= 1;
      hour.textContent = timeLeft.hours;
      min.textContent = 59;
      sec.textContent = 59;
      timeLeft.mins = 59;
      timeLeft.secs = 59;
    } else if (timeLeft.days > 0) {
      timeLeft.days -= 1;
      day.textContent = timeLeft.days;
      hour.textContent = 23;
      min.textContent = 59;
      sec.textContent = 59;
      timeLeft.hours = 23;
      timeLeft.mins = 59;
      timeLeft.secs = 59;
    }
  }, 1000);

  setTimeLeft();
}
