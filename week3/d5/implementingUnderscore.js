var theEach = function(collection,fn,obj){
  var newArr = [];
  if (Array.isArray(collection)){
    for(var i = 0; i<collection.length;i++){
      newArr.push(fn(collection[i],i,obj));
    }
    return newArr;
  }
  for(var item in collection){
    newArr.push(fn(collection[item],item,collection))
  }
  return newArr;
};

// var newSomething = theEach({'fdsfdfs':1,'two':2},function(x,y,z){
// 	console.log(x,y,z)
// });

var indexOf = function(array,value){
	var index = -1
	theEach(array,function(x,y){
		if(array[y] === value) {
			index = y;
		}
	});
	return index;
}

console.log(indexOf([1,2,3],3));

// var each = function(value,fn,collection){
// var result = [];
// if(!Array.isArray(value)){
// 		for (var item in collection){
// 			console.log('poop');
// 			result.push(fn(item))
// 		}
// 		return result;
//
// }else
// {
// 	for (var i = 0; i < value.length; i++)
// 	{
// 		result[i] = fn(value[i],i,value);
// 	}
// 	return result;
// }
//
//
// }

// var newSomething = theEach({'fdsfdfs':1,'two':2},function(x,y,z){
// 	console.log(y,x, z.length)
// })
