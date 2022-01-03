function Person(name, first, second, third){
	this.name = name,
	this.first = first,
	this.second = second,
	this.third = third
}

Person.prototype.sum = function(){
	return 'prototype: ' +(this.first+this.second+this.third);
}

var song = new Person('song', 10, 20, 30);
song.sum = function(){
	return 'this: ' +(this.first+this.second);
}
// 먼저 song에게 sum 속성이 있는지 검색하고 있으면 실행
var yoo = new Person('yoo', 100, 200, 300);
// 없으면 생성자 Person의 sum을 참조함
console.log("song.sum()", song.sum());
console.log("yoo.sum()", yoo.sum());
console.log("Person.prototype", Person.prototype)
console.log("Object.prototype", Object.prototype)

