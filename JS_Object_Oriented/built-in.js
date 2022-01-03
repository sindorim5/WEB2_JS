console.log("Math.PI", Math.PI)
console.log("Math.random()", Math.random());	//method
console.log("Math.floor(2.7)", Math.floor(2.7));

var MyMath = {
	PI: Math.PI,
	random:function(){
		return Math.random();
	},
	floor:function(val){
		return Math.floor(val);
	}
}

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(2.7)", MyMath.floor(2.7));
