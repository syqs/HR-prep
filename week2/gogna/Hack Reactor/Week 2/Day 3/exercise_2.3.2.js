var bucket_list = [];
bucket_list[0] = "travel";
bucket_list[1] = "build car";
bucket_list.push("race cars");
bucket_list.push("Japan");
bucket_list.unshift("Get into HR")
bucket_list.unshift("Learn about coding")
// console.log(bucket_list);
var dying_wish = bucket_list.pop();
var do_it_now = bucket_list.shift();
console.log(bucket_list.length);
