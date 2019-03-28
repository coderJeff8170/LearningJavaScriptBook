//FUNCTION

//It is common to define a function inside a specific scope so that it explicitly
//has access to that scope - this is a CLOSURE (closing the scope around the function):

/* let globalFunc; //undefined global function
{
    let blockVar = 'a'; //block scoped variable
    globalFunc = function() {
        console.log(blockVar);
    }
}
globalFunc();   //logs 'a' */

//blockVar is declared inside the block and is inaccessible outside of that scope
//globalFunc, however, is accessible on the global scale and can reference the variable inside
//the closure.

let f; 
{
    let o = {note: 'Safe'};
    f = function() {
        console.log(o);
        return o;
    }
}

let oRef = f();
console.log(f());
console.log(oRef);
oRef.note = "Not so safe after all!";
console.log(f());
//not sure of the implications of this, but i suspect that things within the closure can
//be changed? OOOOOOOHHHHHHH! Yah. You can change F from outside the closure by assigning
// it to a variable. This is why IIFEs are so important?



