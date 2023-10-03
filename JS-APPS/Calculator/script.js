const buttons = document.querySelectorAll("button");
const preValue = document.querySelector(".preValue");
const nextValue = document.querySelector(".nextValue");
const result = document.querySelector(".output");
const resetButton = document.querySelector(".reset");
let initialValue = 0;
let operatorValue = "";
let isWaiting = false;

function sendNumber(number) {
  if (isWaiting) {
    result.textContent = number;
    isWaiting = false;
  } else {
    const displayResult = result.textContent;
    result.textContent =
      displayResult === "0" ? number : displayResult + number;
  }
}

function sendOperator(operator) {
  currentValue = Number(result.textContent);

  if (operatorValue && isWaiting) {
    operatorValue = operator;
    return;
  }

  if (!initialValue) {
    initialValue = currentValue;
  } else {
    const calculation = calc[operatorValue](initialValue, currentValue);
    result.textContent = calculation;
    initialValue = calculation;
  }
  operatorValue = operator;
  isWaiting = true;
}

const calc = {
  "+": (firstNumber, SecondNumber) => firstNumber + SecondNumber,
  "-": (firstNumber, SecondNumber) => firstNumber - SecondNumber,
  "*": (firstNumber, SecondNumber) => firstNumber * SecondNumber,
  "/": (firstNumber, SecondNumber) => firstNumber / SecondNumber,
  "=": (firstNumber, SecondNumber) => SecondNumber,
};

buttons.forEach((button) => {
  if (button.classList.length === 0) {
    button.addEventListener("click", () => sendNumber(button.value));
  }
  if (button.classList.contains("operator")) {
    button.addEventListener("click", () => sendOperator(button.value));
  }

  if (button.value === ".") {
    button.addEventListener("click", () => sendDecimal(button.value));
  }
  if (button.classList.contains("reset")) {
    button.addEventListener("click", () => {
      result.textContent = "0";
      initialValue = "";
      isWaiting = false;
      operatorValue = "";
    });
  }
});
