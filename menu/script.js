// fully dynamic (button and food cards)

const menu = [
  {
    type: "breakfast",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    title: "Buttermilk Pancakes",
    para: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: "$15.99",
  },
  {
    type: "breakfast",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    title: "Diner Double ",
    para: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: "$15.99",
  },
  {
    type: "breakfast",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    title: "Godzilla Milkshake    ",
    para: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: "$15.99",
  },
  {
    type: "lunch",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    title: "Country Delight    ",
    para: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: "$15.99",
  },
  {
    type: "lunch",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    title: "Oreo Dream",
    para: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: "$15.99",
  },
  {
    type: "lunch",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    title: "Oreo Dream",
    para: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: "$15.99",
  },
  {
    type: "shake",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    title: "American Classic    ",
    para: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: "$15.99",
  },
  {
    type: "shake",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    title: "Bacon Overflow    ",
    para: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: "$15.99",
  },
  {
    type: "dinner",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    title: "Steak Dinner    ",
    para: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: "$15.99",
  },
  {
    type: "dinner",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    title: "Quarantine Buddy    ",
    para: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: "$15.99",
  },
];

const buttons = [
  {
    name: "all",
    type: "all",
  },
  {
    name: "breakfast",
    type: "breakfast",
  },
  {
    name: "lunch",
    type: "lunch",
  },
  {
    name: "shake",
    type: "shake",
  },
  {
    name: "dinner",
    type: "dinner",
  },
];

const buttonContainer = document.querySelector(".btn-container");

const foodContainer = document.querySelector(".food-container");

function showMenu(foodtype) {
  foodContainer.innerHTML = "";
  for (let i = 0; i < menu.length; i++) {
    if (foodtype == menu[i].type) {
      foodContainer.innerHTML += `<div class="food-card">
              <div class="fimg">
                <img
                  src="${menu[i].img}"
                  alt=""
                />
              </div>
        
              <div class="fdetail">
                <div class="top">
                  <h2>${menu[i].title}</h2>
                  <span>${menu[i].price}</span>
                </div>
        
                <div class="bottom">
                  <p>
                  ${menu[i].para}
                  </p>
                </div>
              </div>
            </div>`;
    } else if (foodtype == "all") {
      foodContainer.innerHTML += `<div class="food-card">
              <div class="fimg">
                <img
                  src="${menu[i].img}"
                  alt=""
                />
              </div>
        
              <div class="fdetail">
                <div class="top">
                  <h2>${menu[i].title}</h2>
                  <span>${menu[i].price}</span>
                </div>
        
                <div class="bottom">
                  <p>
                  ${menu[i].para}
                  </p>
                </div>
              </div>
            </div>`;
    }
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttonContainer.innerHTML += `<button id="${buttons[i].type}">${buttons[i].name}</button>`;

  window.addEventListener("DOMContentLoaded", () => {
    showMenu("all");
    for (let i = 0; i < buttons.length; i++) {
      let id = `#${buttons[i].type}`;
      document.querySelector(id).addEventListener("click", () => {
        showMenu(`${buttons[i].type}`);
      });
    }
  });
}

// all.addEventListener("click", (e) => {
//   showMenu("all");
// });

// breakfast.addEventListener("click", (e) => {
//   showMenu("breakfast");
// });
// lunch.addEventListener("click", (e) => {
//   showMenu("lunch");
// });
// shake.addEventListener("click", (e) => {
//   showMenu("shake");
// });
// dinner.addEventListener("click", (e) => {
//   showMenu("dinner");
// });
