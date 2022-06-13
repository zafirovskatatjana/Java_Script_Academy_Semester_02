var counter = function(arr){
	return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a, b){
	return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

// -> 01 Nacin
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// -> 02, kako objekt
module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
}