// CALCULATOR Scripts
// console.log("JS file is linked!");

// VARIABLES
let displayValue = ""; // for the display and the calc
let displayNums = ""; // for nodelist of all #s in the current display
let operatorClicked = ""; // for nodelist of all #s in the current display

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


// STORE function
// when a user presses an operator, store the 
// 1st number that is input into the calculator as "digits1Joined"
function store (e) {
  console.log ("store function fired");
  // Create an array from the node list of all #s in the current display
  const displayNodes = Array.from(document.querySelectorAll('.displayNum'));
  // console.log ('displayNodes is:' + displayNodes); //test
  // Next, grab the "innerHTML" (digit) from each p element with an array method
  const digits1 = displayNodes.map(node => node.innerText);
  // remove the last array item, since it's the operator
  digits1.pop(); 
  // combine the array into 1 string without spaces nor separation
  digits1Joined = digits1.join('');
  // Store which operator has been chosen
  operatorClicked = e.target.id;
  
  console.log("First number is "+ digits1Joined); //test
  console.log("Operator is "+ operatorClicked); //test

  // operate(operatorClicked, digits1Joined, 3); // test code for the console

}; // end store fxn


// DISPLAY FUNCTION
// functions that populate the display 
// when you click the number buttons… you should be 
// storing the ‘display value’ in a variable for use in the next step.
function display(e) {
  displayValue = e.target.id; // this grabs the HTML ID of the button and assigns it to the variable.
  // do not add to the display if it's the "clear" button
  if ( e.target.id === 'clear') { 
    return;
  } else {
  // Add the button click to the display:
  const container = document.querySelector('#display');
  const content = document.createElement('p');
  content.textContent = displayValue; // should be variable from button click
  content.style.color = 'red';
  content.classList = 'displayNum'; // to find which numbers are om the display
  container.appendChild(content);
  }
    
}; // end display fxn


// CLEAR BUTTON EVENT LISTENER
// select the clear button on the HTML page:
const clearButton = document.querySelector('#clear'); 
// Add the E.L. to the clear button so we know when it's clicked:
clearButton.addEventListener('click', clear);

// CLEAR FUNCTION
// Pressing “clear” should wipe out any existing data.. 
// make sure the user is really starting fresh after pressing “clear”
function clear (){
 console.log("the clear function fired!");
// Clear the variables?:
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


// then operate() on them when the user presses the “=” key.

// Pressing = before entering all of the numbers 
// or an operator could cause problems!

// round answers with long decimals 
// so that they don’t overflow the screen.

// Display a snarky error message if the user tries to divide by 0… 
// don’t let it crash your calculator