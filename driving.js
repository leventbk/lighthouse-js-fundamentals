const cars = [
  {
	  time: 1568329654807,
	  speed: 40,
  },
  {
	  time: 1568329821632,
	  speed: 42,
  },
  {
	  time: 1568331115463,
	  speed: 35
  }
];
const speed = 138;

const carPassing = function(cars, speed) {
  // Your code in here ...
  const carsArray = cars;
  const carPassing = {
	  time: Date.now(),
	  speed: speed,
  };
  carsArray.push(carPassing);
  return carsArray;
};

 
console.log(carPassing(cars, speed));