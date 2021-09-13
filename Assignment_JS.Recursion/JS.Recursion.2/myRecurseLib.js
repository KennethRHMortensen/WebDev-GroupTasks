// create function of exp that takes an exponent (exp) and an value (val) eg. exp == 2, val == 5


function pow(val, exp) {
    let res = 1;
    while (exp >= 0){ 
        if (exp <= 0){
            return;
        }
        else{
            res *= val;
            exp--;
        }       
    }
}
    /*// if val < 1, stop the loop by returning 1
    if(val <= 0) {
        console.log('done' );
        return ; 
    }
    // else return exponent * (val-1 ^ exp)
    else {
        console.log('the value is', val, 'the exponent is:', exp);
        return val * pow(val - 1, exp);
        // return 5 * pow(2-1, 5);   
    };*/


console.log(`end result is: ${pow(2,5)}`);

//source https://www.programiz.com/javascript/examples/fibonacci-recursion
