function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(12));
}


emotions('Levent', function(num) {
    var sound = "";
	for ( let i=0; i <= num; i++){
        sound = sound + 'ha';
    }
    sound = sound + '!';
    return sound;
});
