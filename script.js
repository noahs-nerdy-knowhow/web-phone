let colorScheme = 0;
let background = document.getElementById("bg");

function switchColorScheme() {
	switch(colorScheme) {
		case 0:
			colorScheme = 1;
			break;
		case 1:
			colorScheme = 0;
			break;
	}
}
