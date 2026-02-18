//Addition function
const add = function(a: number, b: number): number {
    return a + b;
};

//Subtract function
const subtract = function(a: number, b: number): number {
  return a - b;
};

//Multiply function
const multiply = function(a: number, b: number): number {
  return a * b;
};

//Divide function
const divide = function(a: number, b: number): number | string {
  if (b === 0) {
    return "Error";
  }
  return a / b;
};

//Operator function
const operate = function(operator: string, a: number, b: number) {
  if (operator === '+') {
    return add(a,b);
  } else if (operator === '-') {
    return subtract(a,b);
  } else if (operator === 'x') {
    return multiply(a,b);
  } else if (operator === '÷') {
    return divide(a,b);
  }
  return "Error";
};

//Global variables
let firstNumber = '';
let operator = '';
let resultShown = false; // true = result just shown, next number click starts fresh
// false = normal typing mode

//Display
const display = document.querySelector("#display") as HTMLInputElement;

// Number buttons
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonNumber = button.textContent || '';

    if (resultShown) {
      // Clear display and start new number
      display.value = buttonNumber;
      firstNumber = '';
      operator = '';
      resultShown = false; // Example: Result was "8", user clicks "5" → display shows "5"
    } else {
      // Normal typing - just add number
      display.value = display.value + buttonNumber;
    }
  });
});

// Decimal button
const decimalButton = document.querySelector(".decimal") as HTMLButtonElement;
decimalButton.addEventListener("click", () => {
  // If result was just shown, start fresh with "0."
  if (resultShown) {
    display.value = '0.';
    firstNumber = '';
    operator = '';
    resultShown = false;
    return;
  }

  let currentNumber = '';
  if (operator) {
    const parts = display.value.split(operator);
    currentNumber = parts[parts.length - 1].trim();
  } else {
    currentNumber = display.value;
  }
  if (!currentNumber.includes('.')) {
    display.value = display.value + '.';
  }
});

// Symbol buttons
const symbolButtons = document.querySelectorAll(".symbol") as NodeListOf<HTMLButtonElement>;
symbolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const clickedOperator = button.textContent || '';

    // Example: Result was "8", user clicks "+" → continue with "8 +"
    if (resultShown) {
      resultShown = false;
      firstNumber = display.value;
      display.value = display.value + ' ' + clickedOperator + ' ';
      operator = clickedOperator;
      return;
    }

    if (firstNumber && operator) {
      const parts = display.value.split(operator);
      const secondNumber = parts[1].trim();

      if (!secondNumber) {
        operator = clickedOperator;
        display.value = firstNumber + ' ' + clickedOperator + ' ';
        return;
      }

      const result = operate(operator, Number(firstNumber), Number(secondNumber));
      firstNumber = String(parseFloat(Number(result).toFixed(4)));
      display.value = firstNumber + ' ' + clickedOperator + ' ';
    } else {
      firstNumber = display.value;
      display.value = display.value + ' ' + clickedOperator + ' ';
    }

    operator = clickedOperator;
  });
});

// Reset button
const clear = document.querySelector(".clear") as HTMLButtonElement;
clear.addEventListener("click", () => {
  display.value = '';
  firstNumber = '';
  operator = '';
  resultShown = false;
});

// Equals button
const equals = document.querySelector(".equals") as HTMLButtonElement;
equals.addEventListener("click", () => {
  if (firstNumber && operator) {
    const parts = display.value.split(operator);
    const secondNumber = parts[1].trim();

    if (secondNumber) {
      const result = operate(operator, Number(firstNumber), Number(secondNumber));
      display.value = String(parseFloat(Number(result).toFixed(4)));
      firstNumber = '';
      operator = '';
      resultShown = true;
    }
  }
});


const backspace = document.querySelector(".backspace") as HTMLButtonElement;
backspace.addEventListener("click", () => {
  if (display.value.length > 0) {
    const currentDisplay = display.value;
    
    // Check if last 3 characters are " [operator] " (space-operator-space)
    const lastThree = currentDisplay.slice(-3);
    const operatorWithSpaces = [' + ', ' - ', ' x ', ' ÷ '];
    
    if (operatorWithSpaces.includes(lastThree)) {
      // Delete all 3 characters (space-operator-space)
      display.value = currentDisplay.slice(0, -3);
      operator = '';
      firstNumber = '';
    } else {
      // Just delete last character
      display.value = currentDisplay.slice(0, -1);
    }
  }
});
