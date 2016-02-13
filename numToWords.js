/*Gauven Roy Pascua 2013-22431 AB-1L*/

/*This function converts an integer (from 0 to 1 000 000) into words */
function numToWords (number) {
	
	//Check if number is with in the range
	if(number > -1 && number < 1000001){
		
		//create an output string
		var word = "";

		//check the case when zero is the input
		if(number === 0){
			return "zero ";
		}


		for (var i = 1000000; i > 0.9; i/=1000) {
			//the first three left most digit is stored in the variable convert
			var convert = parseInt(number/i);

			//flag for eleven to nineteen
			var tens = false;

			//flag for adding thousand
			var thousand = false;


			for (var j = 100; j > 0.9; j/=10) {
				//store the left most digit to parser
				var parser = parseInt(convert/j);

				//save the remaining digit to convert
				convert %= j;

				if(parser > 0){
					//flag of a thousand number
					thousand = true;
				}

				switch(parser){
					//for any case of one
					case 1:
						if(tens){
							word += "eleven ";
						}else if(j === 10){
							tens = true;
						}else{
							word += "one ";
						}
						break;

					//for any case of two
					case 2:
						if(tens){
							word += "tweleve ";
						}else if(j === 10){
							word += "twenty ";
						}else{
							word += "two ";
						}
						break;

					//for any case of three
					case 3:
						if(tens){
							word += "thirteen ";
						}else if(j === 10){
							word += "thirty ";
						}else{
							word += "three ";
						}
						break;

					//for any case of four
					case 4:
						if(tens){
							word += "fourteen ";
						}else if(j === 10){
							word += "fourty ";
						}else{
							word += "four ";
						}
						break;

					//for any case of five
					case 5:
						if(tens){
							word += "fifteen ";
						}else if(j === 10){
							word += "fifty ";
						}else{
							word += "five ";
						}
						break;

					//for any case of six
					case 6:
						if(tens){
							word += "sixteen ";
						}else if(j === 10){
							word += "sixty ";
						}else{
							word += "six ";
						}
						break;

					//for any case of seven
					case 7:
						if(tens){
							word += "seventeen ";
						}else if(j === 10){
							word += "seventy ";
						}else{
							word += "seven ";
						}
						break;

					//for any case of eight
					case 8:
						if(tens){
							word += "eighteen ";
						}else if(j === 10){
							word += "eighty ";
						}else{
							word += "eight ";
						}
						break;

					//for any case of nine
					case 9:
						if(tens){
							word += "nineteen ";
						}else if(j === 10){
							word += "ninety "
						}else{
							word += "nine ";
						}
						break;

					//for 10
					case 0:
						if(tens){
							word += "ten ";
						}
						break;
				}

				//for cases with a hundered
				if(j === 100 && parser > 0){
					word += "hundred ";
				}
			};

			// case for one million
			if(i === 1000000 && parseInt(number/i) === 1){
				word += "million "; 
			}else if(i === 1000 && thousand){
				//for cases with a thousand
				word += "thousand "
			}

			//save the remaining digit to number
			number %= i;
		};

			//return the word form
			return word;
	}
}