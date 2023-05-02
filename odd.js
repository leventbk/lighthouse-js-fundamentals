// this function return always true
function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

//alternative solution
function isOddAlt(numAlt) {
  return numAlt % 2 !== 0;
}


console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));
console.log(isOdd(4));
console.log('-------');
console.log(isOddAlt(1));
console.log(isOddAlt(2));
console.log(isOddAlt(3));
console.log(isOddAlt(4));