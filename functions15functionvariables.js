//you can use a function wherever a variable is used. Why is this useful?
//1, you can alias a function by creating a variable that points to it (efficiency)
//2, put functions in an array, mixed with other types of data
//3, use functions as properties of an object
//4, pass a function into a function
//5, return a function from a function
//and 6, return a function from a function that itself takes a function as an argument...

//1. aliasing a function - consider this ludicrous example:

function addThreeSquareAddFiveTakeSquareRoot(x) {
    return Math.sqrt(Math.pow(x+3, 2) + 5);
}

//we could rewrite the following:

const answer1 = (addThreeSquareAddFiveTakeSquareRoot(5) +
addThreeSquareAddFiveTakeSquareRoot(2)) /
addThreeSquareAddFiveTakeSquareRoot(7);
console.log(answer1); //1.3451659672026264

//as:

const f = addThreeSquareAddFiveTakeSquareRoot;
const answer2 = (f(5) + f(2)) / f(7);
console.log(answer2); //1.3451659672026264

//see? it's much shorter, and easier to read.
//you won't see anything like this example, but it will come up in 'namespaceing'
//which is fairly common:
