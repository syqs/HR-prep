function sc(s){
  //Good Luck
  var m = [];
  var fa = [];
  var s = [];
  //
function checkForUppercase(a){
    var b = a.toUpperCase()
    if (a === b) {
      return true;
    } else {
    return a;
    }
  }
  for (var i = 0;i<s.length;i++){
    m.push(s.charAt(i))
  }

  m.forEach(function(a,b){

    for (var j=0; j<m.length;j++) {

      if(a === m[j]){
        if(checkForUppercase(a)===true){
          fa.push(a);
        }else if (checkForUppercase(a) === a){
        s.push(a);
        }
      }

    }
    debugger
  })

}

sc('HelLo')
console.log(fa)


// // return a function that returns n
// var always = function(n) {
//   return function(){
//     return n;
//   }
// }
// var four = always(5);
// four();



// function zebulansNightmare(f) {
//   var jo = f.split('_');
//   var output;
//   //forEach takes two parameters first is item/value second is index in the array
//   jo.forEach(function(item, index){
//     if (index === 0){
//       output = jo[0];
//     }else{
//       item = item.charAt(0).toUpperCase() + item.slice(1);
//       output += item;
//     }
//   });
//   return output;
// }
//
// zebulansNightmare('camel_case');
