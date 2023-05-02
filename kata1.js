//find two largest number in the array AND sum them(2) together

const sumLargestNumbers = function(data) {
  let largest = data[0];
  let secondLargest = data[0];

  for (let i = 0; i < data.length; i++) { //Find the largers number fron original array data and assign it to 'largest'
    if (largest < data[i]) {
      largest = data[i];
    }
  }
  data.splice(data.indexOf(largest), 1); //Remove the largerst number from the DATA
	
  for (let i = 0; i < data.length; i++) { //Find the largest number from updated DATA and assign to 'seconLargest'
    if (secondLargest < data[i]) {
      secondLargest = data[i];
    }
  }
  return largest + secondLargest; //sum largerst 2 value

};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));