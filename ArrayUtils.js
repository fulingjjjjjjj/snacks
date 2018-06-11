
Array.prototype.toJsonWithKey = function(keyColumn){
	var resut = {};
	for(var i =0;i<this.length;i++){resut[this[i][keyColumn]] = this[i];}
	return resut;
}

Array.prototype.toJson = function(keyColumn){
	var resut = {};
	for(var i =0;i<this.length;i++){resut[this[i][keyColumn]] = this[i];}
	return resut;
}
Array.prototype.indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val)
			return i;
	}
	return -1;
};
Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};
Array.prototype.forEach = function(fn) {
	for (var i = 0; i < this.length; i++) {
		fn.call(this,i, this[i]);
	}
};