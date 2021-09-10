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