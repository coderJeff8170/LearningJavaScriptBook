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

//map and filter

//map transforms the elements in the array to whatever you want:
//designed to add wanted things to the array using a function?
//returns a new array with elements added by a function...


const cart = [ {name: 'Widget', price: 9.95 }, {name: 'Gadget', price: 22.95 } ];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x*0.8);
const lcNames = names.map(x => x.toLowerCase());
//^^this should be const lcNames = names.map(String.toLowerCase); but I can't get it to work. It says names.map is undefined


console.log(names);
console.log(prices);
console.log(discountPrices);
console.log(lcNames);

//if we had items and prices in two separate arrays we can use map to combine them:

const items = [ 'Widget', 'Gadget' ];
const prices2 = [ 9.95, 22.95 ];
const cart2 = items.map((x, i) => ({ name: x, price: prices[i]}));
console.log(cart2); //[ { name: 'Widget', price: 9.95 }, { name: 'Gadget', price: 22.95 } ]
//pretty cool.
//we're not just using the element itself(x), but it's index [i]; 
//we need to do this to correlate indexes between items and prices
//map converts an array of strings to an array of keys, then adding values from another array,
//thus making an array of objects. 
//*note the parentheses around the curly braces
// - without them the arrow function would take that as a block to be executed!

//filter
//designed to remove unwanted things from the array using a function
//returns a new array with elements removed using a function.
//function needs to take parameters tho which is why homeboy didn't work above - toLowerCAse don't!


