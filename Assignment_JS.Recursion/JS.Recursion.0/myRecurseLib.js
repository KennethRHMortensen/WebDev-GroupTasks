'use strict'

function fact(n) {

    if (n == 0) {
        return 1;
    }
    
    else {
        return n * fact(n - 1);
    }

}

console.log(`Factorialize: ${fact(5)}`);

//source https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/