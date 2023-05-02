const isEven = function(num) {
  return num % 2 === 0;
	
};

// const callIsEven = function (isEven) {
// 	if (isEven) {
// 		console.log(isEven +' Yay! the number is even!')
// 	}else {
// 		console.log('Yah! It isn\'t even number');
// 	}
// }
// callIsEven('asdf');

const tenIsEven = isEven(10);
const nineIsEven = isEven(9);
console.log(tenIsEven);
console.log(nineIsEven);
