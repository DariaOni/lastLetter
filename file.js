function lastLetter(string) {
	if (checkLastLetter(string) === false) {
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

	for (let i = 0; i < string.length; i++) {
		if (symbols.indexOf(string.charAt(i) != -1)) {
			return false;
		}
		return true;
	}
}

let rainbow = 'Richard of york gave battle in vain';

lastLetter(rainbow);

function checkLastLetter(string) {
	let symbols = '~`!#$%^&*+=-[]\\\';,/{}|":<>?';

	for (let i = 0; i < string.length; i++) {
		if (symbols.indexOf(string.charAt(i)) != -1) {
			return false;
		} else {
			return true;
		}
	}
}
