function nonsense(string) {
	var blab = function(){
 	 alert(string);
	}; 

	return blab;
}

var blabLater = nonsense('This comes later');

var blabAgainLater= nonsense('This comes even later');


var lastNameTrier = function(firstName){
  //does stuff
var name = firstName;


  	
   var innerFunction = function(lastName) {
       //does stuff
       console.log(name.concat(' ' + lastName));
   	 
       

   };
   //maybe returns something here
   return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'
firstNameFarmer('Jane'); //logs 'Farmer Jane'
firstNameFarmer('Lynne'); //logs 'Farmer Lynne'