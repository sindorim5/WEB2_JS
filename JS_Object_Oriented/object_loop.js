var memberArray = ['karina', 'winter', 'giselle', 'ningning'];
console.group('array loop');
var i = 0;
while(i < memberArray.length){
	console.log(memberArray[i]);
	i += 1;
}
console.groupEnd('array loop')
var memberObject = {
	'rocket puncher': 'karina',
	armamenter: 'winter',
	xenoglossy: 'giselle',
	'E.D Hacker': 'ningning',
	producer: 'soo-man'
}
console.group('object loop');
for(var name in memberObject){
	console.log(name, memberObject[name]);
}
console.groupEnd('object loop');
