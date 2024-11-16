"use strict";
const tileContainer = document.querySelector(".tile-container");

for (let i = 0; i < 250; i++) {
  const tile = document.createElement("div");
  // tile.innerHTML = "hello";
  tile.classList.add("tile");
  tileContainer.append(tile.cloneNode(true));
}

const randomColor = function () {
  const color = `rgb(${Math.trunc(Math.random() * 255) + 100},${
    Math.trunc(Math.random() * 255) + 100
  },${Math.trunc(Math.random() * 255) + 100})`;

  return color;
};

document.querySelectorAll(".tile").forEach((tile) => {
  tile.addEventListener("mouseover", () => {
    const clr = randomColor();
    tile.style.backgroundColor = clr;
    tile.style.transition = "0.2s";
    tile.style.boxShadow = `1px 1px 20px ${clr}`;
    tileContainer.style.boxShadow = `1px 1px 50px ${clr}`;
  });
  tile.addEventListener("mouseleave", () => {
    tile.style.backgroundColor = "#222";
    tile.style.boxShadow = `0px 0px 0px #111`;
    tile.style.transition = "15s";
  });
  tileContainer.addEventListener("mouseleave", () => {
    tileContainer.style.boxShadow = `1px 1px 50px rgb(75, 74, 74)`;
    tileContainer.style.transition = `1s`;
  });
});
