$(document).ready(function(){

var annuity = document.getElementById('annuity');
var rate = document.getElementById('rate');
var compounded = document.getElementById('compounded');
var duration = document.getElementById('duration');
var period = document.getElementById('period');
var begin = document.getElementById('begin');
var fv = document.getElementById('fv');

var a, r, c, d, p, b, f;


  $('#calculate').on('click',function(){

      a = annuity.value;
      r = rate.value / 100;
      c = compounded.value;
      d = duration.value / period.value;
      b = begin.value;

      if (b == 0){
        //begin
        f = +a * ( ( ( Math.pow( (+1 + +(r/c)) , +(d * c) ) ) - +1 ) / +(r/c) ) * (+1 + +r/c);

      }
      else {
        //end
        f = +a * ( ( ( Math.pow( (+1 + +(r/c)) , +(d * c) ) ) - +1 ) / +(r/c) );
      }

      fv.value = f;

  });


});
