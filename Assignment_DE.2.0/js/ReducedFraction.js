'use strict'

const fractionsForm         = document.getElementById('fractionsForm');
const firstFractionResult   = document.getElementById('firstFractionResult');
const secondFractionResult  = document.getElementById('secondFractionResult');

const gcd = function (a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function calc(e) {

    e.preventDefault();

    const firstNumerator    = document.getElementById('firstNumerator').value;
    const firstDenominator  = document.getElementById('firstDenominator').value;
    const secondNumerator   = document.getElementById('secondNumerator').value;
    const secondDenominator = document.getElementById('secondDenominator').value;

    // Get greatest common denominator
    const gcdFirstFraction  = gcd(firstNumerator, firstDenominator);    
    const gcdSecondFraction = gcd(secondNumerator, secondDenominator);

    // Divide numerator and denominator with greatest common denominator
    // First fraction
    const reducedFirstNumerator     = firstNumerator / gcdFirstFraction;
    const reducedFirstDenominator   = firstDenominator / gcdFirstFraction;
    
    // Second fraction
    const reducedSecondNumerator    = secondNumerator / gcdSecondFraction;
    const reducedSecondDenominator  = secondDenominator / gcdSecondFraction;

    // Reduce improper fraction and find remainder
    // First fraction
    const firstWholeNumber  = Math.floor(reducedFirstNumerator / reducedFirstDenominator);
    const firstRemainder    = reducedFirstNumerator % reducedFirstDenominator;

    // Second fraction
    const secondWholeNumber = Math.floor(reducedSecondNumerator / reducedSecondDenominator);
    const secondRemainder   = reducedSecondNumerator % reducedSecondDenominator;

    // Results
    // First fraction
    firstFractionResult.innerHTML   = `First fraction reduced to: ${firstWholeNumber ? firstWholeNumber : ''} ${firstRemainder ? firstRemainder : ''}/${reducedFirstDenominator}`;

    //Second fraction
    secondFractionResult.innerHTML  = `Second fraction reduced to: ${secondWholeNumber ? secondWholeNumber : ''} ${secondRemainder ? secondRemainder : ''}/${reducedSecondDenominator}`;

}

fractionsForm.addEventListener('submit', calc);