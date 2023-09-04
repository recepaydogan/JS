const sideBar = document.querySelector(".side-bar");
const toggleSideBar = document.querySelector(".toggle");
const closeButton = document.querySelector(".btn-close");
toggleSideBar.addEventListener("click", () => {
  sideBar.classList.toggle("show");
});

closeButton.addEventListener("click", () => {
  sideBar.classList.remove("show");
});
