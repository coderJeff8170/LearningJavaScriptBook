//as with sets in math, a set is a collection of data where duplicates aren't allowed
//using the user roles example in maps, all users can be 'users' while only some are
//'admins'. Since it doesn't make sense for a user to have the same rol
//multiple times, the set is the perfect data structure for this problem.

//here's how this works:

const roles = new Set();

roles.add("User");
console.log(roles);// Set { 'User' }

//to make this user an administrator, call add() again

roles.add("Admin");
console.log(roles);// Set { 'User', 'Admin' }

//like Map, Set has a size property

console.log(roles.size);// 2

//the beauty of sets is that if we try to add something already there, 
//nothing happens. 
console.log(roles.add("User"));// Set { 'User', 'Admin' }
//to remove a role, we simply call delete(), which 
//will return true if the item deleted was there, and false if not:

console.log(roles.delete("Admin"));// true
console.log(roles);// Set { 'User' }
console.log(roles.delete("Admin"));// false

//WEAK SETS
//the only use for weak sets is determining whether or not a given
//object is in a set or not.
//interestingly you can do that with sets already. 
//apparently the only diff is this:

/* 
can only contain objects
values are not iterable (sure look iterable to me!)
may be garbage collected.
*/

const naughty = new WeakSet();

const children = [
    { name: "Heather" },
    { name: "Jeffrey" },
    { name: "Colin" },
];

naughty.add(children[1]);

for(let child of children) {
    if(naughty.has(child))
        console.log(`Coal for ${child.name}!`);
    else
        console.log(`Presents for ${child.name}!`);
}

// lolol