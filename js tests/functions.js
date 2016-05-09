(function(){
var leObj = [
{name:'jon',age:20,job:'barista'},
{name:'jons',age:20,job:'ninja'},
{name:'mika',age:20,job:'ux designer'}
];
var counter = 0;
var totalAge = leObj.reduce(function(total, item){
  console.log("echo: ",total +" ", item)
  counter++
  return total + item.age;
}, null )
console.log(totalAge/counter);







//
// var theEach = function(collection,fn){
//   var newArr = [];
//   if (Array.isArray(collection)){
//     for(var i = 0; i<collection.length;i++){
//       newArr.push(fn(collection[i]));
//     }
//     return newArr;
//   }
//   for(var item in collection){
//     newArr.push(fn(collection[item]))
//   }
//   return newArr;
// };
// console.log(theEach({'first':7,'second':2},function(n){return n * n}));



// var theIndexOf = function(arr,target){
//   for (var i = 0;i<arr.length;i++){
//     if(arr[i] === target) {return i}
//   }
//   return -1;
// }

// console.log(theIndexOf([2,4,6,21,1,343,2], 7));





// var arr = [
// {name:'jon',age:20,job:'barista'},{name:'jons',age:20,job:'ninja'},{name:'mika',age:24,job:'ux designer'}
// ];
//
// var onlyOver23 =
//   arr.filter(function(item){
//     return item.age === 20;
//   }).map(function(item){
//     return item.job;
//   })
//
// onlyOver23.forEach(
//   function(n){
//     console.log(n);
//   }
// );
// theEach(onlyOver23, function(i){
//   console.log(i)
// });




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


// work in progress
// ---------------------
// function sc(s){
//   //Good Luck
//   var m = [];
//   var fa = [];
//   var s = [];
//   //
// function checkForUppercase(a){
//     var b = a.toUpperCase()
//     if (a === b) {
//       return true;
//     } else {
//     return a;
//     }
//   }
//   for (var i = 0;i<s.length;i++){
//     m.push(s.charAt(i))
//   }
//
//   m.forEach(function(a,b){
//
//     for (var j=0; j<m.length;j++) {
//
//       if(a === m[j]){
//         if(checkForUppercase(a)===true){
//           fa.push(a);
//         }else if (checkForUppercase(a) === a){
//         s.push(a);
//         }
//       }
//
//     }
//     debugger
//   })
//
// }
//
// sc('HelLo')
// console.log(fa)


})();
