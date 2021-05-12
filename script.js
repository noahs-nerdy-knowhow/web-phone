let colorScheme = 0;
let background = document.getElementById("bg");

background.onclick = function() {
	background.style.display = "none";
}

function switchColorScheme() {
	switch(colorScheme) {
		case 0:
			colorScheme = 1;
			background.src = background.src.replace("-light", "-dark");
			break;
		case 1:
			colorScheme = 0;
			background.src = background.src.replace("-dark", "-light");
			break;
	}
}
