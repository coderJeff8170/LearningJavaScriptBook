//sometimes we just want to know if an element is there, not what it is
//or where it is. Use `some` and `every`

const arr = [5, 7, 12, 16, 19];

console.log(arr.some(x => x%2===0));// returns true since it's found at least one element divisible by two.
console.log(arr.some(x => Number.isInteger(Math.sqrt(x)))); //true also - 16 has a square root integer of four
console.log(arr.some(x => x<=4)); //returns false

//every returns true if every element passes the criteria, and false otherwise:

const arr2 = [4, 6, 16, 36];

console.log(arr2.every(x => x%2===0));// returns true since all elements divisible by two
console.log(arr2.every(x => Number.isInteger(Math.sqrt(x))));//false, 6 is not square