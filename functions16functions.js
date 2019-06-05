//you can pass a function into a function, as we saw with functions 15!!!

function sum(arr, f) {
    //null function returns argument unmodified if no function supplied
    if (typeof f != 'function') f = x => x;

    return arr.reduce((a, x) => a += f(x), 0);
    //returns the reduction of supplied array, running the supplied function
    //on each element.
}

console.log(sum([1, 2, 3])); //since there's no funtion, reduce simply adds the elements
                            //and 'sum' supplies a function that returns each element unaltered...
console.log(sum([1, 2, 3], x => x*x)); //'sum' multiplies each element by itself, and then adds it
                                        //to the previous result.
console.log(sum([1, 2, 3], x => Math.pow(x, 3)));//'sum' cubes each element and then adds it to the previous result

//we can also return a function from a function:

//i.e. rather than supply two arguments to the above all the time, we may need to just supply the array
//to do this, we should like to create a function that acccepts a function and creates a custom function
//as a result:

//we could do this:

/* function sumOfSquares(arr) {
    return sum(arr, x => x*x);//calls our original 'sum' function
} */

//but it would be inefficient if you were to want different functions 
//so..

function newSummer(f) {
    return arr => sum(arr, f);
}

//to use this, we create variables that store the needed functions:

const sumOfSquares = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));

console.log(sumOfSquares([1, 2, 3]));//14
console.log(sumOfCubes([1, 2, 3]));//36

//brilliant!

