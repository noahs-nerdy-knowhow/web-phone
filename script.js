let colorScheme = 0;
let background = document.getElementById("bg");

body.onclick = switchColorScheme;


function switchColorScheme() {
	switch(colorScheme) {
		case 0:
			colorScheme = 1;
			background.src = background.src.replace("-light", "-dark");
			document.write(background.src);
			break;
		case 1:
			colorScheme = 0;
			background.src = background.src.replace("-dark", "-light");
			document.write(background.src);
			break;
	}
}
