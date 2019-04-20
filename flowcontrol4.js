//you should know control flow exceptions and what they are
//break: breaks out of loop completely.
//continue: skip to next step in loop.
//return: exits the current function, regardless of control flow.
//throw: indicates and exception that must be caught by an exception handler, 
//even if it's outside the current control flow statement.

//all of these are applicable and very useful in validation.

//use continue to reduce conditional nesting

/* while(funds > 1 && < 100) {
    let totalBet = rand(1, funds);
    if(totalBet == 13) {
        console.log("Unlucky! Skip this round...");
    } else {
        // play ...
    }
} */

//works better, flattened with 'continue'

/* while(funds > 1 && < 100) {// remember that this is the code that wraps the entire C & A game
    let totalBet = rand(1, funds);
    if(totalBet == 13) {
        console.log("Unlucky! Skip this round...");
        continue;
    } 
        // play ...
} */

//as Alberto pointed out if your loop exists to find something and then stop
//there's no point in going on if you find what you're looking for early.

//eg determining if a number is prime can be computationally expensive

/* let firstPrime = null;
for(let n of bigArrayOfNumbers) {
    if(isPrime(n) && firstPrime === null) firstPrime = n;
} 
*/
//^^ this would be folly because it would iterate through the whole array before letting
//you know the first prime number
/* let firstPrime = null;
for(let n of bigArrayOfNumbers) {
    if(isPrime(n)) {
         firstPrime = n;
         break;
    }
} 
*/
//^^ this would work much better, as it would leave the loop as soon as it found 
//the first prime number

//we can use this same example with slight modification to use the value of an 
//index at the break point, which can be useful:

/* 
let i = 0;
for(; i < bigArrayOfNumbers.length; i++) {
    if(isPrime(bigArrayOfNumbers[i])) break'
}
if(i === bigArrayOfNumbers.length) console.log(`no prime numbers!);//just in case there ain't any!!!
else console.log(`first prime number found at position ${i}`);
*/

//Use descending indexes when modifying lists; Using ascending indexes can skip elements
//that meet your criteria.
//We do this, because if you add or remove an element, it affects the next index value in the array

//this won't work:

/* 
for (let i=0; i<bigArrayOfNumbers.length; i++) {
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}
*/

//this will: 

/* 
for (let i=bigArrayOfNumbers.length-1; i>=0; i--) {
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}
*/

/* let bigArrayOfNumbers = [2, 4, 3, 5, 17, 13, 12, 57, 45, 67, 53];

for (let i=bigArrayOfNumbers.length-1; i>=0; i--) {
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}

console.log(bigArrayOfNumbers);d
 */
//isPrime doesn't seem to work here, but there are functions online that can be copied to make it work