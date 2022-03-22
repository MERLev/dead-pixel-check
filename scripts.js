window.addEventListener('load', (event) => {
	var mode = 0;
	var modes = [
		'black',
		'white',
		'red',
		'green',
		'blue',
		'#FFFF00',
		'#FF00FF',
		'#00FFFF'
	]
	document.body.style.background = modes[mode];
	document.addEventListener('click', function(event) {
		mode = (mode + 1) % modes.length;
		document.body.style.background = modes[mode];
	});
	document.addEventListener('keypress', function(event) {
		mode = (mode + 1) % modes.length;
		document.body.style.background = modes[mode];
	});
});