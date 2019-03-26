const bruce = { name: "Bruce"};
const madeline = { name: "Madeline"};

function greet() {
    return `Hello, I'm ${this.name}!`;
}

console.log(greet()); //undefined
console.log(greet.call(bruce)); //Hello, I'm Bruce!
console.log(greet.call(madeline)); //Hello I'm Madeline!

//call allows us to call the function as if it were a method
//it provides an object to bind `this` to

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
//bruce is now {name: "Bruce", birthYear: 1949,
//occupation: "singer"}
update.call(madeline, 1942, 'actress');
//madeline is now {name: "Madeline", birthYear: 1949,
//occupation: "actress"}

//notice how the first parameter is the subject of the `call`, 
//and update adds two more parameters....
console.log(bruce);//obj bruce is updated!
console.log(madeline);//obj madeline is updated!

update.apply(bruce, [1955, "actor"]);
//bruce is now {name: "Bruce", birthYear: 1955,
//occupation: "actor"}
update.apply(madeline, [1918, "writer"]);
//bruce is now {name: "Bruce", birthYear: 1918,
//occupation: "writer"}
console.log(bruce);//obj bruce is updated!
console.log(madeline);//obj madeline is updated!
//apply is useful if you have an array, and want to use it's values 
//as arguments to a function (parse! - notice with call, the values
//you want to add are separated by commas as within an object, but
//with apply, you're applying the values within an array that is one
//argument)  - CALL: regular APPLY: ARRAY - all associated with`this`

const jeffsArray = [2, 3, -5, 15, 19];
console.log(Math.min.apply(null, jeffsArray)); //returns -5
console.log(Math.max.apply(null, jeffsArray)); //returns 19

//using the spread (...) operator instead of apply
//In instances where we care about the `this` value we still have to use call
//but in instances where that first parameter doesn't matter, we can use ...
//to call the function directly

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);//equivalent to apply(bruce, newBruce) - notice that newBruce
//points to an array
console.log(Math.min(...jeffsArray));
console.log(Math.max(...jeffsArray));

console.log(newBruce);

const newNewBruce = [1978, "ELO"];
update.call(newBruce, newNewBruce);
console.log(newNewBruce);
//Jesus. At this point I can't really see the difference between apply and call
//okay the book says call takes arguments directly, apply takes them as an array
//well then why does the above work?

//bind: allows you to specify the value for `this`

let updateBruce = update.bind(bruce);//new variable containing the
//binding of `this` to bruce
//beware! 
updateBruce(1904, "actor");
console.log(bruce);
updateBruce.call(madeline, 1274, "king");
console.log(bruce);

updateBruce = update.bind(bruce, 1949, "king");// binding just makes it so that some
//values can't be changed. This is why it's both powerful, but potentially dangerous.
updateBruce("actor", 1900, "queen");
console.log(bruce);





