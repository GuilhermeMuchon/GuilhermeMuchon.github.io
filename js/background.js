createBackground();

function createBackground() {
	var colors = ['#E1F7D5', '#FFBDBD', '#C9C9FF', '#F1CBFF', '#FFDFD3', '#FEC8D8', '#FFFFBA', '#BAFFC9', '#BAE1FF'];
	var randNum;

	createDivs();

	function createDivs() {
		var divVector = [];
		var newColor, prevColor = null;
		var body = document.getElementById('body');

		for (i = 0; i < 70; i++) {
			randNum = Math.floor(Math.random() * colors.length);

			newColor = colors[randNum];

			changeSameColor(prevColor, newColor);

			divVector[i] = document.createElement('div');
			divVector[i].className = 'backgroundBlock';
			divVector[i].style.backgroundColor = colors[randNum];
			body.appendChild(divVector[i]);

			prevColor = colors[randNum];
		}

	}

	function checkSameColor(prevColor, newColor) {
		return prevColor == newColor;
	}

	function changeSameColor(prevColor, newColor) {
		if (checkSameColor(prevColor, newColor)) {
			randNum = Math.floor(Math.random() * colors.length);
			newColor = colors[randNum];
			changeSameColor(prevColor, newColor);
		}
	}
}