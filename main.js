// Project Calculator

// Basic Operation Functions

function add(num1, num2) {
    answer = num1 + num2
    return answer
}

function subtract(num1, num2) {
    answer = num1 - num2
    return answer
}

function multiply(num1, num2) {
    answer = num1 * num2
    return answer
}

function divide(num1, num2) {
    if (num1 && num2 != 0) {
    answer = num1 / num2
    return answer
    } else {
        return "Error, cannot divide by 0"
    }
}

// Function tests - all working
// x = add(1,2);
// y = subtract(2,1);
// z = multiply(3,2);
// a = divide(0,1);
// b = divide(4,2);

// declare universal variables
let number1 = ''
let number2 = ''
let operator = ''

// define the main function for the calculator
function operate(arg1, operation, arg2) {
    argument1 = parseFloat(arg1)
    argument2 = parseFloat(arg2)
    perform = operation
    answer = ''

    switch(perform) {
    case '+':
        answer = (arg1 + arg2);
        break;
    case '-':
        answer = (arg1 - arg2);
        break;
    case '*':
        answer = (arg1 * arg2);
        break;
    case '/':
        answer = (arg1 / arg2);
        break;
    }
    return answer
}

// Test operate function - Working as intended
// x = operate(3, '*', 3)
// y = operate(2, '+', 5.5)
// z = operate(100.1, '/', 2)
// a = operate(5000.962, '-', 8000)
// b = operate(199999, '-', 5)

// Create display values
// Create Variables to reference html elements

let display = ''
let DISPLAY_VALUE = document.querySelector('#display-value')
// let displayTwo = ''
// let displayThree = ''

const ONE = document.querySelector('#one')
ONE.addEventListener("click", () => {
    display = '1';
    DISPLAY_VALUE.textContent = display;
});

const TWO = document.querySelector('#two')
TWO.addEventListener("click", () => {
    display = '2';
    DISPLAY_VALUE.textContent = display;
});

const THREE = document.querySelector('#three')
THREE.addEventListener("click", () => {
    display = '3';
    DISPLAY_VALUE.textContent = display;
});

const FOUR = document.querySelector('#four')
FOUR.addEventListener("click", () => {
    display = '4';
    DISPLAY_VALUE.textContent = display;
});

const FIVE = document.querySelector('#five')
FIVE.addEventListener("click", () => {
    display = '5';
    DISPLAY_VALUE.textContent = display;
});

const SIX = document.querySelector('#six')
SIX.addEventListener("click", () => {
    display = '6';
    DISPLAY_VALUE.textContent = display;
});

const SEVEN = document.querySelector('#seven')
SEVEN.addEventListener("click", () => {
    display = '7';
    DISPLAY_VALUE.textContent = display;
});

const EIGHT = document.querySelector('#eight')
EIGHT.addEventListener("click", () => {
    display = '8';
    DISPLAY_VALUE.textContent = display;
});

const NINE = document.querySelector('#nine')
NINE.addEventListener("click", () => {
    display = '9';
    DISPLAY_VALUE.textContent = display;
});

const ZERO = document.querySelector('#zero')
ZERO.addEventListener("click", () => {
    display = '0';
    DISPLAY_VALUE.textContent = display;
});

const ADD = document.querySelector('#add')
ADD.addEventListener("click", () => {
    display = '+';
    DISPLAY_VALUE.textContent = display;
});

const SUBTRACT = document.querySelector('#subtract')
SUBTRACT.addEventListener("click", () => {
    display = '-';
    DISPLAY_VALUE.textContent = display;
});

const MULTIPLY = document.querySelector('#multiply')
MULTIPLY.addEventListener("click", () => {
    display = 'x';
    DISPLAY_VALUE.textContent = display;
});

const DIVIDE = document.querySelector('#divide')
DIVIDE.addEventListener("click", () => {
    display = '÷';
    DISPLAY_VALUE.textContent = display;
});

const DECIMAL = document.querySelector('#decimal')
DECIMAL.addEventListener("click", () => {
    display = '.';
    DISPLAY_VALUE.textContent = display;
});

const CLEAR = document.querySelector('#clear-button')
CLEAR.addEventListener("click", () => {
    display = '';
    DISPLAY_VALUE.textContent = display;
});

const EQUALS = document.querySelector('#equals')
EQUALS.addEventListener("click", () => {
    display = '';
    DISPLAY_VALUE.textContent = display;
});
