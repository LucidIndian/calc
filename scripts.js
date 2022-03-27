// CALCULATOR Scripts

console.log("JS file is linked!");

// Variables


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

