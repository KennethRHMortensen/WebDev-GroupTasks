function isPrime(p) {

    let prime = true;
    
    if (p > 1) {

        for (let i = 2; i < p; i++) {
            if (p % i == 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            console.log(`${p} is a prime number.`);
        } else {
            console.log(`${p} is not a prime number.`);
        }

    } else {
        console.log('Number must be greater than 1.');
    }

}

isPrime(5);

//source https://www.programiz.com/javascript/examples/prime-number