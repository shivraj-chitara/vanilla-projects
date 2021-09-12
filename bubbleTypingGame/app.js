class BubbleGame {
  static alphabates =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  static gameScreen = document.querySelector(".game-screen");
  static startBtn = document.querySelector("#start");
  static life = document.getElementById("life");
  static score = document.getElementById("score");
  static highScore = document.getElementById("highScore");
  static isStarted = false;
  static uniqId = 0;
  static lifeCount = 5;
  static scoreCount = 0;
  static highScoreCount = 0;
  static charArray = [];
  static speed = 1;

  static initialize() {
    const highScoreStored = localStorage.getItem("highScore");
    this.highScore.innerText = highScoreStored;
    this.highScoreCount = highScoreStored;
    this.startBtn.addEventListener("click", () => {
      if (!this.isStarted) {
        this.isStarted = true;
        this.render();
      }
    });

    window.addEventListener("keypress", (e) => {
      if (this.isStarted) {
        // const body = document.querySelector("body");
        // if (e.code == "Space" && e.target == document.body) {
        //   e.preventDefault();
        // }

        const { key } = e;

        this.bubblesCheckAndMatches(key);
      }
    });
  }

  static render() {
    let game = null;
    if (this.isStarted) this.startBtn.disabled = true;
    else this.startBtn.disabled = false;

    // const life = document.getElementById("life");
    if (this.isStarted) {
      game = setInterval(() => {
        let bubble = null;
        let pos = 0;
        const frame = () => {
          this.life.innerText = this.lifeCount;
          if (pos == 400) {
            this.lifeCount--;
            clearInterval(bubble);
            span.remove();
            let newArray = this.charArray.filter((char) => char.id != span.id);
            this.charArray = newArray;
          } else {
            pos += this.speed;
            span.style.bottom = pos + "px";
          }
          if (this.lifeCount == 0) {
            clearInterval(bubble);
          }
        };

        // game over
        if (this.lifeCount == 0) {
          clearInterval(game);
          while (this.gameScreen.childElementCount > 0) {
            this.gameScreen.removeChild(this.gameScreen.firstChild);
          }
          this.charArray = [];
          this.lifeCount = 5;
          this.isStarted = false;
          this.render();
          alert(`Game Over!!!!    Your Score is : ${this.scoreCount}`);
          this.scoreCount = 0;
          this.score.innerHTML = 0;

          return;
        }

        bubble = setInterval(frame, 20);
        this.uniqId++;
        let random = Math.floor(Math.random() * this.alphabates.length);
        let randomPosX = Math.floor(Math.random() * 700);
        const span = document.createElement("span");
        span.textContent = this.alphabates[random];
        span.classList.add("bubble");
        span.style.left = `${randomPosX}px`;
        span.setAttribute("id", `${this.uniqId}`);
        console.log(bubble);
        this.charArray.push({
          id: `${this.uniqId}`,
          value: span.innerText,
          bubble,
        });
        this.gameScreen.append(span);
      }, 1000);
    }
  }

  static bubblesCheckAndMatches(key) {
    const allChar = document.querySelectorAll(".bubble");
    let letterId;
    for (let i = 0; i < this.charArray.length; i++) {
      for (let eachChar of allChar) {
        if (key == this.charArray[i].value) {
          if (eachChar.id == this.charArray[i].id) {
            letterId = eachChar.id;
            eachChar.remove();
            // console.log(this.charArray[i].bubble);
            clearInterval(this.charArray[i].bubble);
            let newArr = this.charArray.filter((char) => char.id != letterId);
            this.charArray = newArr;
            this.scoreCount++;
            this.score.textContent = this.scoreCount;
            if (this.highScoreCount < this.scoreCount) {
              this.highScoreCount = this.scoreCount;
            }
            this.highScore.innerText = this.highScoreCount;
            window.localStorage.setItem("highScore", this.highScoreCount);
            return;
          }
        }
      }
    }
  }
}
window.addEventListener("DOMContentLoaded", () => {
  BubbleGame.initialize();
});
