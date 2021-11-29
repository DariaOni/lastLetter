function lastLetter(string) {
	if (checkLastLetter(string) === true) {
		return;
	}
	let str = string.split(' ');
	// ['Richard', 'of', 'york', 'gave', 'battle', 'in', 'vain']
	const arrLength = str.length;
	for (i = 0; i < arrLength; i++) {
		const strLength = str[i].length;
		str[i] = str[i].slice(0, strLength - 1) + str[i].slice(-1).toUpperCase();
	}

	return str.join(' ');
}

function checkLastLetter(string) {
	let symbols = '~`!#$%^&*+=-[]\\\';,/{}|":<>?';
	let lastEl = string.charAt(string.length - 1);

	if (symbols.includes(lastEl)) {
		return true;
	} else {
		return false;
	}
}
let rainbow = 'Richard, of york gave battle in vain';

lastLetter(rainbow);
