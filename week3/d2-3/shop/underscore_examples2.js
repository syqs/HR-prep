var products = [
  {
    name: "Go Set a Watchman",
    category: "books",
    selling_points: ["Controversial", "Trippy", "Publicity Bonanza", "Released by rapacious publishers against the wishes of senile author"],
    price: 25,
    picture_url: "https://upload.wikimedia.org/wikipedia/en/4/4e/US_cover_of_Go_Set_a_Watchman.jpg"
  },
  {
    name: "Twilight",
    category: "books",
    selling_points: ["Doesn't make you think to hard", "Trippy", "Reinforces traditional gender-roles", "Doesn't make you think to hard"],
    price: 9.99,
    picture_url: "http://image.slidesharecdn.com/book-1-twilight-1231022548425199-1/95/book-1-twilight-1-728.jpg"
  },
  {
    name: "How to Win Friends & Influence People",
    category: "books",
    selling_points: ["Timeless practical advice", "Actually useful and relevant to your life"],
    price: 8,
    picture_url: "http://htmlgiant.com/wp-content/uploads/2013/11/HowtoWinFriendsandInfluencePeopleCover.jpg"
  },
  {
    name: "Dark Side of the Moon",
    category: "music",
    selling_points: ["Collector's Edition", "Trippy", "Good for late night existential crises"],
    price: 100,
    picture_url: "http://i.kinja-img.com/gawker-media/image/upload/s--9N1Ijk1t--/c_fit,fl_progressive,q_80,w_636/1940ob66cyu2ljpg.jpg"
  },
  {
    name: "Thriller",
    category: "music",
    selling_points: ["Classic MJ", "The 80's greatest contribution to human progress"],
    price: 19,
    picture_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0000/677/MI0000677650.jpg"
  },
  {
    name: "Ella & Luis",
    category: "music",
    selling_points: ["How could you not?", "Seriously, though..."],
    price: 110,
    picture_url: "http://ecx.images-amazon.com/images/I/51713fx1VdL._SY300_.jpg"
  }
]


$( document ).ready(function() {

	var somefunction = function(arr){

		var k = _.first(arr)
		$('#featured').append('<p>'+ k.category + '</p>')
		$('#featured').append('<p>'+ k.name + '</p>')

		var last = _.last(arr);
		$('#clearance').append('<p>'+ last.category + '</p>')
		$('#clearance').append('<p>'+ last.name + '</p>')


		//filter by value of object atribute
		var only = _.filter(arr, function(item){
			if(item.category === 'music'){
				return true;
			}else{
				return false;
			}
		})

		// append filltered items with _.each
		_.each(only,function(n){
			$('#featured').append(n.name + ' ')
		})

		// reject function -- opposite of filter
		var dont = _.reject(arr, function(item){
			if (item.price === 'books'){
				return true;
			}else{
				return false;
			};

		})

		//append rejected items with _.each
		_.each(dont,function(n){
			$('#featured').append(n.price + ' ')
		})
		var theBest = [];
		var test = [];
		var holder = [];
		var theNew = _.each(arr, function(n,m){
			holder[m] = n.selling_points
		})
		var someWon = _.each(holder, function(k,l){
			test[l] = holder[l]
		})
		_.each(someWon,function(o,p){
			_.each(someWon[p],function(z){
					theBest.push(z)
			})

		})
		_.union(test)

		console.log(test)
		console.log(theBest)
		console.log(_.uniq(theBest))
	}


somefunction(products)








});
