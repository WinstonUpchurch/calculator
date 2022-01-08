document.addEventListener('DOMContentLoaded', function() {
    inputNum()
})//primes buttons on pageload.


const userInput = 34; //this is a test value, true value will be supplied thru buttons
const modifiers = ['+', '-', '*', '=', '/'];
const numpad = document.querySelector('div.numpad')
const numbers = Array.from(numpad.querySelectorAll('div'));
let operator = '';// final operator
let modifier = '';// modifier being used 
let operand = '';//final operand
let buried = '';//held value (while user is still entering final value)
let int;
numbers.push(container.querySelector('.modBottom').childNodes[3])

//functions
function  displayContent(){
let display = document.querySelector('.content');
display.textContent =`${operator} ${modifier} ${operand}`
}

function assignValue(n){ // this will be called each time a number is pressed
    if(modifier == ''){
        console.log('Asigned to operator!')
        operator = operator + n;
    } else if (modifier !== ''){
        console.log('assigned to operand!')
        operand = operand + n;
    }
    displayContent()
}
function inputNum(){//adds event listeners still WIP
    
    for(let i = 0; i < numbers.length; i++) {
        if(i == 0 || i == 4 || i == 8){
            continue;
        }
        numbers[i].addEventListener('click', function(){
            buried = numbers[i].textContent;
            if(numbers[i].textContent == '.'){int = parseInt(buried)}
            console.log(numbers[i].textContent)
            assignValue(int)
            ;
        });
    }
}

function clear(){//used to clear display
let display = document.getElementById('display');
display.textContent = '';
}



 


//to start no variables have been asaigned a value. when a button is pressed that number needs to be logged in a variable seperate from the input itself. the user should be able to input as many numbers as they want, this is why numbers need to be stored as strings before the final calculation becuase they need to be concatinated not added(inputting 3,3,3 is 333 not 9) this also makes it easier to intigrate period and +/- .
//  what needs to be listened for to finalize the first number is a modifier button(+-*ect). then that modifier needs to be stored in mod and then we listen for another number. which needs to be stored seperaty from the first. then when the equals button is pressed those two numbers and the one modifier are used to do the calc. 
//steps - 1. user enters a number. 2. user enters a modifier. 3. user enters a number. 4. user presses = and the calculation is ran. 

//step one prereqs: when a number is pressed it needs to 
    




//
// function inter(x) {
//     if(isNaN(x) == false && holdInt === 0){
//         holdInt = userInput;
//         console.log('updated holdInt')
//     } else if (isNaN(x) && holdInt === Number) {
//         holdInt = holdInt += x;
//         console.log('userInput added to holdInt')
//     } else if(x === NaN && x !== '=') {
//         mod = x;
//         final.push(holdInt);
//         console.log('modifier detected, updated mod / pushed holdInt into final')
//     } else console.log('other') // unwritten atm. will run calculation of final using users chosen modifier, and push result as text content to display.
// }