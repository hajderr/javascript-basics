function make_node(v) {
    var data = v || -1;
    var seed = 190;

    return {
	data: data,
	next: undefined
    };
}

function make_tree(data, left, right) {
    var data = data || -1;
    var left = left || undefined;
    var right = right || undefined;
    
    return {
	left: left,
	right: right,
	data: data
    }
}

function walk_tree(root) {
    var top = root;
    while(root !== undefined) {
	console.log(root.data);
	root = root.left;
    }

    root = top;

    while(root !== undefined) {
	console.log(root.data);
	root = root.right;
    }
}

var root = make_tree(10);
root.left = make_tree(30);
root.right = make_tree(50);

console.log('walking the tree');
walk_tree(root);


var list = make_node(10);
list.next = make_node(20);

console.log('using power function');

while (list !== undefined) {
    console.log(list.data);
    list = list.next;
}

function Node() {
       
	this.data = undefined;
	this.next = undefined;
}

var list = new Node();
list.data = 0;

list.next = new Node();
list.next.data = 1;

list.next.next = undefined;

while (list !== undefined) {
	console.log(list.data);
	list = list.next;
}

console.log('Trying Object Literal {}');

var node = {
	data: undefined,
	next: undefined
};

var list  = Object.create(node);
list.data = 30;
list.next = Object.create(node);

list.next.data = 40;
list.next.next = undefined;


while(list !== undefined) {
	console.log(list.data);
	list = list.next;
}

console.log('Trying function object. A function assigned to a variable');

var node = (function() {

	var data = undefined;
	var next = undefined;

	return {
		data: this.data,
		next: this.next 
	}
});

var list = node();

list.data = 100;
list.next = node();

list.next.data = 200;
list.next.next = undefined;

while(list !== undefined) {
	console.log(list.data);
	list = list.next
} 
