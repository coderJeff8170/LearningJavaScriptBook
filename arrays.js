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

console.log(arr3.slice(3));// returns subarray [4,5] (starts at index 3, returns rest)
console.log(arr3.slice(2, 4));// [3, 4] (starts at index 2, ends at 4 noninclusive)
console.log(arr3.slice(-2));// [4, 5] (starts at index -2, returns rest)
console.log(arr3.slice(1, -2));// [2, 3] second argument always noninclusive!
console.log(arr3.slice(-2, -1));// [4] remember^^

//splice allows you to add to the array, in-place. First index is start, second
//is number of elements to remove, and remaining arguments are those to be added:

const arr4 = [1, 5, 7];

console.log(arr4.splice(1, 0, 2, 3, 4));// returns []; arr4 is now [1, 2, 3, 4, 5, 7]
console.log(arr4.splice(5, 0, 6));// returns []; arr4 is now [1, 2, 3, 4, 5, 6, 7]
console.log(arr4.splice(1, 2));// return [2, 3]; arr4 is now [1, 4, 5, 6, 7]
console.log(arr4.splice(2, 1, 'a', 'b'));// returns [5]; arr4 is now [1, 4, 'a', 'b', 6, 7]

//copyWithin is new to ES6; It allows you to copy a portion of an array and overwrite
//elements elsewhere in said array. First argument: target(where to copy to), second argument
//where to copy from, and third, optional argument, where to stop copying from.

const arr5 = [1, 2, 3, 4];

console.log(arr5.copyWithin(1, 2));//arr5 is now [1, 3, 3, 4]
console.log(arr5.copyWithin(2, 0, 2));//arr5 is now [1, 3, 1, 3]
console.log(arr5.copyWithin(0, -3, -1));//arr5 is now [1, 3, 1, 3]
//remember that end argument is noninclusive!

//fill is also new to ES6; Allows you to set any number of elements with a fixed value in place.
//particularly useful when used with array constructor (which allows you to specify initial size
//of array). You can optionally specify a start and end index if you only wish to fill
//part of the array:

const arr6 = new Array(5).fill(1); //arr6 is initialized to [1, 1, 1, 1, 1]

console.log(arr6.fill("a"));//arr 6 is now ["a", "a", "a", "a", "a"]
console.log(arr6.fill("b", 1));//arr 6 is now ["a", "b", "b", "b", "b"]
console.log(arr6.fill("c", 2, 4));//arr 6 is now ["a", "b", "c", "c", "b"]
console.log(arr6.fill(5.5, -4));//arr 6 is now ["a", 5.5, 5.5, 5.5, 5.5]//start index inclusive!
console.log(arr6.fill(0, -3, -1));//arr 6 is now ["a", 5.5, 0, 0, 5.5]//end index not!!








