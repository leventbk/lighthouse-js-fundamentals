const north = [0,1];
const west = [-1,0];
const east = [0,1];

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 


const finalposition = function (moves) {
	let x = 0;
	let y = 0;

	for (let i = 0; i < moves.length; i++) {
		if (moves[i] == "north") {
			y++; 
		} else if (moves[i] == 'west') {
			x--;
		}else if (moves[i] == 'south') {
			y--;
		} else if (moves[i] == 'east') {
			x++;
		}
	}
	return [x,y]
}
console.log(finalposition(moves))