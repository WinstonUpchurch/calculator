let userInput = [1, 2 , 4, 5]; //test values will add way for it to correspond to buttons
const modifiers = ['+', '-', '*', '=', '/'];

function calc(userInput){

}

//onclick let userInput => {
// let hold = '';
// if(userInput.isNum) {
// hold = userInput;
// } else if (userInput.isNum && hold === num) {
// hold = '' + hold + userInput;
//} else if (userInput === NaN) {
//  calc = hold;
//  hold = userInput;
// } else if (userInput === '=') {
// final = calc + `${hold}` + hold //idea here being we have 2 held values first and last and a modifier by which the two values are to be added. after this the final needs to be stored so user can use it as value 1 for another calculation. 
//}
// userInput = hold; //this looks dumb butin my dumb brain hold holds the final first val while input is a modifier. then > 
//got lost in here wont acutllay work logically but on the right track




//calc will consist of 10 buttons fomr numbers (0-9). 6 buttons for operations (add, subtract, mulitply, devide, decimle place, and equals. there will be an interface above the numpad showing users inputs. when the user clicks a number it will be stored in an array, when the user clicks an operator button, it will inform the reduce() function that will be appied to the array. ex -> array[...ints]; let calc = (...ints) => ints.reduce(x, y) => result = x (userinput) y;

// user input cannot be an array because it needs to take a single int, then a mod, then another int. so the user inputs a number and it is stored in a varible (must allow for any number of characters.) then the modifier is defined. at this point the user CAN input = if they choose but it will have no effect.

//i should write a function that takes true parent node, and cycles through each of its children mapping all child nodes of all nodes to an array. reason being i made a real mess of my css/html and i dont really wanna fix it so to assign eventListeners to all of them seperately would be a bitch. 

//^ !!this is all sudocode bullshit to get ideas down dont try and use this as actual declarations future me!! document.getElementById('container') => Array.from(container.childNodes) => array.forEach((array.push([this].childNodes) ... til no more childNodes. maybe figureout the real declrations for what im thinking above and wrap it all up in conditionals. onces its done we can use the resulint collection to easily apply eventListeners. 

//of chance anyone other than me reads this i am stoned please do not try and undertstand. u wouldnt get it man

//LOL WHY DID I WRITE THIS MUCH JFC. have fun reading this dont do drugs