var logAndReturn = function(){
	console.log(arguments);
	return arguments;
};

var returnedValues = logAndReturn("hello", "goodbye");

logAndReturn(returnedValues);
