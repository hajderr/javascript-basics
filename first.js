var APP = function(_size) {

	//function vars
	var size = _size;

	//function methods
	
	return {
		getSize: function() { return size; }
	}
}(120);

//now the variable APP is a scope. 
console.log(APP.getSize());
