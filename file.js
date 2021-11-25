function lastLetter(string) {
	str = string.split(' ');

	for (i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(str[i].length - 1).toUpperCase();
	}

	return str.join(' ');
}

let rainbow = 'Richard of york, gave battle in vain';

lastLetter(rainbow);
