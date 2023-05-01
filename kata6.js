const whereCanIPark = function (spots, vehicle) {
	// Code here!
	let column = [];
	let row = [];
	for ( let y = 0; y < spots.length; y++) {
		for( let x = 0; x < spots[y].length; x++) {
			//console.log(spots[y][x] === spots[y][x].toUpperCase())
			const spot = spots[x][y];
			if ( vehicle === 'regular') {
				if (spot === 'R') {
					return [x, y];
				}
			} else if ( vehicle === 'small') {
				if(spot === 'S' || spot === 'R'){
					return [x, y]

				}
			} else if ( vehicle === 'motorcycle') {
				if( spot === spots[x][y].toUpperCase) {
					return [x, y]
				}
				if (spot === 'R' || spot === 'S' || spot === 'M' ) {
					return [x, y]
				}

			}

		}
	} return false
};



console.log(whereCanIPark(
	[
	  // COLUMNS ARE X
	  // 0    1    2    3    4    5
	  ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
	  ['s', 'M', 's', 'S', 'r', 'M'], // 1
	  ['s', 'M', 's', 'S', 'r', 'm'], // 2
	  ['S', 'r', 's', 'm', 'r', 'M'], // 3
	  ['S', 'r', 's', 'm', 'r', 'M'], // 4
	  ['S', 'r', 'S', 'M', 'M', 'S']  // 5
	],
	'regular'
  ));
  
  console.log(whereCanIPark(
	[
	  ['M', 'M', 'M', 'M'],
	  ['M', 's', 'M', 'M'],
	  ['M', 'M', 'M', 'M'],
	  ['M', 'M', 'r', 'M']
	],
	'small'
  ));
  
  console.log(whereCanIPark(
	[
	  ['s', 's', 's', 's', 's', 's'],
	  ['s', 'm', 's', 'S', 'r', 's'],
	  ['s', 'm', 's', 'S', 'r', 's'],
	  ['S', 'r', 's', 'm', 'r', 's'],
	  ['S', 'r', 's', 'm', 'R', 's'],
	  ['S', 'r', 'S', 'M', 'm', 'S']
	],
	'motorcycle'
  ))
  