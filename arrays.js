//ARRAYS! 

//Adding and removing single elements

//push and pop are actions on a stack, and work on the most recent elements(end of array?)
//shift and unshift are actions on a queue and work on the oldes elements(front of array?)

//push and unshift return the new length of the array after new element added;
//pop and shift return the element that was removed

const arr1 = ["b", "c", "d"];

console.log(arr1.push("e")); //4 (length of array returned, e added to end)
console.log(arr1);          // ["b", "c", "d", "e"]
console.log(arr1.pop());    //e (e returned, e removed from end)
console.log(arr1);          // ["b", "c", "d"]
console.log(arr1.unshift("a")); //4 (length of array returned, a added to beginning)
console.log(arr1);          // ["a", "b", "c", "d"]
console.log(arr1.shift());  //a (a returned, a removed from beginning)
console.log(arr1);          // ["b", "c", "d"]

//the concat() method adds multiple elements to the array and returns a copy

const arr2 = [1, 2, 3];

console.log(arr2.concat(4, 5, 6)); //returns [1, 2, 3, 4, 5, 6] arr2 unmodified
console.log(arr2.concat([4, 5, 6])); //returns [1, 2, 3, 4, 5, 6] arr2 unmodified
console.log(arr2.concat([4, 5], 6)); //returns [1, 2, 3, 4, 5, 6] arr2 unmodified
console.log(arr2.concat(4, [5, 6])); //returns [1, 2, 3, 4, 5, 6] arr2 unmodified (another author error)

//slice allows you to get a subarray from an array, takes two arguments,
//which are the beginning and ending indexes. First is inclusive, the second is not.
//if you omit the second argument, it returns everything to the end of the string.

const arr3 = [1, 2, 3, 4, 5];

console.log();
console.log();
console.log();

console.log();

