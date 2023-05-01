const urlEncode = function(text) {
	// Put your solution here
	arrText = text.split('');
	for (let i = 0; i < arrText.length; i++) {
		if (arrText[i] === ' ') {
			arrText[i] = '%20';
		}	
	}return arrText.join('');
  };
  
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));