document.addEventListener('DOMContentLoaded', function() {
    inputNum(), addPeriod(), equals(), inputMod();
})//primes buttons on pageload.
//gross hard coding of single buttons ROFL
let period = container.querySelector('.modBottom').childNodes[3] 
function addPeriod(){period.addEventListener('click', function(){
    return((modifier == '' ? operator = operator += '.' : operand = operand += '.'), displayContent());
})}
const togglenNeg = () => {
    container.querySelector('.modBottom').childNodes[5].addEventListener('click', () => {
        let check = 0;
        let neg = '-';
        if(check == 0 && modifier == ''){
            operator = neg += operator;
            check = 1;
        } else if(check == 0 && modifier !== '') {
            operand = neg += operand;
            check = 1;
        } else if(check == 1 && modifier == ''){
            operator = operator.slice(1, operator.length)
            check = 0;
            console.log('should be working')
        } else if(check == 1 && modifier !== ''){
            operand = operand.slice(1, operand.length);
            check = 0;
        }
        displayContent()
        console.log(check)
    })
}
const equals = () => {
    container.querySelector('.modBR').addEventListener('click', () => console.log('test'))
};
const numpad = document.querySelector('div.numpad')
const numbers = Array.from(numpad.querySelectorAll('div'));
let operator = '';// final operator
let modifier = '';// modifier being used 
let operand = '';//final operand
let buried = '';//held value (while user is still entering final value)
let int;//buried but not a string

//functions
function  displayContent(){
let display = document.querySelector('.content');
display.textContent =`${operator} ${modifier} ${operand} `
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
function inputNum(){
    for(let i = 0; i < numbers.length; i++) {
        if(i == 0 || i == 4 || i == 8){//kinda gross solution to skipping containers so it doesnt double log events
            continue;
        }
        numbers[i].addEventListener('click', function(){
            buried = numbers[i].textContent;
            int = parseInt(buried)
            console.log(numbers[i].textContent)
            assignValue(int)
            ;
        });
    }
}

function calc(x, y) {
   return(`${x}``${modifier}` `${y}`)  
}

function inputMod(){
    let testAr = Array.from(document.querySelectorAll('.modR'));
    console.log(testAr)
    for (const mod of testAr) {
        mod.addEventListener('click', () => {modifier = mod.textContent;
        displayContent()
        });
}
}

function clear(){
    let C = container.querySelector('.modBottom').childNodes[1].addEventListener('click', () => {
       modifier = '';
       operand = '';
       operator = '';
       displayContent();
    })
}