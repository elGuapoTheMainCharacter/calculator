let firstValue = "";
let operator = "";
let currentValue = "";
let shouldResetDisplay = false;

// This function updates the text on the calculator display.
function showPressedNum(number) {
    const display = document.getElementById("showOutput");

    // If the display needs to be cleared, or it's just showing "0",
    // replace the text instead of adding to it.
    if (display.innerText === "0" || shouldResetDisplay) {
        display.innerText = number;
        shouldResetDisplay = false; // Reset the flag after clearing.
    } else {
        display.innerText += number;
    }
}

// This function clears all the stored values and the display.
function clearDisplay() {
    document.getElementById("showOutput").innerText = "0";
    firstValue = "";
    operator = "";
    currentValue = "";
    shouldResetDisplay = false;
}

// This function handles the math operations.
function mathOperations(op) {
    const display = document.getElementById("showOutput");

    // If there is no previous number stored, save the current display value.
    if (firstValue === "") {
        firstValue = parseFloat(display.innerText);
        operator = op;
        shouldResetDisplay = true; // Tell the program to clear the display for the next number.
    } else {
        if(operator!=="%"){
        // If there is a previous number, perform the calculation.
        currentValue = parseFloat(display.innerText);
        let result = 0;

        switch (operator) {
            case "+":
                result = firstValue + currentValue;
                break;
            case "-":
                result = firstValue - currentValue;
                break;
            case "×":
                result = firstValue * currentValue;
                break;
            case "÷":
                if (currentValue === 0) {
                    display.innerText = "Error"; // Prevent division by zero.
                    return;
                }
                result = firstValue / currentValue;
                break;
                
        }
        

        // Show the result and save it as the new first number for continued calculations.
        display.innerText = result;
        firstValue = result;
        operator = op;
        shouldResetDisplay = true;
    }
        if(operator==="%"){
            result=firstValue/100;
            display.innerText = result;
            firstValue = result;
            operator = op;
            shouldResetDisplay = true;
        }
    }
    
    

    // This handles the equals button, which performs the final calculation.
    if (op === "=") {
        firstValue = ""; // Reset for a new calculation.
        operator = "";
    }
}
function deleteLastCharacter() {
    const display = document.getElementById("showOutput");
    
    // Get the current value from the display
    let currentDisplayValue = display.innerText;

    // If there's more than one character, remove the last character
    if (currentDisplayValue.length > 1) {
        display.innerText = currentDisplayValue.slice(0, -1);
    } else {
        // If only one character is left, clear the display
        display.innerText = "";
    }
}
function openScientific(){
    window.open("scientific.html");
}
function basicMode() {
  window.location.href = "../index.html";
}

