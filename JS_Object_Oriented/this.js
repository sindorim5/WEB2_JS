var song = {
	name: 'song',
	first: 10,
	second: 20,
	sum1:function(x, y){
		return x+y;
	},
	sum2:function(){
		return this.first+this.second;
	}
}

console.log("song.sum1(song.first, song.second)", song.sum1(song.first, song.second));
console.log("song.sum2(song.first, song.second)", song.sum2());

