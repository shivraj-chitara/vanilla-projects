// changing backgroung color----
const hex = document.querySelector("#hex");
const rgba = document.querySelector("#rgba");
const hsla = document.querySelector("#hsla");
const clrname = document.querySelector("#clrname");

hex.addEventListener("click", () => {
  const hexclr = Math.random().toString(16).slice(-6);

  clrname.textContent = `#${hexclr}`;

  document.querySelector("body").style.backgroundColor = `#${hexclr}`;

  console.log(hexclr);
});

rgba.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  clrname.textContent = `rgb (${r},${g},${b})`;

  document.querySelector("body").style.backgroundColor = `rgb(${r},${g},${b})`;
});
hsla.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 360);
  let g = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  let a = Math.random().toString().slice(0, 4);

  clrname.textContent = `Hsla (${r}, ${g}%, ${b}%, ${a})`;

  document.querySelector(
    "body"
  ).style.backgroundColor = `hsla(${r},${g}%,${b}%,${a})`;
});
