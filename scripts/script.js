// Carrousel

let suivant = document.querySelector("#bout_D");
let precedent = document.querySelector("#bout_G");
let carrousel = document.querySelector(".carrousel_persos");

let index = 0;

suivant.addEventListener("click", () => {
  index += 1;
  carrousel.style.transform = `rotateY(${-60 * index}deg)`;
});

precedent.addEventListener("click", () => {
  index -= 1;
  carrousel.style.transform = `rotateY(${60 * index}deg)`;
});
