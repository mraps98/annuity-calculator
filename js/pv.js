$(document).ready(function(){

var annuity = document.getElementById('annuity');
var rate = document.getElementById('rate');
var compounded = document.getElementById('compounded');
var duration = document.getElementById('duration');
var period = document.getElementById('period');
var begin = document.getElementById('begin');
var pv = document.getElementById('pv');

var a, r, c, d, p, b, f;


  $('#calculate').on('click',function(){

      a = annuity.value;
      r = rate.value / 100;
      c = compounded.value;
      d = duration.value / period.value;
      b = begin.value;

      if (b == 0){
        //begin
        f = +a * ( ( 1 - (Math.pow( 1 + +(r/c) , -(d * c)  ))  ) / +(r/c) ) * (1 + +(r/c));

      }
      else {
        //end
        f = +a * ( ( 1 - (Math.pow( 1 + +(r/c) , -(d * c)  ))  ) / +(r/c) );
      }

      pv.value = f;

  });


});
