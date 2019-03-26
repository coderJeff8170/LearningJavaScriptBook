// we know that arguments in a function exist only in the body of the function.

// function f(x) {
//     return x + 3;
// }

// console.log(f(5));//8
// console.log(x); - undefined, as x is not reachable outside of f
// the scope of x is function f

//garbage collection - a variable can be out of scope but still exist 
//by doing so, it still is allocated memory. once a variable ceases to exist
//that memory is periodically reclaimed automatically in JS, so it's not something
//we have to worry about unless the app is really demanding.

//when we look at the source code, we are looking at a program's "lexical structure"

// function f1() {
//     console.log('one');
// }
// function f2() {
//     console.log('two');
// }

// f2();
// f1();
// f2(); -- all this shows is how when code runs it jumps around.

// const x = 3;

// function f() {
//     console.log(x);
//     console.log(y);
// }

// {//new scope
//     const y = 5;
//     f();
// }
//none of the above would work, because y hasn't been defined - it's in a different scope. duh.

//there are three kinds of scope: global, block and function.

//GLOBAL
//basically at the start of your program
//anything you declare here is available to all other scopes in your program



//BLOCK



//FUNCTION

