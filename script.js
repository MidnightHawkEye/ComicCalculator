const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");


let = currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {      // create for very button press a event list
    const value = button.textContent;           // is exactly the text in the button

    if (value === "C") {                        // next three lines is if you press C deleted the List completed reset
      currentInput = "";
      display.textContent = "0";
    } 
    else if (value === "=") {                   // is to connected together the both numbers 
      try {                                     // all other you press in makes a Error
        currentInput = eval(currentInput);
        display.textContent = currentInput;
      } catch {
        display.textContent = "Fail!";
      }
    } 
    else {
      currentInput += value;                    // else = if anything is right this is the result
      display.textContent = currentInput;
    }
  });
});


document.addEventListener("keydown", (event) => { //output logger
  console.log(event.key);
});


document.addEventListener("keydown", (event) => { // press directly by the keyboard
  const key = event.key;

  if (key === "Enter") {                          // its for the enter button
    try {
      currentInput = eval(currentInput);
      display.textContent = currentInput;
    } catch {
      display.textContent = "Fail!";
    }
  }

  else if (key === "Backspace") {                 // its for the backspace button
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || "0";
  }

  else if ("0123456789+-*/.".includes(key)) {     // its for the numbers
    currentInput += key;
    display.textContent = currentInput;
  }
});


const calculator = document.querySelector(".calculator");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {

    calculator.classList.add("slide-out");

    calculator.addEventListener("animationend", function handler() {
    
    currentInput = "";
    display.textContent = "0";

    calculator.classList.remove("slide-out");

    calculator.removeEventListener("animationend", handler);
      });
    }

  });
});


