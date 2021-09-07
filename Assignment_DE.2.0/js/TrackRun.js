'use strict'

// create $ shortkey for document.getElementById
const $ = function (foo) {
    return document.getElementById(foo);
};

let km = $('km').value;
let hour = $('hour').value;
let min = $('minute').value;
let sec = $('second').value;

// converting function to find running pace pr. km
const convert = function (e) {
    
    // convert total running time to seconds
    let totalTime = sec+(min*60)+(hour*3600);
    console.log(km/totalTime);

    // convert total time in seconds to total time in seconds pr. km 
    let paceSec = km/totTime;
    // convert time pr. km. from seconds to hours, then substract the remaining minutes and seconds from this to another index
    let paceHh = (paceSec/60)/60;
    console.log(paceHh);
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
 

    // create array of hh:mm:ss
   
    
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
const init = function () {
    $('t2tpkm').addEventListener('submit', convert);
};
window.addEventListener('load', init);