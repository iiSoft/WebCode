// Iterating over an Array
let iterable1 = [10, 20, 30];

for (let value of iterable1) {
	console.log(value);
}

// Iterating over a String
let iterable2 = "boo";

for (let value of iterable2) {
  console.log(value);
}

// Iterating over a TypedArray
let iterable3 = new Uint8Array([0x00, 0xff]);

for (let value of iterable3) {
  console.log(value);
}
// 0
// 255


// Iterating over a Map
let iterable4 = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable4) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

for (let [key, value] of iterable4) {
  console.log(value);
}
// 1
// 2
// 3


// Iterating over a Set
// The Set object lets you store unique values of any type, whether primitive values or object references.
let iterable5 = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable5) {
  console.log(value);
}
// 1
// 2
// 3
