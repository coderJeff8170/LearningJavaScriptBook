//Function scope -HOISTING!

//Beware the var declaration! Variables declared with var are immediately available
//to the whole scope in which they are declared, even before the declaration!

/* x;                  
console.log(x);     //undefined - `let` would not let you get past this without an error
var x = 5;
console.log(x);     //5
x;
console.log(x);     //5
 */
//remember that only the declaration gets hoisted, not the assignment
//JavaScript sees this ^^^ as this vvv

/*
var x;              //JS hoists the declaration
x;                  
console.log(x);     //undefined - `let` would not let you get past this without an error
x = 5;              //JS sees x already declared by var at the top via hoisting
console.log(x);     //5
x;
console.log(x);     //5
 */

//Remember IT IS FOLLY TO USE VARIABLES BEFORE DECLARING THEM! BAD PRACTICE!
//JUST BE AWARE THAT IT IS POSSIBLE

//VAR WILL NOT 'MASK' VARIABLES EITHER.

/* var x = 3;
console.log(x);
if(x === 3) {
    var x = 2;
    console.log(x);
}
console.log(x); */

//nuts!

//functions are also hoisted, but not if they're defined within a variable
//what if they're declared and then assigned to a variable??

/* f();                    //logs 'f'
function f() {
    console.log('f');
}
 */

/* f();                        //won't work - reference error: f is not defined
let f = function f() {
    console.log('f');
} */


console.log(f);                     //f is undefined but you won't get an error
var f = function f() {
    console.log('f');
}

//TEMPORAl DEAD ZONE - All code before a variable is declared.

//STRICT MODE - accessed with the string 'use strict' - will execute in whatever 
//scope that you invoke it. If used globally, it will contaminate other scripts
//called by the DOM, so if you have to use it globally in one script and you're
//worried about it, enclose that script in an IIFE!!
