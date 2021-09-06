'use strict'

const fractionsForm = document.getElementById('fractionsForm');
const result        = document.getElementById('result');
const differnce     = document.getElementById('differnce');

function calc(e) {

    e.preventDefault();

    const firstNumerator    = document.getElementById('firstNumerator').value;
    const firstDenominator  = document.getElementById('firstDenominator').value;
    const secondNumerator   = document.getElementById('secondNumerator').value;
    const secondDenominator = document.getElementById('secondDenominator').value;
    const firstFraction     = firstNumerator / firstDenominator;
    const secondFraction    = secondNumerator / secondDenominator;    

    result.innerHTML    = firstFraction > secondFraction ? `${firstNumerator}/${firstDenominator} is the bigger fraction` : `${secondNumerator}/${secondDenominator} is the bigger fraction`;
    differnce.innerHTML = firstFraction > secondFraction ? `by ${firstFraction - secondFraction}` : `by ${secondFraction - firstFraction}`;

}

fractionsForm.addEventListener('submit', calc);