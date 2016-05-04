// var triple = function(x) {
//   return x*3
// }
// var waffle = triple
// waffle(20);



var animals = [
  {name:'lala',species:'dog'},
  {name:'puty',species:'dog'},
  {name:'storm',species:'fish'},
  {name:'fox',species:'cat'},
]
// // Filter - returns a new instance of the array with only selected items
// var dogs = animals.filter(function(animal){
// //   returns a callback value that is either true or false
//   return animal.species === 'dog'
// })

// var dogs = []
// for (var i = 0; i<animals.length;i++) {
//   if(animals[i].species==='dog')
//   dogs.push(animals[i])
// }

// Map - transformed array
//// node --harmony_arrow_functions higher-order-functions.js
var names = animals.map((x) =>  x.species)

// var names = animals.map(function(x){
//   return x.name + ' is a ' + x.species
// })

// var names = []
//   for (var i = 0;i<animals.length;i++){
//     names.push(animals[i].name + ' is a ' + animals[i].species)
// }

 console.log(names)
