//maps are similar to objects in that they can map a key to a value.
//objects have some drawbacks that maps address:

/* 
    the prototypal nature of objects can cause mappings not intended
    no easy way to know how many mappings in an object
    keys must be strings or symbols
    objects don't guarantee order to their properties
 */

 //for example if you wanted to map user objects to roles...

 const u1 = { name: 'Jeff' };
 const u2 = { name: 'Jenn' };
 const u3 = { name: 'Sophia' };
 const u4 = { name: 'Joan' };

 //you would start by creating a map:

 const userRoles = new Map();

//then you can use the map to assign users to roles by using it's set() method...
//there are several ways to do this - regular, chaining, and passing an array:

userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');
//no role for Joan! :/

/*
chaining:

userRoles
    .set(u1, 'User');
    .set(u2, 'User');
    .set(u3, 'Admin');
*/

/*
pass an array of arrays:

const userRoles = new Map([
    [u1, 'User'],
    [u2, 'User'],
    [u3, 'Admin'],
])
*/

//now we can use the get method to determine what role what user has:

console.log(userRoles.get(u2));

//if you call get on a key that isn't in the map, you'll get undefined;
//u can use the has() method to determine if a map contains a given key:

console.log(userRoles.has(u1));//'User'
console.log(userRoles.get(u1));//true
console.log(userRoles.has(u4));//false - we didn't add Joan!
console.log(userRoles.get(u4));//undefined

//if you call set() on a key already in the map, it'll be overwritten:

console.log(userRoles.get(u1));//'User'
userRoles.set(u1, 'Admin');
console.log(userRoles.get(u1));//changed to 'Admin'!

//the size property will return the number of entries in the map:

console.log(userRoles.size);//3

//we can use the keys() method to get the keys of a map, values() to return values, 
//and entries() to return the 'key: value' pairs. All these methods will return an
//iterable object, which can then be iterated over by a for...of loop:

/* for(let u of userRoles.keys()) {
    console.log(u.name);
}
for(let r of userRoles.values()) {
    console.log(r);
}
for(let ur of userRoles.entries()) {
    console.log(`${ur[0].name}: ${ur[1]}`);
} */ 
//this is all very well, but the syntax can be more efficient with destructuring:

/* for(let [u, r] of userRoles.entries()) {
    console.log(`${u.name}: ${r}`);
} */
// and the entries method can be dropped, for it's the default iterator for a map!
for(let [u, r] of userRoles) {
    console.log(`${u.name}: ${r}`);
} //very cool!

/* Jeff: Admin
Jenn: User
Sophia: Admin */

//if you need an array instead of an iterable value, use the spread operator:

console.log([...userRoles.values()]);//[ 'Admin', 'User', 'Admin' ]

//to delete a single entry from a map, use the delete method:

userRoles.delete(u2);
console.log(userRoles.size);//now 2

//and if you want to clear the whole damned thing:

userRoles.clear();
console.log(userRoles.size);// now 0




