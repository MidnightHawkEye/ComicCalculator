

let currentInput = "";
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const historyBox = document.querySelector(".history");


/* ------- Merkt was gedrückt wurde Eingabe ----------*/
function addInput(value) {
  currentInput += value;
  display.textContent = currentInput;
}


/* ------- Reset (C) ----------*/
function reset() {
  currentInput = "";
  display.textContent = "0";
}


/* ------- Rechnen ----------*/
function calculate() {
  const expression = currentInput;
  const result = eval(currentInput);

   // ← wichtig
  historyBox.textContent = expression + " = " + result;
  
  currentInput = result.toString();  
  display.textContent = currentInput;

}


/* ------- Eventlister ----------*/
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") reset();
    else if (value === "=") calculate();
    else addInput(value);
  });
});


/* ------- Verhindert das ein Operator am anfang kommt ----------*/
function addInput(value) {

  const operators = "*/";

  // 1️⃣ Verhindern dass erster Wert ein Operator ist
  if (currentInput === "" && operators.includes(value)) {
    return;
  }

  // 2️⃣ Verhindern dass zwei Operatoren hintereinander kommen
  const lastChar = currentInput.slice(-1);

  if (operators.includes(lastChar) && operators.includes(value)) {
    return;
  }

  currentInput += value;
  display.textContent = currentInput;
}
