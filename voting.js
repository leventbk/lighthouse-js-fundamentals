const stations = [
	['Big Bear Donair', 10, 'restaurant'],
	['Bright Lights Elementary', 50, 'school'],
	['Moose Mountain Community Centre', 45, 'community centre'],
	['Mels', 110, 'restaurant'],
	['Waterloo Elementary', 15, 'school'],
	['Alpine Community Centre', 145, 'community centre']
  ];
//In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

function chooseStations() {
	let goodStations = [];
	for (const station of stations ) {
		if(station[1] >= 20){ //if station's first index more than 19 pass to the next condition
			if(station[2] =='school' || station[2] =='community centre'){ //if station's 2nd index is equal to school or community center, add their zero index(location name) to our good station variable
				goodStations.push(station[0])
				
			}
			
		}	
		
	}  return goodStations
}
console.log(chooseStations())
chooseStations()
