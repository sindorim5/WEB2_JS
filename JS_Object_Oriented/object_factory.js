function Person(name, first, second, third){
	this.name= name,
	this.first = first,
	this.second = second,
	this.third = third;
	this.sum = function(){
		return this.first+this.second+this.third;
	}
}

var song = new Person('song', 10, 20, 30);
var yoo = new Person('yoo', 100, 200, 300);

console.log("song.sum()", song.sum());
console.log("yoo.sum()", yoo.sum());

var d1 = new Date('2021-12-29');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth()); // 0부터 카운트해서 12가 아닌 11이 나옴

console.log('Date', Date);

console.log('Person()', Person());
console.log('new Person()', new Person());
