const obj = {};



//the contents of an object are called properties or members.
//properties consist of keys or names (color:) and values ('yellow').
//names or keys must be strings or symbols, and values can be any type (including other objects)

//the author doesn't tell you what a member access operator is!
//it is the way in which we provide access to an object's properties,
//and we do this using bracket notation or dot notation:

obj.color = "yellow"; //{color: 'yellow'}
//the .color assigns a property key of color to obj; The = assigns the string
//property value "yellow" to that key. 

console.log(obj);

//this is bracket notation member access and it does the same thing as the dot notation
obj['color'] = 'orange';

//we can see that if we try to assign another key with the same name and a different
//value, it'll just change the value assigned to the key
//if the key doesn't exist, it'll be created:

console.log(obj);

obj.color2 = 'red';

console.log(obj);

//you can use the "computed member access operator" to make property keys that aren't
//valid identifiers:

obj["not an identifier"] = 4;
//obj."not an identifier2" = 5; - this won't work, it'll throw 'unexpected string'

console.log(obj);

//you can use it to access key values:

console.log(obj['color']);// orange

//and we can use it for symbol properties:

const SIZE = Symbol();
obj[SIZE] = 8;

console.log(obj);//obj is now:

/* { color: 'orange',
   color2: 'red',
   'not an identifier': 4,
   [Symbol()]: 8 } */

//notice that SIZE isn't listed - symbols are handled differently in objects.
//SIZE is a symbol

obj.SIZE = 0;// creates a new key SIZE (not the symbol SIZE) and assigns a value of 0!

console.log(obj[SIZE]);// the symbol is accessed here and still has value of 8

console.log(obj.SIZE);// access the regular property

console.log(obj['SIZE']);// accesses the regular property

console.log(obj);

/* { color: 'orange',
  color2: 'red',
  'not an identifier': 4,
  SIZE: 0,
  [Symbol()]: 8 } */







