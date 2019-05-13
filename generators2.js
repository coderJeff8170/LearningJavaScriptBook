//generators allow two-way communications between the generator and it's caller:

function* interrogate() {
    const name = yield "What is your name?";//{ value: 'What is your name?', done: false }
    const color = yield "What is your favorite color?";//{ value: 'What is your favorite color?', done: false }
    return `${name}'s favorite color is ${color}.`;//{ value: 'Jeff\'s favorite color is orange.', done: true }
    //glitch! console inserts an escape character on the apostrophe!
}

const it = interrogate();
console.log(it.next());
console.log(it.next("Jeff"));
console.log(it.next('orange'));

//callling return anywhere in the generator results in the value: done being 'true'

for(let prop of interrogate()) {
    console.log(prop);
}

//^^ this shows that using return does not return a value when done is 'true'.
//they allow computation to happen only as needed - vital in asynchronous execution.

//not recommended to use 'return' to provide a meaningful value from a generator
//instead, always use 'yield' and limit 'return' to stopping the generator early if needed.
