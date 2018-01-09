//exercise 1


function e1(){
var n = Number(prompt("Enter a number", ""));
 
for  (var total = 0; n > 0; n--){
total = total + n;
}	

alert(total);

}


//exercise 2  


	
	
function e2() { 
var n = prompt ("Do you want to play?", "type yes or no");
var string = [];

if (n === "yes") {
		
	do{
	var y = string.push(prompt ("Enter a word",""));
	
	
	var z = prompt("Do you want to play again?","");
	
	}while(z === "yes")
		
	alert (string.join(' '));
	}
}
 

//exercise 3   
 
function e3() { 
var n = prompt ("Would you like to print your name?", "type yes or no");
var string = []



if (n === "yes") {
	
 alert('Hello. My name is Adam');
		
while(n === "yes"){
	var n = prompt ("Would you like to print your name?", "type yes or no");	
	
	if ( n === "no"){break;
	}
	string.push("!");
	alert('Hello. My name is Adam' + string.join(''));
	}
}
	
}





//exercise 4


function e4() { 

var n = prompt ("What time of the day is it?", "morning, noon, or evening");


	if(n === "morning"){
		
		alert("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
		
	}else if(n === "noon"){
		
		alert("Since it is noon, you should be eating lunch. We suggest a salad.");
		
	}else if(n === "evening"){
		
		alert("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
		
	}	

}














