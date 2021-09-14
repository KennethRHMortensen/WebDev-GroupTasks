'use strict'

function facti(n) {
    
    for(let i = n - 1; i >= 1; i--) {
        n = n * i;
    }

    return n;

}

console.log(facti(5));