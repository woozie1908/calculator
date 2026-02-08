

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
  } else if (operator === '*') {
    return multiply(a,b);
  } else if (operator === '/') {
    return divide(a,b);
  }
};

console.log(operate('+', 3, 1));

//Establish functions to update number varibles with buttons clicked
const result = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentValue = result.value;
    const buttonNumber = button.textContent;
    result.value = currentValue + buttonNumber;
  });
});

const symbolButtons = document.querySelectorAll(".symbol");
symbolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentValue = result.value;
    const buttonSymbol = button.textContent;
    result.value = currentValue + buttonSymbol;
  });
});


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
