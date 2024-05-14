let button1 = document.querySelector("#butt1");
let button2 = document.querySelector("#butt2");
let copyDiv = document.querySelector(".clrcode");
let rgb1 = "#000";
let rgb2 = "#fff";

const hexVals = () => {
  let hexvalues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + hexvalues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const buttonfunc1 = () => {
  rgb1 = hexVals();
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right,${rgb1}, ${rgb2})`;
  button1.innerHTML = `${rgb1}`;
};
const buttonfunc2 = () => {
  rgb2 = hexVals();
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right,${rgb1}, ${rgb2})`;
  button2.innerHTML = `${rgb2}`;
};

copyDiv.addEventListener("click", () => {
  navigator.clipboard.writeText(copyDiv.innerText);
});

button1.addEventListener("click", buttonfunc1);
button2.addEventListener("click", buttonfunc2);
