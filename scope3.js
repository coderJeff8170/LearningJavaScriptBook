//Function Scope - IIFES!!!!

/* (function() {}
)(); //this is the basic format of an IIFE */

const message = (function() {
    const secret = "I'm a secret!";
    return `The secret is ${secret.length} characters long!`;
})(); //an IIFE that makes the length of secret immediately available
console.log(message);

const jeff = (function() {
    let count = 0;
    return function() {
        return `Jeff has been called ${++count} times`;//note increment before variable!
    }
})();//an IIFE in action!

console.log(jeff());
console.log(jeff());

console.log(jeff());

console.log(jeff());

console.log(jeff());

console.log(jeff());


