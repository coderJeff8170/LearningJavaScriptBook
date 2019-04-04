//if you want to find something in an array you have a few choices:

//indexOf and lastIndexOf:
//finds first(or last) index that matches what you're searching for:
//you can specify an optional start index as a second parameter.

const o = { name: 'Jeffrey' };
const arr = [1, 5, 'a', o, true, 5, [1, 2], "9"];

console.log(arr.indexOf(5));        // returns 1
console.log(arr.lastIndexOf(5));        // returns 5 (indexes are counted from start of array)
console.log(arr.indexOf("a"));        // returns 2 (strings the same with double or single quote)
console.log(arr.lastIndexOf("a"));        // returns 2
console.log(arr.indexOf({ name: 'Jeffrey' }));        // returns -1 (no match)
console.log(arr.indexOf(o));        // returns 3 (o is an object, not a string)
console.log(arr.indexOf([1,2]));        // returns -1???
console.log(arr[6]);                    // returns [1,2] - it's friggin there tho!
console.log(arr.lastIndexOf(2));        // -1; wont search within subarray
console.log(arr.indexOf("9"));        // returns 7
console.log(arr.indexOf(9));        // returns -1


console.log(arr.indexOf("a", 5));        // returns -1 - search starts at index 5
console.log(arr.indexOf(5, 5));        // returns 5 - start index is inclusive
console.log(arr.lastIndexOf(5, 4));    // returns 1 - searches backward, everything before index 4
// but index is still zero based and counted from beginning of array
console.log(arr.lastIndexOf(true, 3)); // returns -1 - start at index 3 and go backward, there is no true.

//findIndex:
//like indexOf, but you can use a function to determine if the element is a match:

const arr2 = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];

console.log(arr2.findIndex(o => o.id === 5)); //returns 0 (first index)why is o not corrupted by object at top? scope?
console.log(o); //{ name: 'Jeffrey' } very interesting
console.log(arr2.findIndex(o => o.name === "Francis")); //returns 1
console.log(arr2.findIndex(o => o.name === "Jeffrey")); //returns -1; yup, scope and variable masking
console.log(arr2.findIndex(o => o === 2)); //returns -1

//ok, what if you want the element itself, and not the index?
//use find instead of findIndex:

console.log(arr2.find(o => o.id=== 7)); //returns object { id: 7, name: 'Francis' }
//console.log(arr2.find(o => o.id=== 2)); //returns null (no, Ethan Brown, it returns undefined!!)

//can also used find with index of current element and whole array as arguments

const arr3 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr3.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));//i don't get this
//I do now. I couldn't get it out of my head on the way to work, remembered most of it and filled
//with some help from Mozilla. It means return the first number found in arr3 past the index of 2
//that also has a square root that's an integer.
//the point is that this is another use of .find and .findIndex

//they also allow you to specify what to use for the `this` variable during the function invocation
//can be handy if you want to invoke a function as if it were a method() of an object

//here, the author searches for a Person object by ID

class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

Person.nextId = 0;

const jeff = new Person("Jeff"),
    jenn = new Person("Jenn"),
    sophia = new Person("Sophia"),
    marley = new Person("Marley");
const arr4 = [jeff, jenn, sophia, marley];

//option1: direct comparison of id:
console.log(arr4.find(p => p.id === jenn.id)); // {name: Jenn id: 1} remember, arr4 is zero based

//option2: using `this` argument:
console.log(arr4.find(p => p.id === this.id,jenn)); //undefined? why?



