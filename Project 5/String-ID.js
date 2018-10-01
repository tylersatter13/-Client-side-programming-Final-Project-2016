function stringID()
{ 
    var numbersArray= [0,1,2,3,4,5,6,7,8,9];
    var lowerCaseArray= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCaseArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var finalArray=[];
	var length =document.getElementById("stringlength").value;
    
	for (var i=0; i< length; i++){
	switch(randomizedNumber(3,1)){
		case 1:
			finalArray[i]=numbersArray[randomizedNumber(8,0)];
			break;
		case 2:
			finalArray[i]=lowerCaseArray[randomizedNumber(25,0)];
			break;
		case 3:
			finalArray[i]=upperCaseArray[randomizedNumber(25,0)];
			break;
		}
	}
	var resultsString=finalArray.join("");//converts the array to a string without commas
 document.getElementById("text").innerHTML=resultsString;
	
}
function randomizedNumber(max, min){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}