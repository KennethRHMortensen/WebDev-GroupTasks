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

function fibo(n) {

    if(n < 2) {
        return n;
    }

    else {
        return fibo(n-1) + fibo(n - 2);
    }
    
}

console.log(`Fibonacci: ${fibo(10)}`);

//source https://www.programiz.com/javascript/examples/fibonacci-recursion

function isPalindrome(s) {
    
    if(s.length <= 1) return true;

    return s[0] === s[s.length - 1] && isPalindrome(s.substring(1, s.length - 1));

}

console.log(`is palindrome? ${isPalindrome("racecar")}`);