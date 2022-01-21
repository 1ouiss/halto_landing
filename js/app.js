const chevronRight = document.getElementById("chevronRight");
const chevronLeft = document.getElementById("chevronLeft");
const sliderPerso = document.querySelector(".slider-perso");
const background = document.getElementById("slider-bg");

let decalage = 0;

const persoId = ["chat", "hibou", "lapin", "chouette", "grenouille"];
let persoActive = 2;
let newPerso = 2;

function slideRight() {
  if (decalage < 600) {
    (newPerso = persoActive - 1), changeBackground();
    decalage = decalage + 300;

    sliderPerso.style.transform = "translateX(" + decalage + "px)";
  } else {
  }
}

chevronLeft.addEventListener("click", slideRight);

function slideLeft() {
  if (decalage > -600) {
    (newPerso = persoActive + 1), changeBackground();
    decalage = decalage - 300;
    sliderPerso.style.transform = "translateX(" + decalage + "px)";
  } else {
  }
}

function changeBackground() {
  console.log(persoActive, newPerso);
  const container = document.querySelector(".rond-slider");
  container.classList.remove(persoId[persoActive]);
  container.classList.add(persoId[newPerso]);
  persoActive = newPerso;
}

changeBackground();

chevronRight.addEventListener("click", slideLeft);

function color() {
  background.style.background = "red";
}
