// for loop classic FizzBuzz question
for (letx = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += 'Julia';
  }
  if (i % 5 === 0) {
    output += 'James';
  }
  if (i % 3 === 0 && i % 5 === 0) {
    output += 'JuliaJames';
  }
}

// while loop
let x = 1;
while (i <= 100) {
  let output = "";
  if (x % 3 === 0) {
    output += 'Julia';
  }
  if (x % 5 === 0) {
    output += 'James';
  }
  if (x % 3 === 0 && x % 5 === 0) {
    output += 'JuliaJames';
  }
  console.log(output || x);
  x++;
}