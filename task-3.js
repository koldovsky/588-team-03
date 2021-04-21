class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//завдання 1  https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

const circleCircumference = circle => 2 * Math.PI * circle.radius;

//завдання 2 https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.status = status;
    this.species = 'shark';
  }
}
class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.status = status;
    this.species = 'cat';
}
  introduce() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
}

}
class Dog extends Animal {
   constructor(name, age, status, master='') {
    super();
    this.master = master;   
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.status = status;
    this.species = 'dog';
}
  introduce() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}
  greetMaster(){
    return `Hello ${this.master}`;
}
}

//завдання 3 https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

function giveMeFive(obj){
    const arr=[];
    for (const key in obj){
    if (key.length==5) arr.push(key);
    if(obj[key].length==5) arr.push(obj[key]);
    
}
  return arr;
}

//завдання 4 https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function buildFun(n){

	var res = []

	for (let i = 0; i< n; i++){
		res.push(function(){
			console.log(i)
      return i
		})
	}
	return res
}

//завдання 5 https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
