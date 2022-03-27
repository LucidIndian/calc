// CALCULATOR Scripts
console.log("JS file is linked!");

// VARIABLES
let displayValue = ""; // for the display and the calc.


// ADD FUNCTION
function add (num1, num2) {
  console.log("add fxn invoked");
  console.log(num1 + num2);
} // end of fxn

// SUBTRACT FUNCTION
function subtract (num1, num2) {
  console.log("subtract fxn invoked");
  console.log(num1 - num2);
}; // end of fxn

// DIVIDE FUNCTION
function divide (num1, num2) {
  console.log("divide fxn invoked");
  console.log( num1 / num2 );
}; // end of fxn

// MULTIPLY FUNCTION
function multiply (num1, num2) {
  console.log("multiply fxn invoked");
  console.log( num1 * num2 );
}; // end of fxn


// OPERATE FUNCTION
// Create a new function operate that takes 
// an operator and 2 numbers and then calls 
// one of the above functions on the numbers.

function operate(operator, num1, num2) {

  if (operator === "+" ) {
    add (num1, num2);
    console.log("add fxn should fire next");
  } else if (operator === "-" ) {
    subtract (num1, num2);
    console.log("subtract fxn should fire next");
  } else if (operator === "*" ) {
    multiply (num1, num2);
    console.log("multiply fxn should fire next");
  } else if (operator === "/" ) {
    divide (num1, num2);
    console.log("divide fxn should fire next");
  }

}; // end operate fxn

operate("+", 30, 3); // test code for the console



// BUTTON EVENT LISTENER
  // Create an array from the nodelist of buttons on the HTML page:
  const buttons = Array.from(document.querySelectorAll('button')); 
  // Add the E.L. to each button so we know when each is clicked:
  buttons.forEach(button => button.addEventListener('click', display));


// DISPLAY FUNCTION
// Create the functions that populate the display 
// when you click the number buttons… you should be 
// storing the ‘display value’ in a variable somewhere 
// for use in the next step.

function display(e) {
  displayValue = e.target.id; // this grabs the HTML ID of the button and assigns it to the variable.
 
  // Add the button click to the display:
  const container = document.querySelector('#display');
  const content = document.createElement('p');
  content.textContent = displayValue; // should be variable from button click
  content.style.color = 'red';
  container.appendChild(content);
    
};  // end display fxn


