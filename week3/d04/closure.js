// function nonsense(string) {
//
//   var blab = function(){
//   alert(string);
//   };
//  return blab;
// };
//   var blabLater = nonsense('asdf');
//   var blabAgainLater = nonsense('the again');

// var lastNameTrier = function(firstName){
//   //does stuff
//   var name = firstName;
//    var innerFunction = function(lastName) {
//        //does stuff
//        console.log(firstName + ' ' + lastName)
//    };
//    //maybe returns something here
//    return innerFunction;
// };
//
// var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
// firstNameFarmer('Brown'); //logs 'Farmer Brown'
// firstNameFarmer('Jane'); //logs 'Farmer Jane'
// firstNameFarmer('Lynne'); //logs 'Farmer Lynne'


// var checkAttendanceFunc = function(nameArr){
//  var resultArr = [];
//  for(var i = 0; i < nameArr.length; i++){
//    resultArr.push(function(j){ console.log('Is', nameArr[j], 'present?', i)}(i))
//  };
//  return resultArr;
// };
//
// checkAttendanceFunc(['moko','hkjhk','ooo'])


// Write a function that takes another function as an argument and creates a version
// of the function that can only be called one time. Repeated calls to the
//  modified function will have no effect, returning the value from the original
//   call. How could you do this without using a closure? Is it even possible?
//   How could you do this with a closure? Note: This original input function should
//   not* have any parameters.


function theClosure(fn) {
  var counter = counter || 0;
  if(counter>0){
    return fn()
  }
  counter++;
  return fn;

}

var first = theClosure(function(){console.log('hello')})
var second = theClosure(function(){console.log('good by')})

first();
first();
second();
