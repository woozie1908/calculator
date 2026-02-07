

//Addition function
const add = function(a: number, b: number): number {
    return a + b;
};

const resultAdd = add(8, 8);
console.log(resultAdd);

// the following items and testing them in your browser’s console:
// add
// subtract
// multiply
// divide

//Answer Box
const answerBox = document.createElement('div');
answerBox.classList.add('box');
answerBox.placeholder = 'Enter answer here';
answerBox.classList.add('box');
answerBox.style.width = '300px';
answerBox.style.height = '60px';
answerBox.style.border = '2px solid black';
answerBox.style.position = 'absolute';
answerBox.style.left = '50%';
answerBox.style.top = '7%';
answerBox.style.transform = 'translate(-50%, -50%)';

//Establish Input Response
const input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "First number";

const input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "Second number";

const button = document.createElement("button");
button.textContent = "Add";

const result = document.createElement("input");
result.type = "text";
result.placeholder = "Result";
result.readOnly = true;

button.addEventListener("click", () => {
    const a = Number(input1.value);
    const b = Number(input2.value);
  
    result.value = add(a, b);
  });
  


document.body.appendChild(answerBox);
answerBox.appendChild(input1);
answerBox.appendChild(input2);
answerBox.appendChild(button);
answerBox.appendChild(result);
