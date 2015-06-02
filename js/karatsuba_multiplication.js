// Recursive algorithm that multiplies two integers in
// just 3 recursive calls.

// Mathematical Equation
// x*y= 10^n(a*c) + 10^(n/2)(ad+bc) + bd.
// 
// 1. Split x and y into a,b,c,d.
// 2. Compute a*c recursively.
// 3. Compute b*d recursively.
// 4. Compute (a+b)(d+c) recursively.
// 5. Substract ac and bd from (a+b)(d+c)
// 6. Replace values in Karatsuba Equation and compute.

var splitNum = function(str) {
	var mid = str.length % 2 === 0 ? str.length / 2 : (str.length / 2) + 1;
	var a = parseInt(str.substring(0, mid));
	var b = parseInt(str.substring(mid));
	return [a,b]
}

var karatsuba = function(x, y) {
	var a,b,c,d;
	var n, n2;
	var prod1, prod2, prod3, subst;
	var tmp;

	x = x.toString();
	y = y.toString();

	if (x.length === 1 || y.length === 1) {
		return parseInt(x)*parseInt(y);
	} 

	tmp = splitNum(x);
	a   = tmp[0];
	b   = tmp[1];

	tmp = splitNum(y);
	c   = tmp[0];
	d   = tmp[1];

	prod1 = karatsuba(a, c);	
	prod2 = karatsuba(b, d);
	prod3 = karatsuba(a+b, d+c);

	subst = prod3 - prod2 - prod1;

	n  = x.length < y.length ? x.length : y.length;
	n2 = Math.floor(n/2);

	return Math.pow(10,n)*(prod1) + Math.pow(10,n2)*(subst) + prod2;
}

// res = karatsuba(12,34);
// console.log("Multiply 12*34, result is ", res, res === (12*34));
// res = karatsuba(56,78);
// console.log("Multiply 56*78, result is ", res, res === (56*78));
res = karatsuba(181,23);
console.log("Multiply 181*23, result is ", res, res === (181*23));
res = karatsuba(181,212);
console.log("Multiply 181*212, result is ", res, res === (181*212));
// res = karatsuba(561, 181);
// console.log("Multiply 561*181, result is ", res, res === (561*181));
// res = karatsuba(1234, 5678);
// console.log("Multiply 1234*5678, result is ", res, res === (1234*5678));
// res = karatsuba(2014, 1984);
// console.log("Multiply 2014*1984, result is ", res, res === (2014*1984));
// res = karatsuba(25415896, 223599874);
// console.log("Multiply 25415896*223599874, result is ", res, res === (25415896*223599874));