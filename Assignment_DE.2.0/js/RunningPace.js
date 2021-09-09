'use strict'

// create $ shortkey for document.getElementById
const $ = function (foo) {
    return document.getElementById(foo);
};

// alias
const paceForm = $('paceForm');

// converting function to find running pace pr. km
function convert(e) {
    
    // prevent the default behavior of a form 
    e.preventDefault();
    
    const km        = $('km').value -0;
    const hour      = $('hour').value -0;
    const min       = $('minute').value -0;
    const sec       = $('second').value -0;

    // calculate total running time in seconds
    const totalSec  = sec + (min * 60) + (hour * 3600);
    console.log('the total time in sec is', totalSec);

    // convert total time pr. km to seconds
    let paceSec     = totalSec / km;
    console.log("total time pr. km. in seconds is ", paceSec);

    // create object with identifiers and values of hours, minutes and seconds
    let resultObj       = {};
    resultObj.hours     = Math.floor(paceSec / 3600); // time pr. km. in hours
    paceSec             = paceSec % 3600; // re-assign paceSec value with the remainders of time pr. km. in hours
    resultObj.minutes   = Math.floor(paceSec / 60); // time pr. km. in minutes from the remainders 
    paceSec             = paceSec % 60; // re-assign paceSec value with the remainders of time pr. km. in minutes
    resultObj.seconds   = Math.round(paceSec); // time pr. km. in seconds from the remainders

    // print the objects values in hh:mm:ss format in html 
    $('runningpace').innerHTML = resultObj.hours + 't:' + resultObj.minutes + 'm:' + resultObj.seconds + 's';

};

// run function on submit of form
paceForm.addEventListener('submit', convert);