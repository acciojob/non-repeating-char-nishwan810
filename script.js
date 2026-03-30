const input = prompt("Enter a string ");
alert(firstNonRepeatedChar(input)); 


function firstNonRepeatedChar(str) {
	
for (let i = 0; i < str.length; i++) {
	let count =0;
	
	for(let j=0; j<str.length; j++){
		if(str.charAt(j)===str.charAt(i)){
			count++;
		}
	}
	

	if(count==1){
		return str.charAt(i);
	}
	
}
	return null;
	
}

