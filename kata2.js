const conditionalSum = function(values, condition) {
  if (!values.length) { // if values doesn't have any item return 0
    return 0;
  }

  let nums = {
    even: [],
    odd: []
  };

  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 == 0) {
      nums.even.push(values[i]);
    } else {
      nums.odd.push(values[i]);
    }
  }

  return nums[condition].reduce((a,b) => a + b);
};
  
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log('==========');
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log('==========');
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log('==========');
console.log(conditionalSum([], "odd"));