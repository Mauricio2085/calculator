let screen = document.querySelector('.screen');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eihgt = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const equal = document.querySelector('#equal');
const coma = document.querySelector('#coma');
const clear = document.querySelector('#ac');
const addition = document.querySelector('#addition');
const substract = document.querySelector('#substract');
const plus = document.querySelector('#plus');
const division = document.querySelector('#division');

let operator1;
let operator2;
let result;


one.addEventListener('click', addOne);
two.addEventListener('click',addTwo);
three.addEventListener('click', addThree);
four.addEventListener('click', addFour);
five.addEventListener('click', addFive);
six.addEventListener('click', addSix);
seven.addEventListener('click', addSeven);
eihgt.addEventListener('click', addEight);
nine.addEventListener('click', addNine);
zero.addEventListener('click', addZero);
coma.addEventListener('click', addComa);
clear.addEventListener('click', clearScreen);
addition.addEventListener('click', addOperation);
substract.addEventListener('click', substractOperation);
plus.addEventListener('click', plusOperation);
division.addEventListener('click', divisionOparation);

function addOne () {
   screen.textContent = screen.textContent + '1';

}

function addTwo () {
    screen.textContent = screen.textContent + '2';
   
 }

 function addThree () {
    screen.textContent = screen.textContent + '3';
 
 }

 function addFour () {
    screen.textContent = screen.textContent + '4';

 }

 function addFive () {
    screen.textContent = screen.textContent + '5';

 }

 function addSix () {
    screen.textContent = screen.textContent + '6';

 }

 function addSeven () {
    screen.textContent = screen.textContent + '7';

 }

 function addEight () {
    screen.textContent = screen.textContent + '8';
    
 }

 function addNine () {
    screen.textContent = screen.textContent + '9';
   
 }

 function addZero () {
    screen.textContent = screen.textContent + '0';
 
 }

 function addComa () {
    screen.textContent = screen.textContent + '.';
   
 }

 function clearScreen () {
    screen.textContent = '';

 }


function addOperation () {
   operator1 = screen.textContent;
   screen.textContent = '';
    console.log(operator1);
}

function substractOperation (number1, number2) {
    return number1 - number2;
}

function plusOperation (number1, number2) {
    return number1 * number2;
}

function divisionOparation (number1, number2) {
    return number1 / number2;
}


function calculator (number1, number2) {
    let x = 4;
    if (x == 1) {
        return addOperator(number1, number2);
    }
    if (x == 2) {
        return subOperator(number1, number2);
    }
    if (x == 3) {
        return pluOperator(number1, number2);
    }
    if (x == 4) {
        return divOperator(number1, number2);
    }
    
} 
