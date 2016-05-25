
// let
// let allows you to declare variables that are limited in scope to the block, 
// atement, or expression on which it is used. This is unlike the var keyword, 
// ich defines a variable globally, or locally to an entire function regardless
// of block scope.

// Block scope with let
function fun1(x, y) {
	if (x > y) {
		let gamma = 12.7 + y;
		i = gamma * x;
	}
}

var list = document.getElementById("list");

for (var i = 1; i <= 5; i++) {
	var item = document.createElement("LI");
	item.appendChild(document.createTextNode("Item " + i));

	let j = i;
	item.onclick = function (ev) {
		console.log("Item " + j + " is clicked");
	};
	list.appendChild(item);
}

var x = 'global';
let y = 'global';
console.log(this.x);
console.log(this.y);
