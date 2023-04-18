

let num = 99;

while (num > 0) {
  let bottleText = num === 1 ? "bottle" : "bottles";
  console.log(`${num} ${bottleText} of juice on the wall! ${num} ${bottleText} of juice! Take one down, pass it around...\n`);
  num--;
  bottleText = num === 1 ? "bottle" : "bottles";
  console.log(`${num} ${bottleText} of juice on the wall! \n`);
}

console.log("No more num of juice on the wall!\n");
