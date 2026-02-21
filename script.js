let currentInput = "";

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const historyBox = document.querySelector(".history");

function addInput(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function reset() {
  currentInput = "";
  display.textContent = "0";
}

function calculate() {
  const expression = currentInput;
  const result = eval(currentInput);

  historyBox.textContent = expression + " = " + result;

  currentInput = result;
  display.textContent = result;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") reset();
    else if (value === "=") calculate();
    else addInput(value);
  });
});