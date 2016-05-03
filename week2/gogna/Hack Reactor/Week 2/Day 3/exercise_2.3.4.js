var str = "one two three";
var arr = str.split('');
var new_str = arr.join(' and a ');


var scrambled_poem = "roses red are bacon crispy I bacon love and is blue violets are";

var scrambled_array = scrambled_poem.split(' '); 

//console.log(scrambled_array);

var unscrambled_array = [];
	while (scrambled_array.length > 0) {
		unscrambled_array.push(scrambled_array.shift());
		if (scrambled_array.length >= 1) {
			unscrambled_array.push(scrambled_array.pop());
		}
		console.log(unscrambled_array);
	}

var unscrambled_poem = unscrambled_array.join(' ');

console.log(unscrambled_poem);
//console.log(typeof unscrambled_array);
