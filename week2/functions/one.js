// var n = 'bob';
// var m = 'jonson';
// function greeter (n,m){
// // var n = 'third';
// // var m = 'third2';
// console.log(n,m)
// }
// greeter(1,2)







// function Roll(num, sec) {
//   if(num > 10000){return}
//   console.log(num);
//   var sec = num + sec;
//   return (Roll(num + num), sec)
// }
// Roll(1)


var out = 0;
var first = 0;
var second = 1;
var fibNumbs = [];
var count = 0;
var fNum = function (num){
  while(fibNumbs.length < num) {
    out = first + second;
    first = second;
    second = out;
    fibNumbs.push(out);
  }
}
var getPosition = function(par) {
  return something = fNum(par);

}
getPosition(8)
