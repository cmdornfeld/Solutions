function minimumRemovals(arr) {
	const reducer = (acc, item) => {
		return acc + item;
	}
	let total = arr.reduce(reducer, 0);
    
    return total % 2;
}