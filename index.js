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


function addOne () {
   screen.textContent = screen.textContent + '1';
   console.log(screen);
}

function addTwo () {
    screen.textContent = screen.textContent + '2';
    console.log(screen);
 }

 function addThree () {
    screen.textContent = screen.textContent + '3';
    console.log(screen);
 }

 function addFour () {
    screen.textContent = screen.textContent + '4';
    console.log(screen);
 }

 function addFive () {
    screen.textContent = screen.textContent + '5';
    console.log(screen);
 }

 function addSix () {
    screen.textContent = screen.textContent + '6';
    console.log(screen);
 }

 function addSeven () {
    screen.textContent = screen.textContent + '7';
    console.log(screen);
 }

 function addEight () {
    screen.textContent = screen.textContent + '8';
    console.log(screen);
 }

 function addNine () {
    screen.textContent = screen.textContent + '9';
    console.log(screen);
 }

 function addZero () {
    screen.textContent = screen.textContent + '0';
    console.log(screen);
 }

 function addComa () {
    screen.textContent = screen.textContent + '.';
    console.log(screen);
 }


function addOperator (number1, number2) {
    return number1 + number2;
}

function subOperator (number1, number2) {
    return number1 - number2;
}

function pluOperator (number1, number2) {
    return number1 * number2;
}

function divOperator (number1, number2) {
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
