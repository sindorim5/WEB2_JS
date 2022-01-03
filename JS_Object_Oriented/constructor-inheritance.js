function Person(name, first, second){
	this.name = name;
	this.first = first;
	this.second = second;
}
Person.prototype.sum = function(){
	return this.first + this.second;
}
function PersonPlus(name, first, second, third){
	Person.call(this, name, first, second);
	this.third = third;
}
//PersonPlus.prototype.__proto__ = Person.prototype;
PersonPlus.prototype = Object.create(Person.prototype); //기존의 PersonPlus 객체를 대체함
PersonPlus.prototype.constructor = PersonPlus; // constructor를 다시 설정해줘야됨

PersonPlus.prototype.avg = function(){
	return (this.first+this.second+this.third)/3;
}
var song = new PersonPlus('song', 10, 20, 30);
console.log('song.sum()', song.sum());
console.log('song.avg()', song.avg());
console.log('song.constructor', song.constructor);
