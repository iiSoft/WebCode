/**
 * 参考资料：[Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) 
 *
 */

var myCar = new Object();

// 定义属性方法1
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar);

// 定义属性方法2
myCar["color"] = "bule";
console.log(myCar);

var v = "year";
console.log(myCar[v]);

// 遍历自己属性方法1
function showProps(obj, objName) {
	var result = "";
	console.log(obj.hasOwnProperty);
	for (var i in obj) {
		console.log(i);
		if (obj.hasOwnProperty(i)) {
			result += objName + "." + i + " = " + obj[i] + "\n";
		}
	}

	return result;
}
console.log(showProps(myCar, "myCar"));

// 遍历自己属性方法2
console.log(Object.keys(myCar));

// 遍历自己属性方法3
console.log(Object.getOwnPropertyNames(myCar));

// 遍历所有属性方法
// 通过循环查询原型链
function listAllProperties(obj) {
	var objectToInspect;
	var result = [];

	for(var objectToInspect = obj; objectToInspect != null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
		result = result.concat(Object.getOwnPropertyNames(objectToInspect));
	}

	return result;
}
console.log(listAllProperties(myCar));

// 创建对象方法1（赋值表达式）
var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};
console.log(myHonda);

// 创建对象方法2（new）
function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}
var myCar = new Car("Eagle", "Talon TSi", 1993);
console.log(myCar);

// 在定义对象之后继续添加属性
myCar.color = "black";
console.log(myCar);

// 创建对象方法3（Object.create()）
var Animal = {
	type : "Invertebrates",	// Default value of properties
	displayType : function() {	
		console.log(this.type);
	}
};
var animal1 = Object.create(Animal);
animal1.displayType();

// Indexing object properties
var myCar = new Car("Eagle", "Talon TSi", 1993);	
myCar[5] = "25m mpg";
console.log(myCar);	// Car {5: "25m mpg", make: "Eagle", model: "Talon TSi", year: 1993}

// 为某类型的所有对象添加属性，而不是仅为某一对象
// 利用prototype
Car.prototype.color = null;
myCar.color = "black";
console.log(myCar);

// 方法定义
function displayCar() {
	var result = "A Beautiful " + this.year + " " + this.make + " " + this.model;
	console.log(result);
}
function Car(make, model, year, owner) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.owner = owner;
	this.displayCar = displayCar;
}

var car1 = new Car("China", "Tesl", 2001, "xic");
console.log(car1);

// Getter & Setter（默认属性名称为）
var d = Date.prototype;
Object.defineProperty(d, "year", {
	get: function() { return this.getFullYear(); },
	set: function(y) { this.setFullYear(y); }
});
var now = new Date();
console.log(now.year);
now.year = 2001;
console.log(now);

// 定义通用Getter & Setter方法1
var o1 = {
	a : 7,
	get b() { return this.a + 1; },
	set c(x) { this.a = x/2; }
};

// 定义通用Getter & Setter方法2（动态添加）
var o2 = { a : 0};
Object.defineProperties(o2, {
	"b" : { get: function () { return this.a + 1; } },
	"c" : { set: function(x) { this.a = x/2; } }
});
o1.c = 10;
console.log(o1.b);
o2.c = 10;
console.log(o2.b);

// Comparing Objects
var fruit = {name: "apple"};
var fruitbear = {name: "apple"};
console.log(fruit == fruitbear);	// false ==/=== : is same type?
console.log(fruit === fruitbear);	// false === : no type convention

var fruit = {name: "apple"};
var fruitbear = fruit;
console.log(fruit == fruitbear);	// ture
console.log(fruit === fruitbear);	// ture