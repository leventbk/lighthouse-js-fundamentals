let donuts = ["jelly donut", "chocolate donut", "glazed donut"];

function myAwesomeFunction(element, index, array) {
  console.log("Element: " + element);
  console.log("Index: " + index);
  console.log("Array: " + array);
  console.log('-------------');
}
donuts.forEach(myAwesomeFunction);