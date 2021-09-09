'use strict'
const $ = function (foo) {
    return document.getElementById(foo);
};

let input = $('number');
let amount = $('rollAmount');
let one = $('one');
let oneVal = 0;
let two = $('two');
let twoVal = 0;
let three = $('three');
let threeVal = 0;
let four = $('four');
let fourVal = 0;
let five = $('five');
let fiveVal = 0;
let six = $('six');
let sixVal = 0;



function rollDie(e){
    e.preventDefault();
    input = $('number').value -0;
    result();
    console.log(input);
    amount.innerHTML = input;
}

function result(e){
    for (let i = 0; i < input; i++) {
        let roll = Math.floor(Math.random() * 6) +1;
        if(roll === 1){
            oneVal++;
            one.innerHTML = oneVal
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



$('rollDice').addEventListener('submit',rollDie);