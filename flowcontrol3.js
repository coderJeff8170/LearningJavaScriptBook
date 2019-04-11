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
// this is an example of validation
// here if the dog didn't have her own property prop, you'd 'continue'
// or step over the next line in the loop

//for of loop
//designed to loop over any iterable object, ideal for looping over an array 
//when you don't need to know the index number:
//for(variable of object)
//statement

const cats = ['mamacat', 'sallie', 'waylan'];

//for(let kitty of cats)


