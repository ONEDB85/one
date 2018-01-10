//exercise 1


function e1(){
var n = Number(prompt("Enter a number", ""));
 
for  (var total = 0; n > 0; n--){
total = total + n;
}	

console.log(total);
alert(total);

}


//exercise 2  


	
	
function e2() { 
var n = prompt ("Do you want to play?", "yes or no");
var string = [];

if (n === "yes") {
		
	do{
	var y = string.push(prompt ("Enter a word",""));
	
	
	var z = prompt("Do you want to play again?","yes or no");
	
	}while(z === "yes")
		
	
	console.log(string.join(' '));
	alert (string.join(' '));
	}
}
 

//exercise 3   
 
function e3() { 
var n = prompt ("Would you like to print your name?", "yes or no");
var string = []



if (n === "yes") {
	
 alert('Hello. My name is Adam');
		
while(n === "yes"){
	var n = prompt ("Would you like to print your name?", "yes or no");	
	
	if ( n === "no"){break;
	}
	string.push("!");
	
	
	console.log('Hello. My name is Adam' + string.join(''));
	alert('Hello. My name is Adam' + string.join(''));
	}
}
	
}





//exercise 4


function e4() { 

var n = prompt ("What time of the day is it?", "morning, noon, or evening");


	if(n === "morning"){
		
		console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
		alert("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
		
	}else if(n === "noon"){
		
		console.log("Since it is noon, you should be eating lunch. We suggest a salad.");
		alert("Since it is noon, you should be eating lunch. We suggest a salad.");
		
	}else if(n === "evening"){
		
		console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
		alert("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
		
	}	

}














