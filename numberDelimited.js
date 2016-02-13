/*Gauven Roy Pascua 2013-22431 AB-1L*/

function numberDelimited (num, delimiter, jumps) {
	//convert the input to a string
	var word = num.toString();

	//create a variable for the input
	var delimited = "";


	for (var i = word.length - 1; i >= 0 ; i--) {
		//copy each character to delimited
		delimited += word[word.length - 1 - i];
		
		//if the conditions are met place the delimiter
		if(i % jumps === 0 && i >= 1){
			delimited += delimiter;
		}
	};

	//show result
	return delimited;
}