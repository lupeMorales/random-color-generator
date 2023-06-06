"use strict";

const color = document.querySelector(".js-color");
const btn = document.querySelector(".js-btn");
const colorPreview = document.querySelector(".js-preview");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

const handleClick = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.innerHTML = hexColor;
  color.style.color = hexColor;
  colorPreview.style.backgroundColor = hexColor;
  document.body.style.backgroundColor = hexColor;
};

btn.addEventListener("click", handleClick);
