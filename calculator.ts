//Addition function
const add = function(a: number, b: number): number {
    return a + b;
};

//Subtract function
const subtract = function(a: number, b: number): number {
  return a - b;
}

//Multiply function
const multiply = function(a: number, b: number): number {
  return a * b;
}

//Divide function
const divide = function(a: number, b: number): number {
  return a / b;
}

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


//Display
const display = document.querySelector("#display") as HTMLInputElement;

// Number buttons
// FIX 1: Changed display.value = currentValue + buttonNumber
// to display.value = display.value + buttonNumber
// because currentValue was never defined!
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonNumber = button.textContent || '';
    display.value = display.value + buttonNumber;
  });
});

// Symbol buttons
// FIX 2: Added "as NodeListOf<HTMLButtonElement>" 
// so TypeScript knows these are buttons!
// FIX 3: Added "const clickedOperator = button.textContent || ''"
// because clickedOperator was never defined!
const symbolButtons = document.querySelectorAll(".symbol") as NodeListOf<HTMLButtonElement>;
symbolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    // FIX 3: Define clickedOperator at the TOP of the handler
    const clickedOperator = button.textContent || '';

    if (firstNumber && operator) {
      // Calculate first, then show result + new operator
      const result = operate(operator, Number(firstNumber), Number(display.value.split(operator)[1].trim()));
      firstNumber = String(result);
      display.value = firstNumber + ' ' + clickedOperator + ' ';
    } else {
      // First operator being clicked
      firstNumber = display.value;
      display.value = display.value + ' ' + clickedOperator + ' ';
    }

    // Save which operator was clicked
    operator = clickedOperator;
  });
});

// Reset button
// FIX 4: Added "as HTMLButtonElement"
// so TypeScript knows this is a button!
const clear = document.querySelector(".clear") as HTMLButtonElement;
clear.addEventListener("click", () => {
  display.value = '';
  firstNumber = '';
  operator = '';
});

// Equals button
const equals = document.querySelector(".result") as HTMLButtonElement;
equals.addEventListener("click", () => {
  if (firstNumber && operator) {
    const parts = display.value.split(operator);
    const secondNumber = parts[1].trim();

    if (secondNumber) {
      const result = operate(operator, Number(firstNumber), Number(secondNumber));
      display.value = String(result);
      firstNumber = '';
      operator = '';
    }
  }
});



// button.addEventListener("click", () => {
    // const a = Number(input1.value);
    // const b = Number(input2.value);
  
//     result.value = add(a, b);
//   });

// document.body.appendChild(answerBox);
// answerBox.appendChild(input1);
// answerBox.appendChild(input2);
// answerBox.appendChild(button);
// answerBox.appendChild(result);











// //Answer Box -> Playing around 
// const answerBox = document.createElement('div');
// answerBox.placeholder = 'Enter answer here';
// answerBox.classList.add('box');
// answerBox.style.width = '300px';
// answerBox.style.height = '60px';
// answerBox.style.border = '2px solid black';
// answerBox.style.position = 'absolute';
// answerBox.style.left = '50%';
// answerBox.style.top = '7%';
// answerBox.style.transform = 'translate(-50%, -50%)';

// document.body.appendChild(answerBox);





// //Establish Input Response
// const input1 = document.createElement("input");
// input1.type = "number";
// input1.placeholder = "First number";

// const input2 = document.createElement("input");
// input2.type = "number";
// input2.placeholder = "Second number";

// const button = document.createElement("button");
// button.textContent = "Add";

// const result = document.createElement("input");
// result.type = "text";
// result.placeholder = "Result";
// result.readOnly = true;

// button.addEventListener("click", () => {
//     const a = Number(input1.value);
//     const b = Number(input2.value);
  
//     result.value = add(a, b);
//   });

// document.body.appendChild(answerBox);
// answerBox.appendChild(input1);
// answerBox.appendChild(input2);
// answerBox.appendChild(button);
// answerBox.appendChild(result);
