'use strict'

const $ = function (foo) {
    return document.getElementById(foo);
};
const catcher = function (e) {
    let t1 = $('it1').value;
    $('res').innerHTML = t1 - 0;
    e.preventDefault();
    return false;
};
const init = function () {
    $('formalisme').addEventListener('submit', catcher);
};
window.addEventListener('load', init);