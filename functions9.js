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

//notice how the first parameter is the subject of the `call`, and update adds two more parameters....
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
//apply is useful if you have an array, and want to use it's values as arguments to a function (parse!)

const jeffsArray = [2, 3, -5, 15, 19];
console.log(Math.min.apply(null, jeffsArray)); //returns -5
console.log(Math.max.apply(null, jeffsArray)); //returns 19



