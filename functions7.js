//Function Properties (methods)

const o = {
    name: 'Marley',                        //primitive property
    bark: function() { return 'Yip!';},    //function property (method)
}

console.log(o.bark);    //returns [Function: bark]
console.log(o.bark());  //returns Yip! (function must be called to invoke method)

//There is shorthand in ES6 for this^^

const b = {
    name: 'Marley',                 //primitive property
    bark() { return 'Yip!';},       //function property (method)
}

console.log(b.bark);    //returns [Function: bark]
console.log(b.bark());  //returns Yip!
