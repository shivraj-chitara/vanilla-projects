class TypingApp {
  // paras
  static paras = [
    "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocola bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
    "Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.",
    "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
    "Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. ",
    "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.",
    "Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie. ",
    "Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and",
  ];

  // Application state
  static randomNum = Math.floor(Math.random() * this.paras.length);
  static para = this.paras[this.randomNum];
  static currentIdx = -1;
  static startTime;
  static endTime;
  static isStarted = false;

  static initialize() {
    const startBtn = document.getElementById("start");

    startBtn.addEventListener("click", () => {
      if (!this.isStarted) {
        this.startTime = Date.now();
        this.isStarted = true;
        console.log(this.startTime);
        this.render();
      }
    });

    // Render the application for first time
    this.render();

    window.addEventListener("keydown", (e) => {
      if (this.isStarted) {
        const { key } = e;
        // console.log(key);
        if (key == "Backspace") this.checkKeyMatches(key);
      }
    });

    document.addEventListener("keypress", (e) => {
      if (this.isStarted) {
        const body = document.querySelector("body");
        if (e.code == "Space" && e.target == document.body) {
          e.preventDefault();
        }

        const { key } = e;
        // console.log(e);

        // Check if key matches with para's current letter
        this.checkKeyMatches(key);
      }
    });
  }

  static render() {
    const startBtn = document.getElementById("start");

    if (this.isStarted) startBtn.disabled = true;
    else startBtn.disabled = false;

    // Render logic
    const typingApp = document.getElementById("typingApp");

    let donePara = "";
    let remainingPara = "";
    let currChar = "";

    for (let i = 0; i < this.para.length; i++) {
      if (i <= this.currentIdx) {
        if (this.map.get(i) == "right") {
          donePara += `<span class="right">${this.para[i]}</span>`;
        } else if (this.map.get(i) == "wrong") {
          donePara += `<span class="wrong">${this.para[i]}</span>`;
        }
      }
      if (i == this.currentIdx + 1) {
        currChar += this.para[i];
      } else if (i > this.currentIdx + 1) {
        remainingPara += this.para[i];
      }
    }

    // Show the para
    typingApp.innerHTML = `<span class="para"><span class="done">${donePara}</span><span class="currChar">${currChar}</span><span class="">${remainingPara}</span></span>`;
  }

  static map = new Map();

  static checkKeyMatches(key) {
    this.endTime = Date.now();
    if (key == "Backspace") {
      if (this.currentIdx > -1) {
        this.currentIdx--;
      } else {
      }
    } else if (key == this.para[this.currentIdx + 1]) {
      this.currentIdx++;
      this.map.set(this.currentIdx, "right");
    } else {
      this.currentIdx++;
      this.map.set(this.currentIdx, "wrong");
    }

    if (this.currentIdx == this.para.length - 1) {
      // random para after finish
      this.para = this.paras[this.randomNum];
      this.currentIdx = -1;

      let spaceCount = 0;
      for (let i = 0; i < this.para.length; i++) {
        if (this.para[i] == " ") spaceCount++;
      }

      let rightCount = 0;
      for (let i = 0; i < this.map.size; i++) {
        if (this.map.get(i) == "right") {
          rightCount++;
        }
      }

      alert(
        `accuracy : ${((rightCount * 100) / this.para.length).toFixed(
          2
        )}% , speed : ${Math.floor(
          ((spaceCount + 1) / ((this.endTime - this.startTime) / 1000)) * 60
        )} WPM`
      );

      this.isStarted = false;
    }

    this.render();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  TypingApp.initialize();
});
