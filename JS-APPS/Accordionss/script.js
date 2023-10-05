const accordion = document.querySelectorAll(".container");

accordion.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});
