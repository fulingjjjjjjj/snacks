var JSONfn = [];
Object.prototype.getArrayAsValue = function(){
	var array = new Array();
	for(var name in this){
		if(JSONfn.indexOf(name)==-1)array.push(this[name]);
	}
	return array;
}
JSONfn.push("getArrayAsValue");

Object.prototype.getArrayAsName = function(){
	var array = new Array();
	for(var name in this){
		if(JSONfn.indexOf(name)==-1)array.push(name);
	}
	return array;
}
JSONfn.push("getArrayAsName");
Object.prototype.getArray = function(){
	var array = new Array();
	for(var name in this){
		if(JSONfn.indexOf(name)==-1)array.push({name:this[name]});
	}
	return array;
}
JSONfn.push("getArray");

Object.prototype.forEach = function(fn){
	for(var name in this){
		if(JSONfn.indexOf(name)==-1)fn.call(this,name, this[name]);
	}
}
JSONfn.push("forEach");
Object.prototype.toJson = function(){
	return eval("("+this+")");
}
JSONfn.push("toJson");

