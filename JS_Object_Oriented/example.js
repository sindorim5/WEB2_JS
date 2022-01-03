var obj = {
	name: "test",
	func1: function(){
		console.log(this.name);
	}
};

obj.func1();
