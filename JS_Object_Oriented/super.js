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
	constructor(name, first, second, third){
		super(name, first, second);
		this.third = third;
	}
	sum(){
		return super.sum()+this.third;
	}
	avg(){
		return 'avg: ' + (this.first+this.second)/2;
	}
}

var kim = new PersonPlus('kim', 20, 40, 60);
console.log("kim.sum()", kim.sum());
