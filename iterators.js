//an iterator is like a bookmark - an array is an example of an iterable object
//so it would make sense that an iterable object is kind of like a book, where
//each element is string that represents a page.

const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!"
];

//we can get an iterator on 'book' by using the 'values' method:

const it = book.values();

//we use the 'next' method to 'read' 'book':
//(next has two properties, 'value', which marks where you are, and 'done')

console.log(it.next()); //{ value: 'Twinkle, twinkle, little bat!', done: false }
console.log(it.next()); //{ value: 'How I wonder what you\'re at!', done: false }
console.log(it.next()); //{ value: 'Up above the world you fly,', done: false }
console.log(it.next()); //{ value: 'Like a tea tray in the sky.', done: false }
console.log(it.next()); //{ value: 'Twinkle, twinkle, little bat!', done: false }
console.log(it.next()); //{ value: 'How I wonder what you\'re at!', done: false }
console.log(it.next()); //{ value: undefined, done: true }
console.log(it.next()); //{ value: undefined, done: true }

//notice 'done' is true only after the last entry has been iterated over.



