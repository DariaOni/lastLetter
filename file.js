function lastLetter(string) {
	let str = string.split(' ');
	// ['Richard', 'of', 'york', 'gave', 'battle', 'in', 'vain']
	const arrLength = str.length;

	for (i = 0; i < arrLength; i++) {
		if (checkLastLetter(str[i])) {
			const strLength = str[i].length;
			str[i] = str[i].slice(0, strLength - 1) + str[i].slice(-1).toUpperCase();
		}
	}

	return str.join(' ');
}

function checkLastLetter(str) {
	if (str.length == 0) {
		return;
	}
	console.log(`checkLastLetter param: ${str}`);

	let symbols = 'abcdefghijklmnopqrstuvwxyz'; // ABC
	let lastEl = str.charAt(str.length - 1);
	console.log(`checkLastLetter lastEl: ${lastEl}`);
	if (symbols.includes(lastEl)) {
		console.log(`checkLastLetter symbols.includes(lastEl): true}`);
		return true;
	} else {
		console.log(`checkLastLetter symbols.includes(lastEl): false}`);
		return false;
	}
}

let rainbow = 'Richard, of york- gave: battle in[ vain .';

console.log(lastLetter(rainbow));
