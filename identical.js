function isIdentical(s) {
	let newS = s.split('');
	return newS.every(x => x === s[0]);
}