var obj = {
    greeting: 'howdy',
    direction: 'down',
    color: 'red',
    'spaces-and-dashes can be used': ' but need to have quotes'
};

for (var key in obj) {
    console.log(obj[key]); //why don't we need quotes around key??
    // what would happen if we logged obj.key instead? Why? Test it.
}



var demo_object = {
    one: 1,
    two: 2,
    three: 3
};
var one = "three";

demo_object['two']; // 2
demo_object[one]; // 3

var state_capitals = {
    California: 'Sacramento',
    Texas: 'Austin'
};

var place = 'California';

state_capitals['place']; // undefined
state_capitals.place;   //  undefined
state_capitals[place]; // "Sacramento"

state_capitals['California']; // 'Sacramento'
state_capitals.California;   // 'Sacramento'
// state_capitals[California]; //  reference error
//
// console.log(state_capitals['place'], state_capitals.place, state_capitals[place], state_capitals['California']);
// console.log(state_capitals.California);
