const numberOfVowels = function (data) {
	const vowels = ['a','e','i','o','u'];
	const str = data.toLowerCase(); 
	
	let vowNum = 0;
	let arr = str.split(''); //making array by characters

	arr.forEach(compare);
	
	function compare(char) {
		for (let i = 0; i < vowels.length; i++) {
			if( char === vowels[i]){
				vowNum++;
			}
		}
	
	}
	return vowNum;
}
console.log(numberOfVowels("ORange"));
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));