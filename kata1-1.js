//find two largest number in the array AND sum them(2) together

const sumLargestNumbers = function(data) {
  let largest = data[0];
  let secondLargest = data[0];

  data.forEach(element => {
    if (largest < element) {
      largest = element;
    }
  });
  data.splice(data.indexOf(largest), 1); //Remove the largerst number from the DATA

  data.forEach(element => {
    if (secondLargest < element) {
      secondLargest = element;
    }
  });

  //return largest + secondLargest; //sum largerst 2 value

};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
