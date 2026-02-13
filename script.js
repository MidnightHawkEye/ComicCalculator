const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {      // create for very button press a eventlist
    const value = button.textContent;           // is exactly the text in the button

    if (value === "C") {                        // next three lines is if you press C deleted the List complet reset
      currentInput = "";
      display.textContent = "0";
    } 
    else if (value === "=") {                   // is to conecd together the both numbers 
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
