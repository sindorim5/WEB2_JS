var memberArray = ['karina', 'winter', 'giselle', 'ningning'];
console.log("memberArray[2]:", memberArray[2]);

var memberObject = {
	'rocket puncher': 'karina',
	armamenter: 'winter',
	xenoglossy: 'giselle',
	'E.D Hacker': 'ningning',
	producer: 'soo-man'
}

console.log("memberObject.armamenter:", memberObject.armamenter);
console.log("memberObject[E.D Hacker]:", memberObject["E.D Hacker"]);
delete memberObject.producer
console.log('after delete memberObject.producer:', memberObject.producer);
