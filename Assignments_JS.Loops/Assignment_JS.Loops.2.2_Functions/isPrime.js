// create $ shortkey for document.getElementById
const $ = function (foo) {
    return document.getElementById(foo);
};

// aliases, assigning variables
let result          = $('result');
const primeForm     = $('primeNum');
let p;

    
// function that checks if input is a prime number
function isPrime(p) {
    // prevent default behaviour of form actions by submitting
    p.preventDefault();
    // take userinput and set it as integer
    p = parseInt($('val').value);
    
    // set prime as true by default
    let prime = true;
    // loop through function as long as input is bigger than 1
    if (p > 1) {
        for (let i = 2; i < p; i++) {
            // if input divided by index and its remainders equals 0, set prime as false and stop the loop
            if (p % i == 0) {
                prime = false;
                break;
            }
        }
        // if input is a prime, write it in the innerHTML
        if (prime) {
            console.log(`${p} is a prime number.`);
            result.innerHTML = p + ' is a prime number';
        // if input is not a prime, write it in the innerHTML
        } else {
            console.log(`${p} is not a prime number.`);
            result.innerHTML = p + ' is not a prime number';
        }
        // if input is smaller than 1, inform the user that value is 
    } else {
        console.log('Number must be greater than 1.');
        result.innerHTML = 'to check if value is a prime, input must be greater than 1';
    }
}
// on submit of form, run isPrime function
primeForm.addEventListener('submit', isPrime);

//source https://www.programiz.com/javascript/examples/prime-number