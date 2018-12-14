function changeText(text) {
	var display = document.getElementById("presentation");
	display.style.opacity = 0;
	setTimeout(function() {
		display.innerHTML = text;
		display.style.opacity = .6;
	}, 500);
}

function changeBack() {
	var display = document.getElementById("presentation");
	display.style.opacity = 0;
	setTimeout(function() {
		display.innerHTML = "Guilherme Muchon -- Developer";
		display.style.opacity = .6;
	}, 500);
}