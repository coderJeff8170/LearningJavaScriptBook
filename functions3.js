function f(x) {
    console.log(`inside f: x=${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after assignment)`);
}
//function defined

let x = 3;//variable assigned, note that it's a primitive
//x is assigned the value 3 outside of the function
console.log(`before calling f: x=${x}`);
//x is 3 before the function is called
f(x);
//function is called with parameter x
//at first, while x is still 3, the value is logged to console
//then, the function assigns the value 5, still inside function, and logs to console
console.log(`after calling f: x=${x}`);
//after function is run, the value of x is logged to console, but it's 3!!
//this shows that the value is changed ONLY WITHIN THE FUNCTION
//EVEN THOUGH THE VARIABLE HAS THE SAME NAME
