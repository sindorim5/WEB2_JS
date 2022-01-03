var song = {name: 'song', first: 10, second: 20}
var yoo = {name: 'yoo', first: 20, second: 30}

function sum(prefix){
	return prefix+(this.first+this.second);
}

console.log("sum.call(song)", sum.call(song, ': '));
console.log("sum.call(yoo)", sum.call(yoo, '=> '));

var songSum = sum.bind(song, '--> ');
console.log('songSum()', songSum());
