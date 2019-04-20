//what makes objects special is that you can access properties by their key.

//objects have no given order of enumeration for properties, unlike arrays.

//for this reason, if you want to list out the contents of a container, it's best to use an array.

//if you need an object though, use a for...in loop to enumerate the properties:

//remember the for...in loop is designed to loop over the property keys of an object!

const SYM = Symbol();

const myObject = { a: 1, b: 2, c: 3, [SYM]: 4 };

for(let prop in myObject) {
    if(!myObject.hasOwnProperty(prop)) continue;//remember, continue skips to next step in loop
    console.log(`${prop}: ${myObject[prop]}`);
}// not that the for...in loop doesn't list symbol properties.

//it's possible to use for...in for arrays, but don't. 
//best to use a regular for loop, or forEach instead. You can use a for...of if you don't 
//need the index of an array.

//Object.keys gives us a way to get all of the string properties of an object as an array:

const SYM2 = Symbol();
const myObject2 = { a: 1, b: 2, c: 'waylan', [SYM2]: 4};

console.log(Object.keys(myObject2)); //[ 'a', 'b', 'c' ]

//combine with forEach and an arrow function to list keys and values:

Object.keys(myObject2).forEach(prop => console.log(`${prop}: ${myObject2[prop]}`));

/*  a: 1
    b: 2
    c: waylan */

//same as a for...in loop and we don't have to check 'hasOwnProperty'.
//can be combined with .filter and .forEach and a regExp to look for patterns..

const myObject3 = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };

Object.keys(myObject3)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}: ${myObject3[prop]}`));

/*  xochitl: 2
    xylophone: 5 */
//pretty cool!

//remember arrow functions eliminate lots of curly braces, semis, and the return keyword:

const myObject4 = { apple: 1, bottle: 2, balloon: 3, guitar: 4, badass: 5 };

Object.keys(myObject4)
    .filter(function(prop) {
        return prop.match(/^b/);
    })
    .forEach(function(prop) {
        console.log(`${prop}: ${myObject4[prop]}`);
    });
    




