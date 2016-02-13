/*Gauven Roy Pascua 2013-22431 AB-1L*/

function wordsToNum (word) {
	
	if(word.trim() === "one million"){
		return 1000000;
	}

	if(word.trim() === "zero"){
		return 0;
	}

	var num = 0;

	var number = 0;

	var parser = word.trim().split(" ");

	for (var i = 0; i < parser.length; i++) {

		switch(parser[i].trim()){
			case "one":
				number += 1;
				break;
			case "two":
				number += 2;
				break;
			case "three":
				number += 3;
				break;
			case "four":
				number += 4;
				break;
			case "five":
				number += 5;
				break;
			case "six":
				number += 6;
				break;
			case "seven":
				number += 7;
				break;
			case "eight":
				number += 8;
				break;
			case "nine":
				number += 9;
				break;
			case "ten":
				number += 10;
				break;
			case "eleven":
				number += 11;
				break;
			case "twelve":
				number += 12;
				break;
			case "thirteen":
				number += 13;
				break;
			case "fourteen":
				number += 14;
				break;
			case "fifthteen":
				number += 15;
				break;
			case "sixteen":
				number += 16;
				break;
			case "seventeen":
				number += 17;
				break;
			case "eighteen":
				number += 18;
				break;
			case "nineteen":
				number += 19;
				break;
			case "twenty":
				number += 20;
				break;
			case "thirty":
				number += 30;
				break;
			case "fourty":
				number += 40;
				break;
			case "fifty":
				number += 50;
				break;
			case "sixty":
				number += 60;
				break;
			case "seventy":
				number += 70;
				break;
			case "eighty":
				number += 80;
				break;
			case "ninety":
				number += 90;
				break;
			case "hundred":
				number *= 100;
				break;
			case "thousand":
				num += number * 1000;
				number = 0;
				break;
		}
	};

	return num + number;
}
