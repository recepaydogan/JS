const nextIcon = document.querySelector(".next");
const prevIcon = document.querySelector(".prev");
const imgWrapper = document.querySelector(".image-wrapper");
const imgs = document.querySelectorAll("img");
let currentImg = 1;
let sliderTimeout;

nextIcon.addEventListener("click", () => {
  currentImg++;
  clearTimeout(sliderTimeout);
  updateImg();
});

prevIcon.addEventListener("click", () => {
  currentImg--;
  clearTimeout(sliderTimeout);
  updateImg();
});

const updateImg = () => {
  if (currentImg > imgs.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgs.length;
  }
  imgWrapper.style.transform = `translateX(-${(currentImg - 1) * 700}px`;
  sliderTimeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
};
