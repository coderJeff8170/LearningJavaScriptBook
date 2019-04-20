//switch statements 
//allow you to take multiple paths based upon one statement

/* switch (expression) {
    case value1: //executed when result of expression matches value1;
    break;
    case value2: //executed when result of expression matches value2;
    break;
    ...
    case valueN: //executed when result of expression matches valueN;
    break;
    default: //executed when result of expression matches none of the values;
    break;
} */
//provide and example below of your own:

dogs = ['marley', 'buddy', 'nilla'];
switch (dogs[2]) {
    case 'marley': //executed when result of expression matches value1;
    console.log(`you found a Marley!`);
    break;
    case 'buddy': //executed when result of expression matches value2;
    console.log(`you found a Buddy!`);
    break;
    case 'nilla': //executed when result of expression matches valueN;
    console.log(`you found a Nilla!`);
    break;
    default: //executed when result of expression matches none of the values;
    console.log(`none of the dogs in the array are here!`);
    break;
}

// if you eliminate the break in any statement, you get a "fall through exception"
//this seems like an error, but can be used to great advantage if you want two cases to happen as a result of
//the switch. Document the shit out of it though, esp if someone else will be looking at your code.

//for in loop!
//designed to loop over the property keys of an object:

//for(variable in object)
//{ statement }

const dog = { name: "Marley", breed: "Mutt", superPower: "hunger"};
for (let prop in dog) {
    if(!dog.hasOwnProperty(prop)) console.log('no dog here!');
    else {
        console.log(prop + ': ' + dog[prop]);
    }
}
/* returns:
name: Marley
breed: Mutt
superPower: hunger */


//you could use any word at all in place of 'prop'.
// this is an example of validation
// here if the dog didn't have her own property prop, you'd 'continue'
// or step over the next line in the loop

//for of loop
//designed to loop over any iterable object, ideal for looping over an array 
//when you don't need to know the index number:
//for(variable of object)
//statement

const cats = ['mamacat', 'sallie', 'waylan'];

for(let kitty of cats)
    console.log(`You have a cat called...${kitty}`);

/* returns:
You have a cat called...mamacat
You have a cat called...sallie
You have a cat called...waylan 

Both of the above will loop as many times as items in the iterable
*/

let cats2 = ['fluff', 'mojo', 'dickens', 10];

for(let kitty of cats2){ 
    if (!isNaN(kitty)) {
        console.log(`${kitty} is a number, not a cat!`);
    } else {
    console.log(`You have a cat called...${kitty}`);
    }

}

console.log(`\n`);
//you can also use this loop for validation

//but if you need the index, just use a regular for loop:

let cats3 = ['gypsy', 'nelson', 'chloe', 'cleo', 'cougarann', 'misskitty'];

for (let i=0; i<cats3.length; i++) {
    console.log(`kitty: ${i+1}: ${cats3[i]}`);
    }
/*  output: kitty: 1: gypsy
            kitty: 2: nelson
            kitty: 3: chloe
            kitty: 4: cleo
            kitty: 5: cougarann
            kitty: 6: misskitty
*/
console.log(`\n`);

//let's use a for loop to notify the crazy cat lady when things are gettin' out of hand:

    let cats4 = ['gypsy', 'nelson', 'chloe', 'cleo', 'cougarann', 'misskitty', 'nabi'];

    for (let i=0; i<cats4.length; i++) {
        if ([i]>4) {
            
            console.log(`${cats4[i]} is ${[i]-4} cat(s) too many!`);
        } else {
            console.log(`kitty: ${i+1}: ${cats4[i]}`);
        }

    }//great! after a couple of infinite loops spooled up the fans and I had to quit VScode
    //to avoid a meltdown, I'm wondering how to get 1 cat too many and 2 cats too many etc.
    //finally after like 30 mins of subtracting indexes from incrementors and vice versa, it dawns on 
    //me that all I have to do is subtract the "ok amount of cats" from the index of the
    //"cat too many. ha!"