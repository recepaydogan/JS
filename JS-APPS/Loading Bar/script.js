const counter = document.querySelector(".counter");
const barTop = document.querySelector(".bar-top");
let number = 30;

const updateNumber = () => {
  counter.textContent = number + "%";
  barTop.style.width = number + "%";
  number++;
  if (number < 101) {
    setTimeout(updateNumber, 30);
  }
};

updateNumber();
