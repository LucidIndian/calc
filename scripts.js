// CALCULATOR Scripts
// console.log("JS file is linked!");

// VARIABLES
let displayValue = ""; // for the display and the calc
let operatorClicked = ""; // for nodelist of all #s in the current display
let digits1 = null; // for the calc
let digits2 = null; // for the calc
let result = null; // for the operator functions

// ADD FUNCTION
function add (num1, num2) {
  // console.log("add fxn invoked");
  console.log("result is "+ (num1 + num2));
  result = num1 + num2;
  digits1 = result // set digits1 to result in prep for another potential operation
  answerDisplay(result); // invoke the answerDisplay fxn
} // end of fxn

// SUBTRACT FUNCTION
function subtract (num1, num2) {
  // console.log("subtract fxn invoked");
  console.log("result is "+ (num1 - num2));
  result = num1 - num2;
  answerDisplay(result); // invoke the answerDisplay fxn
}; // end of fxn

// DIVIDE FUNCTION
function divide (num1, num2) {
  // console.log("divide fxn invoked");
  // Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator
  if (num2 === 0) {
    alert("Sorry, you cannot divide by zero");
    clear(); // clean display
    return;
  } else {
  console.log( "result is "+ (num1 / num2 ));
  result = num1 / num2;
  answerDisplay(result); // invoke the answerDisplay fxn
  }
}; // end of fxn

// MULTIPLY FUNCTION
function multiply (num1, num2) {
  // console.log("multiply fxn invoked");
  console.log("result is "+ (num1 * num2 ));
  result = num1 * num2;
  answerDisplay(result); // invoke the answerDisplay fxn
}; // end of fxn


// OPERATE FUNCTION 
// takes an operator and 2 numbers and then calls 
// the right function on the numbers
function operate(operator, num1, num2) {
  if (operator === "+" ) {
    clear(); // clean display in preparation to print the result, has to run before the next fxn
    add (num1, num2);
  } else if (operator === "-" ) {
    clear(); // clean display in preparation to print the result, has to run before the next fxn
    subtract (num1, num2);
  } else if (operator === "*" ) {
    clear(); // clean display in preparation to print the result, has to run before the next fxn
    multiply (num1, num2);
  } else if (operator === "/" ) {
    clear(); // clean display in preparation to print the result, has to run before the next fxn
    divide (num1, num2);
  }
}; // end operate fxn


// BUTTON EVENT LISTENER
// Create an array from the node list of buttons on the HTML page:
const buttons = Array.from(document.querySelectorAll('.button')); 
// Add the E.L. to each button so we know when each is clicked:
buttons.forEach(button => button.addEventListener('click', display));

// OPS BUTTONS EVENT LISTENER
// Create an array from the node list of class `ops` buttons on the HTML page:
const opsButtons = Array.from(document.querySelectorAll('.ops'));
// Add the E.L. to each ops button so we know when each is clicked:
opsButtons.forEach(button => button.addEventListener('click', store));

// EQUALS BUTTONS EVENT LISTENER
// select the equals button on the HTML page:
const equalsButton = document.querySelector('#equals'); 
// Add the E.L. to the clear button so we know when it's clicked:
equalsButton.addEventListener('click', store);


// STORE function
// when a user presses an operator, store the 
// 1st number that is input into the calculator as "digits1"
function store (e) {
  // console.log ("store function fired"); //test

  // Store which operator has been chosen (exclude "equals")
  if (e.target.id !== "equals" ) {
    operatorClicked = e.target.id;
  } else {
      // do not store variable and keep going
  };

  console.log("Operator is "+ operatorClicked); //test
  // Create an array from the node list of all #s in the current display
  const displayNodes = Array.from(document.querySelectorAll('.displayNum'));
  // Next, grab the "innerHTML" (digit) from each p element with an array method
  const digits = displayNodes.map(node => node.innerText);
  // if there is no first number (digits1 is empty), 
  // then assign what's in the display to the 1st number and run the operate fxn. 
    
  if (!digits1) {
      digits.pop(); // remove last character (the operator)
      // combine the array into 1 string without spaces nor separation
      digits1Joined = digits.join('');
      digits1 = parseInt(digits1Joined); //convert string to a number
      console.log("1st number is "+ digits1); //test
      // if there is a first Number (digits1Joined is not empty), 
      // then assign what's in the display to the 2nd number and run the operate fxn. 
  } else {
      // console.log("this would be the 2nd number"); //test
      // combine the array into 1 string without spaces nor separation  
      digits2Joined = digits.join('');
      // pop the string until 
      // while (the last character ie lasts a Number, pop th)
      digits2 = parseInt(digits2Joined.split(`${operatorClicked}`).pop()); // split on the operator and take the right side as the 2nd num?
      console.log("2nd number is "+ digits2); //test
      operate(operatorClicked, digits1, digits2); // Invoke operate function w/ all data   
  };
  
}; // end store fxn


// BUTTON DISPLAY FUNCTION
// Populate the display when number buttons are clicked…  
// storing the ‘display value’ in a variable for use in the next step.
function display(e) {
  displayValue = e.target.id; // this grabs the HTML ID of the button and assigns it to the variable.
  // do not add to the display if it's the "clear" nor "equals" button
  if ( e.target.id === 'clear' ||  e.target.id === 'equals') { 
    return;
  } else {
  // Add the button click to the display:
  const container = document.querySelector('#display'); // display HTML ID
  const content = document.createElement('p');
  content.textContent = displayValue; // should be variable from button click
  content.style.color = 'lightgreen';
  content.classList = 'displayNum'; // to find which numbers are om the display
  container.appendChild(content);
  }
    
}; // end display fxn


// ANSWER DISPLAY FUNCTION
// Populate the display with the result after an operator is clicked…  
function answerDisplay(answer) {
  console.log ("answerDisplay is invoked") //test
  // Add the answer to the display:
  const container = document.querySelector('#display'); // display HTML ID
  const content = document.createElement('p');
  content.textContent = answer; // should be variable from respective math function
  content.style.color = 'lightgreen';
  content.classList = 'displayNum'; // to find which numbers are on the display
  container.appendChild(content);
  
}; // end answerDisplay fxn


// CLEAR BUTTON EVENT LISTENER
// select the clear button on the HTML page:
const clearButton = document.querySelector('#clear'); 
// Add the E.L. to the clear button so we know when it's clicked:
clearButton.addEventListener('click', clear);

// CLEAR FUNCTION
// Pressing “clear” should wipe out any existing data.. 
// make sure the user is really starting fresh after pressing “clear”
function clear() {
 console.log("the clear function fired!");
  // Clear the variables?:
  displayValue = ""; // for the display and the calc
  operatorClicked = ""; // for nodelist of all #s in the current display
  digits1 = null; // for the calc
  digits2 = null; // for the calc
  result = null; // for the operator functions
  // ^ not sure if this is needed yet
 // Clear the display:
 // first, query the display 
 const container = document.querySelector('#display');
 // delete all children elements in it to clear it
  while (container.firstChild) {
    container.removeChild(container.firstChild); 
  }
}; // end clear fxn


// TO-DO: 

// make it take multiple consecutive operations

// then operate() on them when the user presses the “=” key.

// Pressing = before entering all of the numbers 
// or an operator could cause problems!

// round answers with long decimals 
// so that they don’t overflow the screen.

