//ARRAYS! 

//Adding and removing single elements

//push and pop are actions on a stack, and work on the most recent elements(end of array?)
//shift and unshift are actions on a queue and work on the oldes elements(front of array?)

//push and unshift return the new length of the array after new element added;
//pop and shift return the element that was removed

const arr1 = ["b", "c", "d"];

console.log(arr1.push("e")); //4
console.log(arr1);          // ["b", "c", "d", "e"]
console.log(arr1.pop());    //e
console.log(arr1);          // ["b", "c", "d"]
console.log(arr1.unshift("a")); //4
console.log(arr1);          // ["a", "b", "c", "d"]
console.log(arr1.shift());  //a
console.log(arr1);          // ["b", "c", "d"]