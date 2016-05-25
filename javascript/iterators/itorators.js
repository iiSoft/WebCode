function makeIterator(array) {
	var nextIndex = 0;

	return {
		next: function() {
			return nextIndex < array.length ? 
				{value: array[nextIndex++], done: false} : 
				{done: true};
		}
	};
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value);	// 'yo'
console.log(it.next().value);	// 'ya'
console.log(it.next().done);	// true


// User-defined iterables
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]


// Syntaxes expecting iterables
for (let value of ["a", "b", "c"]) {
	console.log(value);
}

[..."abc"] // ["a", "b", "c"]

function* gen() {
	yield* ["a", "b", "c"];
}
gen().next() //{value:"a", done:false}

[a, b, c] = new Set(["a", "b", "c"]);
a // "a"


// Examples using the iteration protocols
// String's default iterator returns the string's characters one by one:
var someString = "hi";
typeof someString[Symbol.iterator];          // "function"

var iterator = someString[Symbol.iterator]();
                               
console.log(iterator + "");						// "[object String Iterator]"
 
iterator.next();                             // { value: "h", done: false }
iterator.next();                             // { value: "i", done: false }
iterator.next();                             // { value: undefined, done: true }

// spread operator
[...someString]								 // ["h", "i"]


// redefine the iteration behavior
var someString = new String("hi");          // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function() {
  return { // this is the iterator object, returning a single element, the string "bye"
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: "bye", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};

[...someString];                              // ["bye"]
someString + "";                              // "hi"


// User-defined iterables
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
	yield 1;
	yield 2;
	yield 3;
};
[...myIterable];	// [1, 2, 3]


var myObj = {};
new Map([[1,"a"],[2,"b"],[3,"c"]]).get(2);               // "b"
new WeakMap([[{},"a"],[myObj,"b"],[{},"c"]]).get(myObj); // "b"
new Set([1, 2, 3]).has(3);                               // true
new Set("123").has("2");                                 // true
new WeakSet(function*() {
    yield {};
    yield myObj;
    yield {};
}()).has(myObj);       