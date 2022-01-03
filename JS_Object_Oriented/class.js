class Person{
	constructor(name, first, second){
		this.name = name;
		this.first = first;
		this.second = second;
	}
	sum = function(){
		return (this.first+this.second);
	}
}

class PersonPlus extends Person{
	avg(){
		return 'avg: ' + (this.first+this.second)/2;
	}
}

var song = new Person('song', 10, 20);
song.sum = function(){
	return 'this: ' +(this.first+this.second);
}
console.log('song', song);
console.log('song.sum()', song.sum());

var yoo = new Person('yoo', 20, 30);
console.log('yoo.sum()', yoo.sum());

var kim = new PersonPlus('kim', 20, 40);
kim.sum = function(){
	return 'that: ' +(this.first+this.second);
}
console.log('kim', kim);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());
