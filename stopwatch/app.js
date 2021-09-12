class Stopwatch {
  static lapContainer = document.querySelector(".lap-data");
  static watchTimer = document.querySelector(".watch-timer");
  static startBtn = document.getElementById("startBtn");
  static pauseBtn = document.getElementById("pauseBtn");
  static lapBtn = document.getElementById("lapBtn");
  static resetBtn = document.getElementById("resetBtn");
  static miliSec = 0;
  static sec = 0;
  static min = 0;
  static showMs = "00";
  static showSec = "00";
  static showMin = "00";
  static isStarted = false;

  static initialize() {
    let timer = null;

    this.startBtn.addEventListener("click", () => {
      if (!this.isStarted) this.isStarted = true;
      this.startBtn.classList.add("hidden");
      this.pauseBtn.classList.remove("hidden");
      this.pauseBtn.classList.add("active");
      this.lapBtn.classList.remove("hidden");
      this.lapBtn.classList.add("active");

      if (this.isStarted) {
        timer = setInterval(() => {
          this.miliSec++;

          if (this.miliSec < 10) {
            this.showMs = "0" + this.miliSec;
          } else if (this.miliSec < 100) {
            this.showMs = this.miliSec;
          }
          if (this.sec < 10) {
            this.showSec = "0" + this.sec;
          } else {
            this.showSec = this.sec;
          }
          if (this.min < 10) {
            this.showMin = "0" + this.min;
          } else {
            this.showMin = this.min;
          }

          if (this.miliSec == 100) {
            this.sec += 1;
            this.miliSec = 0;
          }
          if (this.sec == 60) {
            this.min += 1;
            this.sec = 0;
          }

          this.render();
        }, 10);
      }
    });

    this.pauseBtn.addEventListener("click", () => {
      this.resetBtn.classList.remove("hidden");
      this.resetBtn.classList.add("active");
      this.lapBtn.classList.add("hidden");

      clearInterval(timer);
      this.render();
    });

    this.resetBtn.addEventListener("click", () => {
      this.isStarted = false;
      this.miliSec = 0;
      this.sec = 0;
      this.min = 0;
      this.showMs = "00";
      this.showSec = "00";
      this.showMin = "00";

      this.resetBtn.classList.add("hidden");
      this.pauseBtn.classList.add("hidden");
      this.startBtn.classList.remove("hidden");

      this.lapContainer.innerHTML = "";

      clearInterval(timer);

      this.render();
    });

    this.lapBtn.addEventListener("click", () => {
      this.lapContainer.classList.remove("hidden");
      this.lapContainer.innerHTML += `<p> ${this.showMin}  :   ${this.showSec}   :   ${this.showMs}</p>`;
    });
  }

  static render() {
    this.watchTimer.textContent =
      this.showMin + " : " + this.showSec + " : " + this.showMs;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  Stopwatch.initialize();
});
