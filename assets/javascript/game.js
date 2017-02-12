window.onload = function() {

	var guessDiv = document.getElementById("guessed");

	var currentWordDiv = document.getElementById("current_word");

	var wrongDiv = document.getElementById("wrong");

	/*test code below

	var mydiv = document.getElementById("test");

	var testdisplay = document.createTextNode("poop");

    mydiv.appendChild(testdisplay);

	mydiv.removeChild(mydiv.firstChild);

	mydiv.appendChild(testdisplay);

	test code above*/

	var guessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var wordArray = ["cat", "mouse", "dog"];

	var catLetters = " _ _ _ ";

	var underScores = " _ ";

	var blankArray = [];

	var x = 0;

	var y;

	var wordStore;

	var guessNum;

	var wrongDisplay;

	var guessDisplay;

	var currentWordDisplay;

	var wrongCounter = 10;

	var catStore = false;

	var mouseStore = false;

	var aStore = false;

	var cStore = false;

	var eStore = false;

	var tStore = false;

	wordStore = wordArray[Math.floor((Math.random() * 3) + 0)];
    console.log(wordStore);

    var wordFunc = {
    	catWord: function(){
    		if (wordStore === "cat") {
    			catStore = true;
    			y = 0;
    			/*currentWordDisplay = document.createTextNode(catLetters);
    			currentWordDiv.appendChild(currentWordDisplay);*/
    			wrongDisplay = document.createTextNode(wrongCounter);
				wrongDiv.appendChild(wrongDisplay);
				for (i = 0; i < wordArray[y].length; i++) {
				currentWordDisplay = document.createTextNode(" _ ");
				currentWordDiv.appendChild(currentWordDisplay);
				}
    		}
    	},
    	mouseWord: function() {
    		if (wordStore === "mouse") {
    			mouseStore = true;
    			y = 1;
    			wrongDisplay = document.createTextNode(wrongCounter);
				wrongDiv.appendChild(wrongDisplay);
				for (i = 0; i < wordArray[y].length; i++) {
				currentWordDisplay = document.createTextNode(" _ ");
				currentWordDiv.appendChild(currentWordDisplay);
				}
    		}

    	}

    }

    /*wordFunc.catWord();*/

	var guessFunc = {

		astore: function () {
			aStore = true;
		},

		cstore: function () {
			cStore = true;
		},

		estore: function () {
			eStore = true;
		},

		tstore: function () {
			tStore = true;
		},

		wrongFunc: function() {
			wrongDiv.removeChild(wrongDiv.firstChild);
			wrongCounter--;
			wrongDisplay = document.createTextNode(wrongCounter);
			wrongDiv.appendChild(wrongDisplay);
			if (wrongCounter == 0) {
			alert("You lose!");
			}
		},

		displayGuess: function() {
			guessDisplay = document.createTextNode(guessArray[guessNum]);
			guessDiv.appendChild(guessDisplay);
			this.wrongFunc();
		},

		replace: function() {
			currentWordDiv.removeChild(currentWordDiv.firstChild);
			currentWordDisplay = document.createTextNode(catLetters);
			currentWordDiv.appendChild(currentWordDisplay);
		},

		displayCorrect: function() {
			for (i = 0; i < wordArray[y].length; i++) {
			if (blankArray.includes(wordArray[y].charAt(x))) {
				currentWordDiv.removeChild(currentWordDiv.firstChild);
				currentWordDisplay = document.createTextNode(wordArray[y].charAt(x));
				currentWordDiv.appendChild(currentWordDisplay);
			}
			else {
				currentWordDiv.removeChild(currentWordDiv.firstChild);
				currentWordDisplay = document.createTextNode(" _ ");
				currentWordDiv.appendChild(currentWordDisplay);
			}
			x++;
		}


			/*if (blankArray.includes("c")) {
				catLetters = " c _ _ ";
				this.replace();
				wordArray[0].charAt(0);
			}
			if (blankArray.includes("a")) {
				catLetters = " _ a _ ";
				this.replace();
			}
			if (blankArray.includes("t")) {
				catLetters = " _ _ t ";
				this.replace();
			}
			if (blankArray.includes("c") && blankArray.includes("t")) {
				catLetters = " c _ t ";
				this.replace();
			}
			if (blankArray.includes("c") && blankArray.includes("a")) {
				catLetters = " c a _ ";
				this.replace();
			}
			if (blankArray.includes("a") && blankArray.includes("t")) {
				catLetters = " _ a t ";
				this.replace();
			}
			if (blankArray.includes("c") && blankArray.includes("a") && blankArray.includes("t")) {
				catLetters = " c a t ";
				this.replace();
			}*/
			/*better code abobe*/

			/* worse code below */
			/*if (guessNum === 2 && aStore === false && tStore === false) {
				catLetters = " c _ _ ";
    			this.replace();
			}
			if (guessNum === 2 && aStore === true && tStore === false) {
				catLetters = " c a _ ";
				this.replace();
			}
			if (guessNum === 2 && aStore === false && tStore === true) {
				catLetters = " c _ t ";
    			this.replace();
			}
			if (guessNum === 2 && aStore === true && tStore === true) {
				catLetters = " c a t ";
				this.replace();
			}
			if (guessNum === 0 && cStore === false && tStore === false) {
				catLetters = " _ a _ ";
    			this.replace();
			}
			if (guessNum === 0 && cStore === true && tStore === false) {
				catLetters = " c a _ ";
    			this.replace();
			}
			if (guessNum === 0 && cStore === false && tStore === true) {
				catLetters = " _ a t ";
    			this.replace();
			}
			if (guessNum === 0 && cStore === true && tStore === true) {
				catLetters = " c a t ";
    			this.replace();
			}
			if (guessNum === 19 && cStore === false && aStore === false) {
				catLetters = " _ _ t ";
				this.replace();
			}
			if (guessNum === 19 && cStore === true && aStore === false) {
				catLetters = " c _ t ";
				this.replace();
			}
			if (guessNum === 19 && cStore === false && aStore === true) {
				catLetters = " _ a t ";
				this.replace();
			}
			if (guessNum === 19 && cStore === true && aStore === true) {
				catLetters = " c a t ";
				this.replace();
			}*/
		},

		prompt: function() {
			alert("You already guessed that!");
		},

		a: function() {
			if (aStore){
				this.prompt();
			}
			else if (catStore){
				guessNum = 0;
				blankArray.push("a");
				console.log(blankArray);
				this.displayCorrect();
				x = 0;
				this.astore();
			}
			else {
				guessNum = 0;
				this.displayGuess();
				this.astore();
			}
			/*displayCorrect() Function will most likely need to be changed to catCorrect,
			then we will add else if statements for the other words, for example
			else if (mouseStore){
				guessNum = #;
				this.mouseCorrect();
				this.#store; */
		},

		c: function() {
			if (cStore){
				this.prompt();
			}
			else if (catStore){
				guessNum = 2;
				blankArray.push("c");
				this.displayCorrect();
				x = 0;
				this.cstore();
			}
			else {
				guessNum = 2;
				this.displayGuess();
				this.cstore();
			} 
		},

		t: function() {
			if (tStore){
				this.prompt();
			}
			else if (catStore){
				guessNum = 19;
				blankArray.push("t");
				this.displayCorrect();
				x = 0;
				this.tstore();
			}
			else {
				guessNum = 19;
				this.displayGuess();
				this.tstore();
			} 
		},

		e: function() {
			if (eStore){
				this.prompt();
			}
			else if (mouseStore){
				guessNum = 4;
				blankArray.push("e");
				this.displayCorrect();
				x = 0;
				this.estore();
			}
			else {
				guessNum = 4;
				this.displayGuess();
				this.estore();
		}
	}
}
	wordFunc.catWord();
	wordFunc.mouseWord();

    /*guessFunc.displayCorrect();*/

	document.addEventListener('keydown', function(event) { 
			var akey = event.keyCode
			if (65 === akey){
				guessFunc.a();
			}
			var ckey = event.keyCode
			if (67 === ckey){
				guessFunc.c();
			}
			var ekey = event.keyCode
			if (69 === ekey){
				guessFunc.e();
			}
			var ekey = event.keyCode
			if (84 === ekey){
				guessFunc.t();
			}
		});
}
