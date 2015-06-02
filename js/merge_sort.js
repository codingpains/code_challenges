var merge = function(half1, half2) {
	var k   = 0,
		res = [];

	for(k; k < (half1.length + half2.length); k++) {
		if (half1[half1.length - 1] < half2[half2.length - 1]) {
			res.unshift(half1.pop());
		} else {
			res.unshift(half2.pop());
		}
	}

	res = res.concat(half1, half2);
	return res;
}

var merge_sort = function(arr) {
	var half1, half2, sorted;

	half1 = arr.slice(0, arr.length/2);
	half2 = arr.slice(arr.length/2);

	if (arr.length < 2) {
		return merge(half1, half2);
	}

	return merge(merge_sort(half1), merge_sort(half2));
}

for(var run = 0; run < 100; run++) {
	var toSort = [];

	for(var i = 0; i < 42; i++) {
		toSort.push(Math.round(Math.random() * 100))
	}

	console.log("\nSort ", merge_sort(toSort).join(','));
}