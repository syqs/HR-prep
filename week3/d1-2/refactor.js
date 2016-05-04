
var book1 = {
	id: "book1",
	title: "Fractured",
	author: "Karin Slaughter",
	category: "Adventure",
	price: 6.99,
	picture1: "http://d.gr-assets.com/books/1389140280l/2199587.jpg",
	selling_points: ["Many twists and turns"," manly"]
};

var book2 = {
	id: "book2",
	title: "The Hunger Gamer",
	author: "Susan collins",
	category: "Young adult",
	price: 12.99,
	picture2: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg",
	selling_points: ["Brilliantly plotted and perfectly paced","significant"]
};

var cd1 = {
	id: "cd1",
	title: "Views",
	author: "Drake",
	category: "Hip/Hop",
	price: 13.99,
	picture3: "http://cdn.pigeonsandplanes.com/wp-content/uploads/2016/02/drake-views.jpg",
	selling_points: ["New Album","not too bad"]
};

var cd2 = {
	id: "cd2",
	title: "The Very Best of Sheryl Crow",
	author: "Sheryl Crow",
	category: "country",
	price: 11.49,
	picture4: "https://upload.wikimedia.org/wikipedia/en/a/a3/Sheryl_Crow_-_The_Very_Best_of_Sheryl_Crow.png",
	selling_points: ["Beautifully done","flawless execution"]
};

// $( document ).ready(function() {
// 	$('#book1  .title').text(book1.title);
// 	$('#book1  .author').text(book1.author);
// 	$('#book1 .category').text(book1.category);
// 	$('#book1 .price').text(book1.price);
//     $('#book1  .picture_1 img').;
// 	$('#book1 .selling_points').text(book1.selling_points);

// });

$( document ).ready(function() {
	$('#book1 .title').append(book1.title);
	$('#book1 .author').text(book1.author);
	$('#book1 .category').text(book1.category);
	$('#book1 .price').text(book1.price);
  $('.picture1').append('<img src="'+book1.picture1+'">');
  for (var i=0;i<book1.selling_points.length;i++){
    	$('#book1 .selling_points').append('<p>'+book1.selling_points[i]+' </p>');
  }


//BOOK 2
	$('#book2 .title').text(book2.title);
	$('#book2 .author').text(book2.author);
	$('#book2 .category').text(book2.category);
	$('#book2 .price').text(book2.price);
    $('#book2 .picture2').append('<img src="'+book2.picture2+'">');
	for (var j=0;j<book2.selling_points.length;j++){
    	$('#book2 .selling_points').append('<p>' +  book2.selling_points[j]+' </p>');
    }
//CD 1
// 	$('#cd1 .title').text(cd1.title);
// 	$('#cd1 .author').text(cd1.author);
// 	$('#cd1 .category').text(cd1.category);
// 	$('#cd1 .price').text(cd1.price);
// 	//$('#cd1, .picture, img').attr('src', 'http://cdn.pigeonsandplanes.com/wp-content/uploads/2016/02/drake-views.jpg');
// 	$('#cd1 .selling_points').text(cd1.selling_points);
// //CD 2
// 	$('#cd2 .title').text(cd2.title);
// 	$('#cd2 .author').text(cd2.author);
// 	$('#cd2 .category').text(cd2.category);
// 	$('#cd2 .price').text(cd2.price);
// 	//$('#cd2, .picture, img').attr('src', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Sheryl_Crow_-_The_Very_Best_of_Sheryl_Crow.png');
// 	$('#cd2 .selling_points').text(cd2.selling_points);
});
