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

// let name = "Irena";//global
// let age = 25;//global

// function greet() {
//     console.log(`Hello,  ${name}`);
// }
// function getBirthYear() {
//     return new Date().getFullYear() - age;
// }
//BY THE WAY - THIS WONT RUN BECAUSE THE FUNTIONS HAVENT BEEN CALLED
//^^this is a problem because you may run into problems with such generic
//variable names as 'name' and 'age' at the global level
// a better approach is to put user information in a single object:

// let user = {
//     name = "Irena",
//     age = 25,
// };
//AUTHOR MADE A MISTAKE - this will generate an "invalid property initializer" error
//because when declaring an object a property must have a colon between it and the value.

// let user = {
//     name: "Irena",
//     age: 25,
// };//unfortunately, the functions themselves are still dependent on the global scope
// function greet() {
//     console.log(`Hello, ${user.name}`);
// }
// function getBirthYear() {
//     user.age = new Date().getFullYear();
// }
// //^this is pretty cool - author had this vvvv not sure that even does anything
// //     return new Date().getFullYear() - user.age;
// greet();
// getBirthYear();
// console.log(`You are ${user.age} years old!`);

let user = {
    name: "Irena",
    age: 25,
};
function greet(user) {
    console.log(`Hello, ${this.name}`);
}
function getBirthYear(user) {
    console.log(this.age);
    return new Date().getFullYear() - this.age;
}

greet();
greet(user);
// greet(Irena);
console.log(getBirthYear());
console.log(`You are ${user.age} years old!`);

//ok so the authors shit still doesn't work - it throws an error until I use `this`
//I guess I'm finally getting that
//It works now, but I'm getting 
//Hello, undefined
//Hello, undefined
//undefined
//NaN
//You are 25 years old!
