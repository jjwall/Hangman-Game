window.onload = function() {

	var guessDiv = document.getElementById("guessed");

	var currentWordDiv = document.getElementById("current_word");

	var wrongDiv = document.getElementById("wrong");

	var winDiv = document.getElementById("win");

	var guessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var wordArray = ["cat", "mouse", "giraffe", "opossum", "salamander"];

	var blankArray = [];

	var x = 0;

	var y;

	var wordStore;

	var guessNum;

	var winDisplay;

	var wrongDisplay;

	var guessDisplay;

	var currentWordDisplay;

	var totalWins = 0;

	var winCounter = 3;

	var wrongCounter = 10;

	wordStore = wordArray[Math.floor((Math.random() * 5) + 0)];

    var wordFunc = {
    	startFunc: function () {
    		winDisplay = document.createTextNode(totalWins);
    		winDiv.appendChild(winDisplay);
    		wrongDisplay = document.createTextNode(wrongCounter);
			wrongDiv.appendChild(wrongDisplay);
    	},

    	wordOperator: function () {
			for (i = 0; i < wordArray[y].length; i++) {
			currentWordDisplay = document.createTextNode(" _ ");
			currentWordDiv.appendChild(currentWordDisplay);
			}
    	},

    	catWord: function(){
    		if (wordStore === "cat") {
    			guessFunc.catStore = true;
    			y = 0;
    			winCounter = 3;
    			this.wordOperator();
			}
    	},

    	mouseWord: function() {
    		if (wordStore === "mouse") {
    			guessFunc.mouseStore = true;
    			y = 1;
    			winCounter = 5;
    			this.wordOperator();
  			
			}
    	},

    	giraffeWord: function() {
    		if (wordStore === "giraffe") {
    			guessFunc.giraffeStore = true;
    			y = 2;
    			winCounter = 6;
    			this.wordOperator();
    		}
    	},

    	opossumWord: function() {
    		if (wordStore === "opossum") {
    			guessFunc.opossumStore = true;
    			y = 3;
    			winCounter = 5;
    			this.wordOperator();
    		}

    	},

    	salamanderWord: function() {
    		if (wordStore === "salamander") {
    			guessFunc.salamanderStore = true;
    			y = 4;
    			winCounter = 8;
    			this.wordOperator();
    		}
   		},
	}

	var guessFunc = {

		catStore: false,

		mouseStore: false,

		giraffeStore: false,

		opossumStore: false,

		salamanderStore: false,

		aStore: false,

		bStore: false,

		cStore: false,

		dStore: false,

		eStore: false,

		fStore: false,

		gStore: false,

		hStore: false,

		iStore: false,

		jStore: false,

		kStore: false,

		lStore: false,

		mStore: false,

		nStore: false,

		oStore: false,

		pStore: false,

		qStore: false,

		rStore: false,

		sStore: false,

		tStore: false,

		uStore: false,

		vStore: false,

		wStore: false,

		xStore: false,

		yStore: false,

		zStore: false,

		variableReset: function () {
			x = 0;

			blankArray = [];

			wrongCounter = 10;

			this.catStore = false;

			this.mouseStore = false;

			this.giraffeStore = false;

			this.opossumStore = false;

			this.salamanderStore = false;

			this.aStore = false;

			this.bStore = false;

			this.cStore = false;

			this.dStore = false;

			this.eStore = false;

			this.fStore = false;

			this.gStore = false;

			this.hStore = false;

			this.iStore = false;

			this.jStore = false;

			this.kStore = false;

			this.lStore = false;

			this.mStore = false;

			this.nStore = false;

			this.oStore = false;

			this.pStore = false;

			this.qStore = false;

			this.rStore = false;

			this.sStore = false;

			this.tStore = false;

			this.uStore = false;

			this.vStore = false;

			this.wStore = false;

			this.xStore = false;

			this.yStore = false;

			this.zStore = false;

		},

		astore: function () {
			this.aStore = true;
		},

		bstore: function () {
			this.bStore = true;
		},

		cstore: function () {
			this.cStore = true;
		},

		dstore: function () {
			this.dStore = true;
		},

		estore: function () {
			this.eStore = true;
		},

		fstore: function () {
			this.fStore = true;
		},

		gstore: function () {
			this.gStore = true;
		},

		hstore: function () {
			this.hStore = true;
		},

		istore: function () {
			this.iStore = true;
		},

		jstore: function () {
			this.jStore = true;
		},

		kstore: function () {
			this.kStore = true;
		},

		lstore: function () {
			this.lStore = true;
		},

		mstore: function () {
			this.mStore = true;
		},

		nstore: function () {
			this.nStore = true;
		},

		ostore: function () {
			this.oStore = true;
		},

		pstore: function () {
			this.pStore = true;
		},

		qstore: function () {
			this.qStore = true;
		},

		rstore: function () {
			this.rStore = true;
		},

		sstore: function () {
			this.sStore = true;
		},

		tstore: function () {
			this.tStore = true;
		},

		ustore: function () {
			this.uStore = true;
		},

		vstore: function () {
			this.vStore = true;
		},

		wstore: function () {
			this.wStore = true;
		},

		xstore: function () {
			this.xStore = true;
		},

		ystore: function () {
			this.yStore = true;
		},

		zstore: function () {
			this.zStore = true;
		},

		wrongFunc: function() {
			wrongDiv.removeChild(wrongDiv.firstChild);
			wrongCounter--;
			wrongDisplay = document.createTextNode(wrongCounter);
			wrongDiv.appendChild(wrongDisplay);
			if (wrongCounter === 0) {
			alert("You lose!")
			location.reload();
			}
		},

		displayGuess: function() {
			guessDisplay = document.createTextNode(guessArray[guessNum]);
			guessDiv.appendChild(guessDisplay);
			this.wrongFunc();
		},

		displayCorrect: function() {
			/* where the magic happens */
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
		winCounter--;
		this.winBuffer();
		},

		winBuffer: function() {
			setTimeout(function(){
			if (winCounter === 0) {
			
				winDiv.removeChild(winDiv.firstChild);

				totalWins++;

				winDisplay = document.createTextNode(totalWins);

				winDiv.appendChild(winDisplay);

				/*alert("You win!");*/

				document.getElementById("current_word").innerHTML = "";

				document.getElementById("guessed").innerHTML = "";

				wordStore = wordArray[Math.floor((Math.random() * 5) + 0)];

				guessFunc.variableReset();

				document.getElementById("wrong").innerHTML = "";
			
				wrongDisplay = document.createTextNode(wrongCounter);

				wrongDiv.appendChild(wrongDisplay);

				wordFunc.catWord();

				wordFunc.mouseWord();

				wordFunc.giraffeWord();

				wordFunc.opossumWord();

				wordFunc.salamanderWord();
				}
			}, 500);
		},

		prompt: function() {
			alert("You already guessed that!");
		},

		a: function() {
			if (this.aStore){
				this.prompt();
			}
			else if (this.catStore){
				guessNum = 0;
				blankArray.push("a");
				this.displayCorrect();
				x = 0;
				this.astore();
			}
			else if (this.giraffeStore){
				guessNum = 0;
				blankArray.push("a");
				this.displayCorrect();
				x = 0;
				this.astore();
			}
			else if (this.salamanderStore){
				guessNum = 0;
				blankArray.push("a");
				this.displayCorrect();
				x = 0;
				this.astore();
			}
			else {
				guessNum = 0;
				this.displayGuess();
				this.astore();
			}

		},

		b: function() {
			if (this.bStore){
				this.prompt();
			}
			else {
				guessNum = 1;
				this.displayGuess();
				this.bstore();
			}

		},

		c: function() {
			if (this.cStore){
				this.prompt();
			}
			else if (this.catStore){
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

		d: function() {
			if (this.dStore){
				this.prompt();
			}
			else if (this.salamanderStore){
				guessNum = 3;
				blankArray.push("d");
				this.displayCorrect();
				x = 0;
				this.dstore();
			}
			else {
				guessNum = 3;
				this.displayGuess();
				this.dstore();
			}

		},

		e: function() {
			if (this.eStore){
				this.prompt();
			}
			else if (this.mouseStore){
				guessNum = 4;
				blankArray.push("e");
				this.displayCorrect();
				x = 0;
				this.estore();
			}
			else if (this.giraffeStore){
				guessNum = 4;
				blankArray.push("e");
				this.displayCorrect();
				x = 0;
				this.estore();
			}
			else if (this.salamanderStore){
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

		},

		f: function() {
			if (this.fStore){
				this.prompt();
			}
			else if (this.giraffeStore){
				guessNum = 5;
				blankArray.push("f");
				this.displayCorrect();
				x = 0;
				this.fstore();
			}
			else {
				guessNum = 5;
				this.displayGuess();
				this.fstore();
			}

		},

		g: function() {
			if (this.gStore){
				this.prompt();
			}
			else if (this.giraffeStore){
				guessNum = 6;
				blankArray.push("g");
				this.displayCorrect();
				x = 0;
				this.gstore();
			}
			else {
				guessNum = 6;
				this.displayGuess();
				this.gstore();
			}

		},

		h: function() {
			if (this.hStore){
				this.prompt();
			}
			else {
				guessNum = 7;
				this.displayGuess();
				this.hstore();
			}

		},

		i: function() {
			if (this.iStore){
				this.prompt();
			}
			else if (this.giraffeStore){
				guessNum = 8;
				blankArray.push("i");
				this.displayCorrect();
				x = 0;
				this.istore();
			}
			else {
				guessNum = 8;
				this.displayGuess();
				this.istore();
			}

		},

		j: function() {
			if (this.jStore){
				this.prompt();
			}
			else {
				guessNum = 9;
				this.displayGuess();
				this.jstore();
			}

		},

		k: function() {
			if (this.kStore){
				this.prompt();
			}
			else {
				guessNum = 10;
				this.displayGuess();
				this.kstore();
			}

		},

		l: function() {
			if (this.lStore){
				this.prompt();
			}
			else if (this.salamanderStore){
				guessNum = 11;
				blankArray.push("l");
				this.displayCorrect();
				x = 0;
				this.lstore();
			}
			else {
				guessNum = 11;
				this.displayGuess();
				this.lstore();
			}

		},

		m: function() {
			if (this.mStore){
				this.prompt();
			}
			else if (this.mouseStore){
				guessNum = 12;
				blankArray.push("m");
				this.displayCorrect();
				x = 0;
				this.mstore();
			}
			else if (this.opossumStore){
				guessNum = 12;
				blankArray.push("m");
				this.displayCorrect();
				x = 0;
				this.mstore();
			}
			else if (this.salamanderStore){
				guessNum = 12;
				blankArray.push("m");
				this.displayCorrect();
				x = 0;
				this.mstore();
			}
			else {
				guessNum = 12;
				this.displayGuess();
				this.mstore();
			}

		},

		n: function() {
			if (this.nStore){
				this.prompt();
			}
			else if (this.salamanderStore){
				guessNum = 13;
				blankArray.push("n");
				this.displayCorrect();
				x = 0;
				this.nstore();
			}
			else {
				guessNum = 13;
				this.displayGuess();
				this.nstore();
			}

		},

		o: function() {
			if (this.oStore){
				this.prompt();
			}
			else if (this.mouseStore){
				guessNum = 14;
				blankArray.push("o");
				this.displayCorrect();
				x = 0;
				this.ostore();
			}
			else if (this.opossumStore){
				guessNum = 14;
				blankArray.push("o");
				this.displayCorrect();
				x = 0;
				this.ostore();
			}
			else {
				guessNum = 14;
				this.displayGuess();
				this.ostore();
			}

		},

		p: function() {
			if (this.pStore){
				this.prompt();
			}
			else if (this.opossumStore){
				guessNum = 15;
				blankArray.push("p");
				this.displayCorrect();
				x = 0;
				this.pstore();
			}
			else {
				guessNum = 15;
				this.displayGuess();
				this.pstore();
			}

		},

		q: function() {
			if (this.qStore){
				this.prompt();
			}
			else {
				guessNum = 16;
				this.displayGuess();
				this.qstore();
			}

		},

		r: function() {
			if (this.rStore){
				this.prompt();
			}
			else if (this.giraffeStore){
				guessNum = 17;
				blankArray.push("r");
				this.displayCorrect();
				x = 0;
				this.rstore();
			}
			else if (this.salamanderStore){
				guessNum = 17;
				blankArray.push("r");
				this.displayCorrect();
				x = 0;
				this.rstore();
			}
			else {
				guessNum = 17;
				this.displayGuess();
				this.rstore();
			}

		},

		s: function() {
			if (this.sStore){
				this.prompt();
			}
			else if (this.mouseStore){
				guessNum = 18;
				blankArray.push("s");
				this.displayCorrect();
				x = 0;
				this.sstore();
			}
			else if (this.opossumStore){
				guessNum = 18;
				blankArray.push("s");
				this.displayCorrect();
				x = 0;
				this.sstore();
			}
			else if (this.salamanderStore){
				guessNum = 18;
				blankArray.push("s");
				this.displayCorrect();
				x = 0;
				this.sstore();
			}
			else {
				guessNum = 18;
				this.displayGuess();
				this.sstore();
			}

		},

		t: function() {
			if (this.tStore){
				this.prompt();
			}
			else if (this.catStore){
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

		u: function() {
			if (this.uStore){
				this.prompt();
			}
			else if (this.mouseStore){
				guessNum = 20;
				blankArray.push("u");
				this.displayCorrect();
				x = 0;
				this.ustore();
			}
			else if (this.opossumStore){
				guessNum = 20;
				blankArray.push("u");
				this.displayCorrect();
				x = 0;
				this.ustore();
			}
			else {
				guessNum = 20;
				this.displayGuess();
				this.ustore();
			} 
		},

		v: function() {
			if (this.vStore){
				this.prompt();
			}
			else {
				guessNum = 21;
				this.displayGuess();
				this.vstore();
			} 
		},

		w: function() {
			if (this.wStore){
				this.prompt();
			}
			else {
				guessNum = 22;
				this.displayGuess();
				this.wstore();
			} 
		},

		x: function() {
			if (this.xStore){
				this.prompt();
			}
			else {
				guessNum = 23;
				this.displayGuess();
				this.xstore();
			} 
		},

		y: function() {
			if (this.yStore){
				this.prompt();
			}
			else {
				guessNum = 24;
				this.displayGuess();
				this.ystore();
			} 
		},

		z: function() {
			if (this.zStore){
				this.prompt();
			}
			else {
				guessNum = 25;
				this.displayGuess();
				this.zstore();
			} 
		}
}
	/*window.setTimeout(guessFunc.winBuffer(), 10000);*/
	wordFunc.startFunc();
	wordFunc.catWord();
	wordFunc.mouseWord();
	wordFunc.giraffeWord();
	wordFunc.opossumWord();
	wordFunc.salamanderWord();
	

	document.addEventListener('keydown', function(event) { 
			var akey = event.keyCode;
			if (65 === akey){
				guessFunc.a();
			}
			var bkey = event.keyCode;
			if (66 === bkey){
				guessFunc.b();
			}
			var ckey = event.keyCode;
			if (67 === ckey){
				guessFunc.c();
			}
			var dkey = event.keyCode;
			if (68 === dkey){
				guessFunc.d();
			}
			var ekey = event.keyCode;
			if (69 === ekey){
				guessFunc.e();
			}
			var fkey = event.keyCode;
			if (70 === fkey){
				guessFunc.f();
			}
			var gkey = event.keyCode;
			if (71 === gkey){
				guessFunc.g();
			}
			var hkey = event.keyCode;
			if (72 === hkey){
				guessFunc.h();
			}
			var ikey = event.keyCode;
			if (73 === ikey){
				guessFunc.i();
			}
			var jkey = event.keyCode;
			if (74 === jkey){
				guessFunc.j();
			}
			var kkey = event.keyCode;
			if (75 === kkey){
				guessFunc.k();
			}
			var lkey = event.keyCode;
			if (76 === lkey){
				guessFunc.l();
			}
			var mkey = event.keyCode;
			if (77 === mkey){
				guessFunc.m();
			}
			var nkey = event.keyCode;
			if (78 === nkey){
				guessFunc.n();
			}
			var okey = event.keyCode;
			if (79 === okey){
				guessFunc.o();
			}
			var pkey = event.keyCode;
			if (80 === pkey){
				guessFunc.p();
			}
			var qkey = event.keyCode;
			if (81 === qkey){
				guessFunc.q();
			}
			var rkey = event.keyCode;
			if (82 === rkey){
				guessFunc.r();
			}
			var skey = event.keyCode;
			if (83 === skey){
				guessFunc.s();
			}
			var tkey = event.keyCode;
			if (84 === tkey){
				guessFunc.t();
			}
			var ukey = event.keyCode;
			if (85 === ukey){
				guessFunc.u();
			}
			var vkey = event.keyCode;
			if (86 === vkey){
				guessFunc.v();
			}
			var wkey = event.keyCode;
			if (87 === wkey){
				guessFunc.w();
			}
			var xkey = event.keyCode;
			if (88 === xkey){
				guessFunc.x();
			}
			var ykey = event.keyCode;
			if (89 === ykey){
				guessFunc.y();
			}
			var zkey = event.keyCode;
			if (90 === zkey){
				guessFunc.z();
			}
		});
}
