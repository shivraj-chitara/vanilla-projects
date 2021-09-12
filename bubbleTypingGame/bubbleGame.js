// refactored code ************************
// ****************************************
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
  static bubblesArr = [];
  static speed = 1;
  static sec = 1000;
  static frameRate = 0;

  static addBubble() {
    this.uniqId++;

    let random = Math.floor(Math.random() * this.alphabates.length);
    let posX = Math.floor(Math.random() * 700);
    let posY = 0;
    let value = this.alphabates[random];

    this.bubblesArr.push({ id: this.uniqId, value, posX, posY });
  }

  static initialize() {
    // highscore
    const highScoreStored = localStorage.getItem("highScore");
    this.highScoreCount = highScoreStored || 0;

    // on click game started
    this.startBtn.addEventListener("click", () => {
      if (!this.isStarted) {
        this.isStarted = true;
        this.lifeCount = 5;
      }

      if (this.isStarted) {
        window.addEventListener("keypress", (e) => {
          const { key } = e;
          this.bubblesCheckAndMatches(key);
        });

        let gameInterval = null;

        gameInterval = setInterval(() => {
          this.frameRate += 20;

          // add new bubble every 1sec
          if (this.frameRate % this.sec == 0) this.addBubble();

          // postion Y update
          this.bubblesArr = this.bubblesArr
            .filter((bubbles) => {
              if (bubbles.posY >= 400) {
                this.lifeCount--;
                return false;
              } else return true;
            })
            .map((bubble) => {
              return { ...bubble, posY: bubble.posY + this.speed };
            });

          // Game over
          if (this.lifeCount == 0) {
            clearInterval(gameInterval);
            this.bubblesArr = [];
            this.frameRate = 0;
            this.isStarted = false;
            alert(`Game Over!!!! Your Score is : ${this.scoreCount}`);
            this.scoreCount = 0;
            this.speed = 1;
            this.render();
            return;
          }

          // render app every 20ms after game start
          this.render();
        }, 20);
      }
    });

    // first time rendering app
    this.render();
  }

  static render() {
    if (this.isStarted) this.startBtn.disabled = true;
    else this.startBtn.disabled = false;

    // life, score, highscore update
    this.life.innerText = this.lifeCount;
    this.score.innerText = this.scoreCount;
    this.highScore.innerText = this.highScoreCount;
    // console.dir(this.bubblesArr, { depth: null });

    while (this.gameScreen.childElementCount > 0) {
      this.gameScreen.removeChild(this.gameScreen.firstChild);
    }

    for (let i = 0; i < this.bubblesArr.length; i++) {
      const span = document.createElement("span");
      span.textContent = this.bubblesArr[i].value;
      span.classList.add("bubble");
      span.style.left = this.bubblesArr[i].posX + "px";
      span.style.bottom = this.bubblesArr[i].posY + "px";
      // span.setAttribute("id", `${this.uniqId}`);
      this.gameScreen.append(span);
    }
  }

  static bubblesCheckAndMatches(key) {
    for (let i = 0; i < this.bubblesArr.length; i++) {
      if (key == this.bubblesArr[i].value) {
        this.bubblesArr = this.bubblesArr.filter(
          (bubble) => bubble.id != this.bubblesArr[i].id
        );

        this.scoreCount++;
        if (this.highScoreCount < this.scoreCount) {
          this.highScoreCount = this.scoreCount;
        }
        if (this.scoreCount >= 10) {
          this.speed = 1.5;
          this.sec = 800;
        }
        if (this.scoreCount >= 20) {
          this.speed = 2;
          this.sec = 800;
        }
        if (this.scoreCount >= 30) {
          this.speed = 2.5;
          this.sec = 600;
        }
        if (this.scoreCount >= 40) {
          this.speed = 3.5;
          this.sec = 400;
        }

        window.localStorage.setItem("highScore", this.highScoreCount);
        return;
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  BubbleGame.initialize();
});
