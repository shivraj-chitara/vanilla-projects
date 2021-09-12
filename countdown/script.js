const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

const date = new Date();
const newYear = new Date("January 1, 2022 00:00:00");

let timeLeft = {};

let secLeft = Math.floor(newYear - date) / 1000;

function setTimeLeft() {
  const days = Math.floor(secLeft / (24 * 3600));
  secLeft = secLeft % (24 * 3600);
  console.log(days);

  const hours = Math.floor(secLeft / 3600);
  secLeft = secLeft % 3600;
  console.log(hours);

  const mins = Math.floor(secLeft / 60);
  secLeft = secLeft % 60;
  console.log(mins);

  const secs = Math.floor(secLeft);
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
    timeLeft.hour = 23;
    timeLeft.mins = 59;
    timeLeft.secs = 59;
  }
}, 1000);

setTimeLeft();
