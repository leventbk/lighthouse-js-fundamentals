const instructorWithLongestName = function(instructors) {
  // Put your solution here
  // const longestName = [{name:'', course:''}];

  // let name = "";
  // let course = "";

  let longestIndex = 0;

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[longestIndex].name.length < instructors[i].name.length) {
      longestIndex = i;
    }
  }
  return instructors[longestIndex];

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));