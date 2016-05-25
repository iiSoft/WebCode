// [this](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
// Global context
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37


// Function context
// Inside a function, the value of this depends on how the function is called.
// 1.Simple call
// Since the code is not in strict mode, the value of this must always be an object so it defaults 
// to the global object.
function f1() {
	return this;
}

f1() === window;	// global object

// In strict mode, the value of this remains at whatever it's set to when entering the execution 
// context. 
function f2(){
  "use strict"; // see strict mode
  return this;
}

f2() === undefined;


// As an object method
// When a function is called as a method of an object, its this is set to the object the method is 
// called on.
var o = {
	prop : 37,
	f: function() {
		return this.prop;
	}
};

console.log(o.f());


// this on the object's prototype chain
// this refers to the object the method was called on, as if the method was on the object.
// inherits it from its prototype
var o = {f: function() {return this.a + this.b;}};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f());


// this with a getter or setter
// A function used as getter or setter has its this bound to the object from which the
// property is being set or gotten.
function sum() {
	return this.a + this. b + this.c;
}

var o = {
	a: 1,
	b: 2,
	c: 3,
	get average() {
		return (this.a + this.b + this.c) / 3;
	}
};

Object.defineProperty(o, 'sum', {
	get: sum, enumerable:true, configurable:true});
console.log(o.average, o.sum);


// As a constructor
// if the return value isn't an object, then the this object is returned
function C() {
	this.a = 37;
}

var o = new C();
console.log(o.a);	// logs 37

function C2() {
	this.a = 37;	// seems to be dead code, or eliminated by the return.
	return {a:38};
}

o = new C2();
console.log(o.a);	// logs 38


// call and apply
function add(c, d) {
	return this.a + this.b + c + d;
}

var o = {a:1, b:3};

add.call(o, 5, 7);	// 1 + 3 + 5 + 7 = 16
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34


// The bind method
// Please refer to the document due to some  difficulty.


// As a DOM event handler
// When called as a listener, turns the related element blue
function bluify(e){
  // Always true
  console.log(this === e.currentTarget); 
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}


function obj(name) {
	if (name) {
		this.name = name;
	}
	return this;
}
obj.prototype.name = "name2";
var a = obj("name1");
var b = new obj;