'use strict'

let game    = window.prompt('Choose a game by typing in the game name (coin, dice or roulette)');
let number  = window.prompt('Type in the number of times you wish to play') - 0;

function play(game, number) {
    
    if (game === 'coin') {

        for(let i = 1; i < number + 1; i++) {

            let flip = Math.floor(Math.random() *2);
            
            if (flip === 0) {
                console.log(`Flip ${i}: Your flipped coin landed on HEADS.`);
            }

            else {
                console.log(`Flip ${i}: Your flipped coin landed on TAILS.`);
            }

        }

        return;

    }

    if (game === 'dice') {
        
        for(let i = 1; i < number + 1; i++) {

            let roll = Math.floor(Math.random() *6) + 1;
            
            console.log(`Roll ${i}: Your rolled dice landed on ${roll}.`);

        }

        return;

    }

    if (game === 'roulette') {        
        
        for(let i = 1; i < number + 1; i++) {

            let spin = Math.floor(Math.random() *37) + 1;
            
            console.log(`Spin ${i}: The roulettes outcome was ${spin}.`);

        }

        return;

    }

    else {

        console.log(`Sorry, either game or number was not specified correct. For game you typed '${game}', for number you typed '${number}'.`);

    }

}

console.log(play(game, number));