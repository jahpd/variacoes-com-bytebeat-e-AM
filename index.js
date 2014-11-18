
/**
 * @name variacoes com bytebeat e AM
 * @author jahpd
 */

var tau = 2 * Math.PI;

function sin(t, f, a, callback){
  var s = Math.sin(f * t * tau);
  if(callback){
    return callback(s);
  }
  else{
    return s;
  }
}



export function dsp(t) {
  return  sin(t, 64, 1, function(sample){
    var s =  sin(t, t >> sample << 8 & t >> sample * 3, 1);
    var l = s *sin(t, 10621.05, 1);
    var r = s *sin(t, 1051.05, 1);
    return [l, r];
  });
}
