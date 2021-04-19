function stringToArray(string) {
  return string.split(" ");
}


//задача 1 https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//задача 2 https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const min = (list) => {
  return Math.min(...list);
};

const max = (list) => {
  return Math.max(...list);
};

//задача 3 https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
function min(arr, toReturn) {
  if (toReturn === "value") return Math.min(...arr);
  return arr.indexOf(Math.min(...arr));
}

//задача 4 https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function warnTheSheep(queue) {
  const position = [...queue].reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;;
}

//задача 5 https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function maps(x){
  return x.map(n => n * 2);
}

//задача 6 ttps://www.codewars.com/kata/beginner-lost-without-a-map

function firstNonConsecutive (arr) {
  const result = arr.find((number, index) => number !== index + arr[0]);
  return Number.isInteger(result) ? result : null;
}

//задача 7 https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
