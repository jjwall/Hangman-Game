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

	var catStore = false;

	var mouseStore = false;

	var giraffeStore = false;

	var opossumStore = false;

	var salamanderStore = false;

	var aStore = false;

	var bStore = false;

	var cStore = false;

	var dStore = false;

	var eStore = false;

	var fStore = false;

	var gStore = false;

	var hStore = false;

	var iStore = false;

	var jStore = false;

	var kStore = false;

	var lStore = false;

	var mStore = false;

	var nStore = false;

	var oStore = false;

	var pStore = false;

	var qStore = false;

	var rStore = false;

	var sStore = false;

	var tStore = false;

	var uStore = false;

	var vStore = false;

	var wStore = false;

	var xStore = false;

	var yStore = false;

	var zStore = false;

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
    			catStore = true;
    			y = 0;
    			winCounter = 3;
    			this.wordOperator();
			}
    	},

    	mouseWord: function() {
    		if (wordStore === "mouse") {
    			mouseStore = true;
    			y = 1;
    			winCounter = 5;
    			this.wordOperator();
  			
			}
    	},

    	giraffeWord: function() {
    		if (wordStore === "giraffe") {
    			giraffeStore = true;
    			y = 2;
    			winCounter = 6;
    			this.wordOperator();
    		}
    	},

    	opossumWord: function() {
    		if (wordStore === "opossum") {
    			opossumStore = true;
    			y = 3;
    			winCounter = 5;
    			this.wordOperator();
    		}

    	},

    	salamanderWord: function() {
    		if (wordStore === "salamander") {
    			salamanderStore = true;
    			y = 4;
    			winCounter = 8;
    			this.wordOperator();
    		}
   		},
	}

	var guessFunc = {

		astore: function () {
			aStore = true;
		},

		bstore: function () {
			bStore = true;
		},

		cstore: function () {
			cStore = true;
		},

		dstore: function () {
			dStore = true;
		},

		estore: function () {
			eStore = true;
		},

		fstore: function () {
			fStore = true;
		},

		gstore: function () {
			gStore = true;
		},

		hstore: function () {
			hStore = true;
		},

		istore: function () {
			iStore = true;
		},

		jstore: function () {
			jStore = true;
		},

		kstore: function () {
			kStore = true;
		},

		lstore: function () {
			lStore = true;
		},

		mstore: function () {
			mStore = true;
		},

		nstore: function () {
			nStore = true;
		},

		ostore: function () {
			oStore = true;
		},

		pstore: function () {
			pStore = true;
		},

		qstore: function () {
			qStore = true;
		},

		rstore: function () {
			rStore = true;
		},

		sstore: function () {
			sStore = true;
		},

		tstore: function () {
			tStore = true;
		},

		ustore: function () {
			uStore = true;
		},

		vstore: function () {
			vStore = true;
		},

		wstore: function () {
			wStore = true;
		},

		xstore: function () {
			xStore = true;
		},

		ystore: function () {
			yStore = true;
		},

		zstore: function () {
			zStore = true;
		},

		wrongFunc: function() {
			wrongDiv.removeChild(wrongDiv.firstChild);
			wrongCounter--;
			wrongDisplay = document.createTextNode(wrongCounter);
			wrongDiv.appendChild(wrongDisplay);
			if (wrongCounter === 0) {
			alert("You lose!");
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
		if (winCounter === 0) {
			winDiv.removeChild(winDiv.firstChild);

			totalWins++;

			winDisplay = document.createTextNode(totalWins);

			winDiv.appendChild(winDisplay);

			alert("You win!");

			x = 0;

			blankArray = [];

			wrongCounter = 10;

			catStore = false;

			mouseStore = false;

			giraffeStore = false;

			opossumStore = false;

			salamanderStore = false;

			aStore = false;

			bStore = false;

			cStore = false;

			dStore = false;

			eStore = false;

			fStore = false;

			gStore = false;

			hStore = false;

			iStore = false;

			jStore = false;

			kStore = false;

			lStore = false;

			mStore = false;

			nStore = false;

			oStore = false;

			pStore = false;

			qStore = false;

			rStore = false;

			sStore = false;

			tStore = false;

			uStore = false;

			vStore = false;

			wStore = false;

			xStore = false;

			yStore = false;

			zStore = false;

			document.getElementById("current_word").innerHTML = "";

			document.getElementById("guessed").innerHTML = "";

			wordStore = wordArray[Math.floor((Math.random() * 5) + 0)];

			wordFunc.catWord();

			wordFunc.mouseWord();

			wordFunc.giraffeWord();

			wordFunc.opossumWord();

			wordFunc.salamanderWord();
			} 
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
				this.displayCorrect();
				x = 0;
				this.astore();
			}
			else if (giraffeStore){
				guessNum = 0;
				blankArray.push("a");
				this.displayCorrect();
				x = 0;
				this.astore();
			}
			else if (salamanderStore){
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
			if (bStore){
				this.prompt();
			}
			else {
				guessNum = 1;
				this.displayGuess();
				this.bstore();
			}

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

		d: function() {
			if (dStore){
				this.prompt();
			}
			else if (salamanderStore){
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
			else if (giraffeStore){
				guessNum = 4;
				blankArray.push("e");
				this.displayCorrect();
				x = 0;
				this.estore();
			}
			else if (salamanderStore){
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
			if (fStore){
				this.prompt();
			}
			else if (giraffeStore){
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
			if (gStore){
				this.prompt();
			}
			else if (giraffeStore){
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
			if (hStore){
				this.prompt();
			}
			else {
				guessNum = 7;
				this.displayGuess();
				this.hstore();
			}

		},

		i: function() {
			if (iStore){
				this.prompt();
			}
			else if (giraffeStore){
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
			if (jStore){
				this.prompt();
			}
			else {
				guessNum = 9;
				this.displayGuess();
				this.jstore();
			}

		},

		k: function() {
			if (kStore){
				this.prompt();
			}
			else {
				guessNum = 10;
				this.displayGuess();
				this.kstore();
			}

		},

		l: function() {
			if (lStore){
				this.prompt();
			}
			else if (salamanderStore){
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
			if (mStore){
				this.prompt();
			}
			else if (mouseStore){
				guessNum = 12;
				blankArray.push("m");
				this.displayCorrect();
				x = 0;
				this.mstore();
			}
			else if (opossumStore){
				guessNum = 12;
				blankArray.push("m");
				this.displayCorrect();
				x = 0;
				this.mstore();
			}
			else if (salamanderStore){
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
			if (nStore){
				this.prompt();
			}
			else if (salamanderStore){
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
			if (oStore){
				this.prompt();
			}
			else if (mouseStore){
				guessNum = 14;
				blankArray.push("o");
				this.displayCorrect();
				x = 0;
				this.ostore();
			}
			else if (opossumStore){
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
			if (pStore){
				this.prompt();
			}
			else if (opossumStore){
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
			if (qStore){
				this.prompt();
			}
			else {
				guessNum = 16;
				this.displayGuess();
				this.qstore();
			}

		},

		r: function() {
			if (rStore){
				this.prompt();
			}
			else if (giraffeStore){
				guessNum = 17;
				blankArray.push("r");
				this.displayCorrect();
				x = 0;
				this.rstore();
			}
			else if (salamanderStore){
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
			if (sStore){
				this.prompt();
			}
			else if (mouseStore){
				guessNum = 18;
				blankArray.push("s");
				this.displayCorrect();
				x = 0;
				this.sstore();
			}
			else if (opossumStore){
				guessNum = 18;
				blankArray.push("s");
				this.displayCorrect();
				x = 0;
				this.sstore();
			}
			else if (salamanderStore){
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

		u: function() {
			if (uStore){
				this.prompt();
			}
			else if (mouseStore){
				guessNum = 20;
				blankArray.push("u");
				this.displayCorrect();
				x = 0;
				this.ustore();
			}
			else if (opossumStore){
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
			if (vStore){
				this.prompt();
			}
			else {
				guessNum = 21;
				this.displayGuess();
				this.vstore();
			} 
		},

		w: function() {
			if (wStore){
				this.prompt();
			}
			else {
				guessNum = 22;
				this.displayGuess();
				this.wstore();
			} 
		},

		x: function() {
			if (xStore){
				this.prompt();
			}
			else {
				guessNum = 23;
				this.displayGuess();
				this.xstore();
			} 
		},

		y: function() {
			if (yStore){
				this.prompt();
			}
			else {
				guessNum = 24;
				this.displayGuess();
				this.ystore();
			} 
		},

		z: function() {
			if (zStore){
				this.prompt();
			}
			else {
				guessNum = 25;
				this.displayGuess();
				this.zstore();
			} 
		}
}
	/*jank code right here, just to get functions running for now */
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
