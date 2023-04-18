const range = function (start, end, step) {
	let newArr = []
  
  for (let i = start; i <= end; i = i + step) {
	if( start > end ||  step <= 0 || undefined) {
		break;
	} else {
		newArr.push(i);
	}
	}
	return newArr;
  }
  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));



// const range = function (start, end, step) {
// 	let newArr = [];
// 	newArr.push(start);
// 	while ( start < end ) {
// 		newArr.push(start += step);
// 	} return newArr;
// }
// range(0,10,2);
// range(10,30,5);
// range(-5,2,3);














// let i = 0;
// let newArr = [];
// for (let i = 0; i <= 8; i++){
// 	 newArr.push(i);
// }

// console.log(newArr);

//////////////////////////////



// const range = function (start, end, step) {
// 	let newArr = [];
// 	for (let i = start; start <= end; i+= step) {
// 		newArr.push(i);
		
// 	}
// }
// console.log(range(0,10,2));