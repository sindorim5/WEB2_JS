var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj;

var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal:', subObj.subVal);
console.log('subObj.superVal:', subObj.superVal);

subObj.superVal = 'subsub';
console.log('superObj.superVal:', superObj.superVal);
console.log('subObj.superVal:', subObj.superVal);

song = {
	name:'song',
	first: 10,
	second: 20,
	sum:function(){
		return this.first+this.second;
	}
}
// yoo = {
// 	name:'lee',
// 	first: 20,
// 	second: 30,
// 	avg:function(){
// 		return (this.first+this.second)/2;
// 	}
// }
// yoo.__proto__ = song;

var yoo = Object.create(song);
yoo.name = 'yoo';
yoo.first = 20;
yoo.second = 30;
yoo.avg = function(){
	return (this.first+this.second)/2;
}
console.log('song.sum():', song.sum());
console.log('yoo.sum():', yoo.sum());
console.log('yoo.avg():', yoo.avg());

