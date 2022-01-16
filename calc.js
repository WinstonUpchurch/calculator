document.addEventListener('DOMContentLoaded', function() {
    inputNum(), addPeriod(), equals(), inputMod(), toggleNeg(), C();
})//primes buttons on pageload.

const numpad = document.querySelector('div.numpad')
const numbers = Array.from(numpad.querySelectorAll('div'));

let operator = '';// final operator
let modifier = '';// modifier being used 
let operand = '';//final operand
let buried = '';//held value (while user is still entering final value)
let int;//buried but not a string
let negative = 0;//value indicates weither the number is negative. toggleNeg()/inputMod()
let final = 0;

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

function inputMod(){
    let modifiers = Array.from(document.querySelectorAll('.modR'));
    console.log(modifiers)
    for (const mod of modifiers) {
        mod.addEventListener('click', () => {modifier = mod.textContent;
        displayContent()
        negative = 0;
        });
}
}

function clear(){
       modifier = '';
       operand = '';
       operator = '';
       displayContent();
}


let period = container.querySelector('.modBottom').childNodes[3] 
function addPeriod(){
    period.addEventListener('click', function(){
    if(modifier == ''){
    operator.includes('.') ? operator = operator.slice(0, operator.length -1): operator = operator += '.';
    } else {
    operand.includes('.') ? operand = operand.slice(0, operand.length -1) : operand = operand += '.';}
    displayContent()
    })
}

const toggleNeg = () => {
    container.querySelector('.modBottom').childNodes[5].addEventListener('click', () => {
        let check = 0;
        let neg = '-';
        if(modifier == false && negative == false){
           operator = neg + operator;
           negative = 1; 
           console.log('added to operator')
        } else if (modifier !== '' && negative == false){
            operand = neg + operand;
            negative = 1;
            console.log('added to operand')
        } else if (modifier == false && negative == true){
           operator = operator.slice(1, operator.length); 
           negative = 0;
           console.log('removed from operator')
        } else {
            operand = operand.slice(1, operand.length);
            negative = 0;
            console.log('removed from operand')
        }
        console.log(negative)
        displayContent()
    })
}

const C = () => {
    container.querySelector('.modBL').addEventListener('click', () => {
        console.log('clearing')
        clear()
    })}

const equals = () => {
    container.querySelector('.modBR').addEventListener('click', () => {
    if(modifier.includes('X')){
        modifier = '*';
    } else if(modifier.includes('%')){
        modifier = '/';
    }
    let one = parseInt(operator)
    let two = parseInt(operand)
    console.log(typeof(one))
    console.log(typeof(two))
    switch (modifier) {
        case '+' : 
        final = one + two;
        break;

        case '-' :
        final = one - two;
        break

        case '*' : 
        final = one * two;        
        break

        case '/' : 
        final = one / two;
        break;
    }
    clear()
    operator = final;
    displayContent()
});
}
