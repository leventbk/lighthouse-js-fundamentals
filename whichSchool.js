const whichSchool  = function (age) {
	if ( age < 13 && age > 6 ) {
		return ('Elementary School');
		console.log(`Elementary ${age}`);

	} else if ( age <= 13 && age <= 18 ) {
		return ('Secondary School');
		console.log(`secondary ${age}`);
	} else {
		return ('Lighthouse Lab');
		console.log(`lighthouse`);
	}
  }
  