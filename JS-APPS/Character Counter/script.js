let textArea = document.querySelector("#text-area");
let usedChar = document.querySelector(".used-char");
let remainingChar = document.querySelector(".remaining-char");
usedChar.textContent = 0;
remainingChar.textContent = 50;

textArea.addEventListener("keydown", () => {
  usedChar.textContent = textArea.value.length;
  remainingChar.textContent =
    textArea.getAttribute("maxlength") - textArea.value.length;
});
