'use strict';
/* Downey: thinkjava, ex 71 */
const loop = function(n) {
    let i = n;
    while (i > 1) {
        console.log((i + "\t" + Math.log(i) / Math.log(2)));
        if (i % 2 == 0) {
            i = i / 2;
        } else {
            i = i + 1;
        }
    }
}

loop(10);