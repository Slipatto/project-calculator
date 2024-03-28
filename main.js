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

// declare universal variables
let number1 = ''
let number2 = ''
let operator = ''
let calc = 0
let continueNumber = false

// define the main function for the calculator
function operate(arg1, operation, arg2) {
    argument1 = parseFloat(arg1)
    argument2 = parseFloat(arg2)
    perform = operation
    answer = 0

    switch(perform) {
    case '+':
        answer = (argument1 + argument2);
        break;
    case '-':
        answer = (argument1 - argument2);
        break;
    case 'x':
        answer = (argument1 * argument2);
        break;
    case '÷':
        answer = (argument1 / argument2);
        break;
    }
    return answer
}

// Create numbered button function
function numberKey (num) {if (!operator) {
    display = num;
    number1 += display
    DISPLAY_VALUE.textContent = number1;
    } else if (continueNumber === true) {
        display = num;
        number2 += num;
        DISPLAY_VALUE.textContent = number2;
    } else if (number1 != false && number2 != false && operator != false) {
        // let sum = operate(number1, operator, number2);
        // // number1 = sum;
        display = num;
        number2 += display
        DISPLAY_VALUE.textContent = number2;
        let continueNumber = true;
    } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
         display = num;
         number2 += display;
         DISPLAY_VALUE.textContent = number2;
    } else {
        display = 'ERROR';
        DISPLAY_VALUE.textContent = display;
     }
    
}

function operation (sign) {
    if (number1 !== '' && number2 !== '') {
        let sum = operate(number1, operator, number2);
        number1 = sum;
        number2 = ''
        display = sign
        operator = sign
        DISPLAY_VALUE.textContent = number1;
    } else {
    display = sign;
    DISPLAY_VALUE.textContent = display;
    operator = sign;
    }
}

// Create display values
// Create Variables to reference html elements

let display = ''
let DISPLAY_VALUE = document.querySelector('#display-value')
// let displayTwo = ''
// let displayThree = ''

const ONE = document.querySelector('#one')
ONE.addEventListener("click", () => { 
    numberKey(1)
});


const TWO = document.querySelector('#two')
TWO.addEventListener("click", () => {
    numberKey(2)
        });

const THREE = document.querySelector('#three')
THREE.addEventListener("click", () => {
    numberKey(3)
        });

const FOUR = document.querySelector('#four')
FOUR.addEventListener("click", () => {
    numberKey(4)
        });

const FIVE = document.querySelector('#five')
FIVE.addEventListener("click", () => {
    numberKey(5)
        });

const SIX = document.querySelector('#six')
SIX.addEventListener("click", () => {
    numberKey(6)
        });

const SEVEN = document.querySelector('#seven')
SEVEN.addEventListener("click", () => {
    numberKey(7)
        });

const EIGHT = document.querySelector('#eight')
EIGHT.addEventListener("click", () => {
    numberKey(8)
        });

const NINE = document.querySelector('#nine')
NINE.addEventListener("click", () => {
    numberKey(9)
        });

const ZERO = document.querySelector('#zero')
ZERO.addEventListener("click", () => { numberKey(0)
    // if (!operator) {
    //     display = '0';
    //     number1 += display
    //     DISPLAY_VALUE.textContent = number1;
    // } else if (number1 != false && number2 != false && operator != false) {
    //     let sum = operate(number1, operator, number2);
    //     display = '';
    //     number1 = sum;
    //     number2 = '';
    //     display = num;
    //     number2 = display;
    //     DISPLAY_VALUE.textContent = number2;
    // } else if (operator === '+' || operator === '-' || operator === 'x' || operator === '÷') {
    //          display = '0';
    //          number2 += display;
    //          DISPLAY_VALUE.textContent = number2; 
    // } else {
    //         display = 'ERROR';
    //         DISPLAY_VALUE.textContent = display;
    // }
        });

const ADD = document.querySelector('#add')
ADD.addEventListener("click", () => { operation('+') });
    // Use this code on the other operators, check zero button for bugs
    // if (number1 !== '' && number2 !== '') {
    //     display = '+'
    //     operator = '+'
    //     let sum = operate(number1, operator, number2);
    //     number1 = sum;
    //     number2 = ''
    //     DISPLAY_VALUE.textContent = number1;
    // } else {
    // display = '+';
    // DISPLAY_VALUE.textContent = display;
    // operator = '+';
    // }

const SUBTRACT = document.querySelector('#subtract')
SUBTRACT.addEventListener("click", () => { operation('-') });


const MULTIPLY = document.querySelector('#multiply')
MULTIPLY.addEventListener("click", () => { operation('x')});


const DIVIDE = document.querySelector('#divide')
DIVIDE.addEventListener("click", () => { operation('÷')});


const DECIMAL = document.querySelector('#decimal')
DECIMAL.addEventListener("click", () => {
    display = '.';
    DISPLAY_VALUE.textContent = display;
});

const CLEAR = document.querySelector('#clear-button')
CLEAR.addEventListener("click", () => {
    display = '';
    DISPLAY_VALUE.textContent = display;
    number1 = '';
    number2 = '';
    operator = '';
    calc = 0;

});

const EQUALS = document.querySelector('#equals')
EQUALS.addEventListener("click", () => {
    if (isNaN(display)) {
        display = 'ERROR';
        DISPLAY_VALUE.textContent = display;
         } else if (display === '+' || display === '-' || display === 'x' || display === '÷') {
            display = 'ERROR'
            DISPLAY_VALUE.textContent = display
         } else {
            let calc = operate(number1, operator, number2);
            if (calc) {
            display = calc;
            DISPLAY_VALUE.textContent = calc;
            } else {
                display = 'ERROR'
                DISPLAY_VALUE.textContent = display;
            }
         }
         display = ''
         number1 = ''
         number2 = ''
         operator = ''
         calc = 0
        });
