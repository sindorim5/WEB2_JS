function Person(name, age) {
	this.name = name;
	this.age = age;
	this.printMe = function() {
	  return console.log(this.name, this.age + "살입니다.");
	}
  }

  var kim = new Person("kim", 15);
  kim.printMe();

  var lee = new Person("lee", 16);
  lee.printMe = function() {
	return console.log(this.name, this.age);
  }
  lee.printMe();

  var park = new Person("park", 17);
  Person.prototype.printMe = function() {
	return console.log(this.name, this.age + "살");
  }
  park.printMe();

  var choi = new Person("choi", 18);
  choi.printMe();
