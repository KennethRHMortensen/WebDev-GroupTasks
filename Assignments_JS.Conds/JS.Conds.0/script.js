'use strict'
// shortkey for document.getElementById()
const $ = function (foo) {
    return document.getElementById(foo);
};

// Assign variable alias
let input   = $('number'); 
let amount  = $('rollAmount');

// sides of the dice
let one     = $('one');
let two     = $('two');
let three   = $('three');
let four    = $('four');
let five    = $('five');
let six     = $('six');

// default values before rolling the die
let oneVal      = 0;
let twoVal      = 0;
let threeVal    = 0;
let fourVal     = 0;
let fiveVal     = 0;
let sixVal      = 0;

// function that rolls the dice 
function rollDie(e){
    e.preventDefault();
    input = parseInt(input.value);      // re-assign input value 
    amount.innerHTML = input;           // print input value in HTML
    console.log('The input value was ' + input + ' rolls');
    result();                           // run result function 
}

// function that increments and prints results of rolls
function result(){
    for (let i = 0; i < input; i++) {                   // loop until input i = input value
        let roll = Math.floor(Math.random() * 6) +1;    // assign variable with a random number between 1 and 6
        console.log('this roll hit ', roll);            // console log each roll
        if(roll === 1){
            oneVal++;                                   // increment variable
            one.innerHTML = oneVal                      // print incremented value in HTML
        }
        else if(roll === 2){
            twoVal++;
            two.innerHTML = twoVal
        }
        
        else if(roll === 3){
            threeVal++;
            three.innerHTML = threeVal
        }
        else if(roll === 4){
            fourVal++;
            four.innerHTML = fourVal
        }
        else if(roll === 5){
            fiveVal++;
            five.innerHTML = fiveVal
        }
        else if(roll === 6){
            sixVal++;
            six.innerHTML = sixVal
        }   
    }
}

// On submit of formular, run function rollDie
$('rollDice').addEventListener('submit',rollDie);