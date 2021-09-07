'use strict'

// create $ shortkey for document.getElementById
const $ = function (foo) {
    return document.getElementById(foo);
};

// aliases
const paceForm = $('paceForm');


// converting function to find running pace pr. km
const convert = function (e) {
    
    const km = $('km').value;
    const hour = $('hour').value;
    const min = $('minute').value;
    const sec = $('second').value;
    // convert total running time to seconds
    const totalTime = sec+(min*60)+(hour*3600);
    console.log('the total time in sec is', totalTime);
/*
    // convert total time in seconds to total time in seconds pr. km 
    const paceSec = totalTime/km;
    console.log("the total time pr, km. in sec is " paceSec);

    // convert seconds pr. km. to hours, then substract the remaining minutes and seconds from this to another index
    
    const paceHh = paceSec/3600;
    console.log("the total time pr. km. in hours is " paceHh);
    */
    // convert the remains to minutes and place the result in another index
    /*
    let paceMm = (paceHh-)
    console.log(paceHh);
    
    // convert the remains to seconds and place the result in the last index
    
    // convert time pr. km to hh:mm:ss
    let pace = arr[        
        paceHh,
     
        {"id": h, 
        "time": (paceSec/60)/60)},
        {"id": m,
        "time": ()}
        */
    
/*
    let arr = s.split(':');
    let h = arr[0];
    let m = arr[1];
    let s = arr[2];
*/  
    $('hours').innerHTML = paceSec;
    /*$('minutes').innerHTML = m;
    $('seconds').innerHTML = s;
    */
    e.preventDefault();
    return false;
};

paceForm.addEventListener('submit', convert);
