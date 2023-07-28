const correctAnswers = ["Y", "Y", "Y", "Y"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  result.classList.remove("d-none");
  let score1 = 0;

  const printWithInterval = setInterval(() => {
    result.querySelector("span").textContent = `${score1}%`;
    if (score1 === score) {
      clearInterval(printWithInterval);
    } else {
      score1++;
    }
  }, 10);
});
