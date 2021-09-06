'use strict'

const $ = function (foo) {
    return document.getElementById(foo);
};
const convert = function (e) {
    let km = $('km').value;
    let hour = $('hour').value;
    let min = $('minute').value;
    let sec = $('second').value;
    // convert running time to seconds
    let totTime = sec+(min*60)+(hour*3600);
    console.log(km/totTime);
    // calculate total time pr. km
    let pace = ((km/totTime)/60).toFixed(2);

    
/*
    let arr = s.split(':');
    let h = arr[0];
    let m = arr[1];
    let s = arr[2];
*/  
    $('hours').innerHTML = pace;
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