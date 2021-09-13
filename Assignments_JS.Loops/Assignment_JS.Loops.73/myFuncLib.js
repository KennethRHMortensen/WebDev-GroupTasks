const $ = function(foo){
   return document.getElementById(foo); 
}

const pForm = $('powerForm');
let n = parseInt($('num').value);
let e = parseInt($('exp').value); 
let res = $('result');


function power(n, e){
   n.preventDefault();
   let res = 1;
   while (e > 0){
      res *= n;
      e -= 1;
   }
   return res;
}


pForm.addEventListener('submit', power);



