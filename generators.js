//generators are functions that use an iterator to control their execution
//whereas regular functions take arguments and return values, generators
//can be controlled at any stage.

//generators have an asterisk after the word 'function' and can use the keyword
//'yield' as well as 'return'.

function* rainbow() {
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

//when you call a generator, you get back an iterator:

const it = rainbow();
console.log(it.next()); //{ value: 'red', done: false }
console.log(it.next()); //{ value: 'orange', done: false }
console.log(it.next()); //{ value: 'yellow', done: false }
console.log(it.next()); //{ value: 'green', done: false }
console.log(it.next()); //{ value: 'blue', done: false }
console.log(it.next()); //{ value: 'indigo', done: false }
console.log(it.next()); //{ value: 'violet', done: false }
console.log(it.next()); //{ value: 'undefined', done: true }

for(let color of rainbow()) {
    console.log(color);
}
//this will log all the colors of the rainbow by themselves! Very useful.
