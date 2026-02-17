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
const divide = function(a: number, b: number): number {
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
};

//Global variables
let firstNumber = '';
let operator = '';
let resultShown = false;
// NEW: Tracks if a result was just displayed
// true = result just shown, next number click starts fresh
// false = normal typing mode

//Display
const display = document.querySelector("#display") as HTMLInputElement;

// Number buttons
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonNumber = button.textContent || '';

    if (resultShown) {
      // NEW: Result was just shown, start fresh!
      // Clear display and start new number
      display.value = buttonNumber;
      firstNumber = '';
      operator = '';
      resultShown = false;
      // Example: Result was "8", user clicks "5" → display shows "5"
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

    // NEW: If result was just shown, continue with that result!
    // Example: Result was "8", user clicks "+" → continue with "8 +"
    if (resultShown) {
      resultShown = false;
      // Don't reset firstNumber - keep the result as firstNumber
      // Don't reset display - keep showing the result
      // Just add the operator and continue!
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
  // NEW: Reset resultShown when cleared
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
      // NEW: Tell the calculator a result was just shown!
    }
  }
});